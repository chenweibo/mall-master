package com.macro.mall.portal.controller;

import cn.binarywang.wx.miniapp.api.WxMaService;
import cn.binarywang.wx.miniapp.bean.WxMaJscode2SessionResult;
import cn.binarywang.wx.miniapp.bean.WxMaPhoneNumberInfo;
import com.macro.mall.common.api.CommonResult;
import com.macro.mall.mapper.UmsMemberMapper;
import com.macro.mall.model.SmsCoupon;
import com.macro.mall.model.UmsMember;
import com.macro.mall.portal.config.WxMaConfiguration;
import com.macro.mall.portal.dao.SmsCouponHistoryDao;
import com.macro.mall.portal.domain.WxGetPhoneParams;
import com.macro.mall.portal.service.MemberCollectionService;
import com.macro.mall.portal.service.UmsMemberCouponService;
import com.macro.mall.portal.service.UmsMemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import me.chanjar.weixin.common.error.WxErrorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 会员登录注册管理Controller
 * Created by macro on 2018/8/3.
 */
@Controller
@Api(tags = "会员登录注册管理", description = "会员登录注册管理")
@RequestMapping("/sso")
public class UmsMemberController {
    @Value("${jwt.tokenHeader}")
    private String tokenHeader;
    @Value("${jwt.tokenHead}")
    private String tokenHead;
    @Autowired
    private UmsMemberService memberService;
    @Autowired
    private UmsMemberCouponService memberCouponService;
    @Autowired
    private SmsCouponHistoryDao couponHistoryDao;
    @Autowired
    private MemberCollectionService memberCollectionService;
    @Autowired
    private UmsMemberMapper memberMapper;

    @ApiOperation("会员注册")
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult register(@RequestParam String username,
                                 @RequestParam String password,
                                 @RequestParam String telephone,
                                 @RequestParam String authCode) {
        memberService.register(username, password, telephone, authCode);
        return CommonResult.success(null, "注册成功");
    }

    @ApiOperation("获取sessionkey")
    @RequestMapping(value = "/key", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult getWxSessionKey(@RequestParam String code
    ) throws WxErrorException {
        final WxMaService wxService = WxMaConfiguration.getMaService("wx1ba7d5fb1e82cc58");
        WxMaJscode2SessionResult session = wxService.getUserService().getSessionInfo(code);
        return CommonResult.success(session);
    }


    @ApiOperation("微信登录")
    @RequestMapping(value = "/wx/login", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult wxLogin(@RequestBody WxGetPhoneParams wxGetPhoneParams) {
        //System.out.println(wxGetPhoneParams.getCode());


        final WxMaService wxService = WxMaConfiguration.getMaService("wx1ba7d5fb1e82cc58");

        WxMaPhoneNumberInfo phoneNoInfo = wxService.getUserService().getPhoneNoInfo(wxGetPhoneParams.getSessionKey(), wxGetPhoneParams.getEncryptedData(), wxGetPhoneParams.getIv());
        // System.out.println(phoneNoInfo);
        return CommonResult.success(memberService.wxlogin(phoneNoInfo.getPhoneNumber(), wxGetPhoneParams.getOpenid()));

    }

    @ApiOperation("会员登录")
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult login(@RequestParam String username,
                              @RequestParam String password) {
        String token = memberService.login(username, password);
        if (token == null) {
            return CommonResult.validateFailed("用户名或密码错误");
        }
        Map<String, String> tokenMap = new HashMap<>();
        tokenMap.put("token", token);
        tokenMap.put("tokenHead", tokenHead);
        return CommonResult.success(tokenMap);
    }

    @ApiOperation("获取会员信息")
    @RequestMapping(value = "/info", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult info(Principal principal) {
        if (principal == null) {
            return CommonResult.unauthorized(null);
        }
        UmsMember member = memberService.getCurrentMember();
        return CommonResult.success(member);
    }

    @ApiOperation("获取验证码")
    @RequestMapping(value = "/getAuthCode", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult getAuthCode(@RequestParam String telephone) {
        String authCode = memberService.generateAuthCode(telephone);
        return CommonResult.success(authCode, "获取验证码成功");
    }

    @ApiOperation("修改密码")
    @RequestMapping(value = "/updatePassword", method = RequestMethod.POST)
    @ResponseBody
    public CommonResult updatePassword(@RequestParam String telephone,
                                       @RequestParam String password,
                                       @RequestParam String authCode) {
        memberService.updatePassword(telephone, password, authCode);
        return CommonResult.success(null, "密码修改成功");
    }

    @ApiOperation("获取微信小程序个人中心信息")
    @RequestMapping(value = "/my", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult my(Principal principal) {

        if (principal == null) {
            return CommonResult.unauthorized(null);
        }
        UmsMember member = memberService.getCurrentMember();
        Map<String, Object> result = new HashMap<>();
        result.put("couponNum", couponHistoryDao.getCouponListCount(member.getId(), 0));
        result.put("integration", member);
        //result.put("collectNum", couponHistoryDao.getCouponListCount(member.getId(), 0));
        return CommonResult.success(result, "ok");
    }

    @ApiOperation(value = "刷新token")
    @RequestMapping(value = "/refreshToken", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult refreshToken(HttpServletRequest request) {
        String token = request.getHeader(tokenHeader);
        String refreshToken = memberService.refreshToken(token);
        if (refreshToken == null) {
            return CommonResult.failed("token已经过期！");
        }
        Map<String, String> tokenMap = new HashMap<>();
        tokenMap.put("token", refreshToken);
        tokenMap.put("tokenHead", tokenHead);
        return CommonResult.success(tokenMap);
    }
}
