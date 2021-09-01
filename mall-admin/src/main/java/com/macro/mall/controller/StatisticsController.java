package com.macro.mall.controller;

import com.macro.mall.common.api.CommonResult;
import com.macro.mall.service.StatisticsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author xiaobozi
 */
@Controller
@Api(tags = "统计", description = "统计")
@RequestMapping("/statistics")
public class StatisticsController {

    @Autowired
    private StatisticsService statisticsService;

    @ApiOperation("后台统计首页")
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    @ResponseBody
    public CommonResult index() {

        return CommonResult.success(statisticsService.getAdminStatistics());
    }
}
