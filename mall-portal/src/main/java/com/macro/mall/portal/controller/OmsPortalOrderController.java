package com.macro.mall.portal.controller;

import com.github.binarywang.wxpay.bean.notify.WxPayNotifyResponse;
import com.github.binarywang.wxpay.bean.notify.WxPayOrderNotifyResult;
import com.github.binarywang.wxpay.bean.order.WxPayMpOrderResult;
import com.github.binarywang.wxpay.bean.request.WxPayUnifiedOrderRequest;
import com.github.binarywang.wxpay.exception.WxPayException;
import com.github.binarywang.wxpay.service.WxPayService;
import com.macro.mall.common.api.CommonPage;
import com.macro.mall.common.api.CommonResult;
import com.macro.mall.model.UmsMember;
import com.macro.mall.portal.domain.*;
import com.macro.mall.portal.service.OmsPortalOrderService;
import com.macro.mall.portal.service.UmsMemberService;
import com.macro.mall.portal.util.SnowFlake;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

/**
 * 订单管理Controller
 * Created by macro on 2018/8/30.
 */
@Controller
@Api(tags = "订单管理", description = "订单管理")
@RequestMapping("/order")
public class OmsPortalOrderController {
    @Autowired
    private OmsPortalOrderService portalOrderService;

    private WxPayService wxService;
    @Autowired
    private UmsMemberService memberService;

    public OmsPortalOrderController(WxPayService wxService) {
        this.wxService = wxService;
    }

    @ApiOperation("根据购物车信息生成确认单信息")
    @RequestMapping(value = "/generateConfirmOrder", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult<ConfirmOrderResult> generateConfirmOrder(@RequestBody List<Long> cartIds) {
        ConfirmOrderResult confirmOrderResult = portalOrderService.generateConfirmOrder(cartIds);
        return CommonResult.success(confirmOrderResult);
    }

    @ApiOperation("根据选中产品立即生成确认单信息")
    @RequestMapping(value = "/generatePromptOrder", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult generatePromptOrder(@RequestBody PromptParams promptParams) {

        ConfirmOrderResult confirmOrderResult = portalOrderService.generateConfirmOrderNow(promptParams);
        return CommonResult.success(confirmOrderResult);
    }

    @ApiOperation("根据购物车信息生成订单")
    @RequestMapping(value = "/generateOrder", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult generateOrder(@RequestBody OrderParam orderParam) {
        Map<String, Object> result = portalOrderService.generateOrder(orderParam);
        return CommonResult.success(result, "下单成功");
    }

    @ApiOperation("立即购买生成订单")
    @RequestMapping(value = "/anongenerateOrder", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult anonGenerateOrder(@RequestBody NowOrderParam orderParam) {
        Map<String, Object> result = portalOrderService.nowGenerateOrder(orderParam);
        return CommonResult.success(result, "下单成功");
    }

    @ApiOperation("发起付款")
    @RequestMapping(value = "/pay", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult pay(@RequestParam Long orderId) throws WxPayException {

        UmsMember member = memberService.getCurrentMember();

        OmsOrderDetail orderDetail = portalOrderService.detail(orderId);

        BigDecimal bignum2 = new BigDecimal("100");
        SnowFlake snowFlake = new SnowFlake(10, 10);
        String snid = snowFlake.nextId() + "";

        portalOrderService.updateOrderSn(orderId, snid);

        WxPayUnifiedOrderRequest request = WxPayUnifiedOrderRequest.newBuilder()
                .openid(member.getOpenid()).notifyUrl("https://wx.ccfczj.com/order/wxpaySuccess")
                .body("商品").outTradeNo(snid).spbillCreateIp("122.114.55.76").tradeType("JSAPI").totalFee(orderDetail.getPayAmount().multiply(bignum2).intValue()).build();

        WxPayMpOrderResult temp = wxService.createOrder(request);
        return CommonResult.success(temp);
    }

    @ApiOperation("wx用户支付成功的回调")
    @RequestMapping(value = "/wxpaySuccess", method = RequestMethod.POST)
    @ResponseBody
    public String parseOrderNotifyResult(@RequestBody String xmlData) throws WxPayException {
        final WxPayOrderNotifyResult notifyResult = this.wxService.parseOrderNotifyResult(xmlData);
        if ("SUCCESS".equals(notifyResult.getResultCode())) {

            BigDecimal wxbigDecimal = new BigDecimal(notifyResult.getTotalFee());

            BigDecimal bai = new BigDecimal(100);

            String orderId = notifyResult.getOutTradeNo();

            portalOrderService.updateOrderSnSuccess(orderId, wxbigDecimal.divide(bai, 2, BigDecimal.ROUND_UP));

            return WxPayNotifyResponse.success("成功");
        }
        return WxPayNotifyResponse.success("成功");
    }


    @ApiOperation("用户支付成功的回调(不需要支付直接成功接口)")
    @RequestMapping(value = "/paySuccess", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult paySuccess(@RequestParam Long orderId, @RequestParam Integer payType) {
        Integer count = portalOrderService.paySuccess(orderId, payType);
        return CommonResult.success(count, "支付成功");
    }

    @ApiOperation("自动取消超时订单")
    @RequestMapping(value = "/cancelTimeOutOrder", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult cancelTimeOutOrder() {
        portalOrderService.cancelTimeOutOrder();
        return CommonResult.success(null);
    }

    @ApiOperation("取消单个超时订单")
    @RequestMapping(value = "/cancelOrder", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult cancelOrder(Long orderId) {
        portalOrderService.sendDelayMessageCancelOrder(orderId);
        return CommonResult.success(null);
    }

    @ApiOperation("按状态分页获取用户订单列表")
    @ApiImplicitParam(name = "status", value = "订单状态：-1->全部；0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭",
            defaultValue = "-1", allowableValues = "-1,0,1,2,3,4", paramType = "query", dataType = "int")
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult<CommonPage<OmsOrderDetail>> list(@RequestParam Integer status,
                                                         @RequestParam(required = false, defaultValue = "1") Integer pageNum,
                                                         @RequestParam(required = false, defaultValue = "5") Integer pageSize) {
        CommonPage<OmsOrderDetail> orderPage = portalOrderService.list(status, pageNum, pageSize);
        return CommonResult.success(orderPage);
    }

    @ApiOperation("根据ID获取订单详情")
    @RequestMapping(value = "/detail/{orderId}", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult<OmsOrderDetail> detail(@PathVariable Long orderId) {
        OmsOrderDetail orderDetail = portalOrderService.detail(orderId);
        return CommonResult.success(orderDetail);
    }

    @ApiOperation("用户取消订单")
    @RequestMapping(value = "/cancelUserOrder", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult cancelUserOrder(Long orderId) {
        portalOrderService.cancelOrder(orderId);
        return CommonResult.success(null);
    }

    @ApiOperation("用户确认收货")
    @RequestMapping(value = "/confirmReceiveOrder", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult confirmReceiveOrder(Long orderId) {
        portalOrderService.confirmReceiveOrder(orderId);
        return CommonResult.success(null);
    }

    @ApiOperation("用户删除订单")
    @RequestMapping(value = "/deleteOrder", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult deleteOrder(Long orderId) {
        portalOrderService.deleteOrder(orderId);
        return CommonResult.success(null);
    }
}
