package com.macro.mall.portal.controller;

import com.macro.mall.common.api.CommonResult;
import com.macro.mall.mapper.OmsOrderReturnReasonMapper;
import com.macro.mall.model.OmsOrderReturnApply;
import com.macro.mall.model.UmsMember;
import com.macro.mall.portal.domain.OmsOrderReturnApplyParam;
import com.macro.mall.portal.service.OmsPortalOrderReturnApplyService;
import com.macro.mall.portal.service.OmsPortalOrderService;
import com.macro.mall.portal.service.UmsMemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 申请退货管理Controller
 * Created by macro on 2018/10/17.
 */
@Controller
@Api(tags = "申请退货管理", description = "申请退货管理")
@RequestMapping("/returnApply")
public class OmsPortalOrderReturnApplyController {
    @Autowired
    private OmsPortalOrderReturnApplyService returnApplyService;
    @Autowired
    private UmsMemberService memberService;
    @Autowired
    private OmsPortalOrderService portalOrderService;
    @Autowired
    private OmsOrderReturnReasonMapper omsOrderReturnReasonMapper;

    @ApiOperation("申请退货")
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult create(@RequestBody OmsOrderReturnApplyParam returnApply) {
        int count = returnApplyService.create(returnApply);
        if (count > 0) {
            return CommonResult.success(count);
        }
        return CommonResult.failed();
    }

    @ApiOperation("检测是否存在售后")
    @RequestMapping(value = "/checkOmsOrderReturn", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult checkOmsOrderReturn(@RequestParam Long orderId, @RequestParam String productAttr) {

        return CommonResult.success(returnApplyService.checkOmsOrderReturnApply(orderId, productAttr));
    }

    @ApiOperation("获取售后列表（ 个人申请记录 ）")
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult<List<OmsOrderReturnApply>> list() {

        UmsMember member = memberService.getCurrentMember();

        return CommonResult.success(returnApplyService.getList(member.getUsername()));

    }

    @ApiOperation("获取原因")
    @RequestMapping(value = "/reason", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult reason() {

        return CommonResult.success(omsOrderReturnReasonMapper.selectMapList());
    }


    @ApiOperation("售后订单详情")
    @RequestMapping(value = "/detail/{id}", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult getById(@PathVariable Long id) {

        return CommonResult.success(returnApplyService.getDetailById(id));

    }

}
