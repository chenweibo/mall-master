package com.macro.mall.service.impl;

import cn.hutool.core.date.DateUtil;
import com.macro.mall.dto.AdminStatistics;
import com.macro.mall.mapper.OmsOrderMapper;
import com.macro.mall.model.OmsOrder;
import com.macro.mall.model.OmsOrderExample;
import com.macro.mall.service.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class StatisticsServiceImpl implements StatisticsService {

    @Autowired
    private OmsOrderMapper orderMapper;

    @Override
    public AdminStatistics getAdminStatistics() {

        AdminStatistics adminStatistics = new AdminStatistics();

        //今天时间
        Date date = DateUtil.date();
        Date beginOfDay = DateUtil.beginOfDay(date);
        Date endOfDay = DateUtil.endOfDay(date);
        //昨日时间
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(Calendar.DAY_OF_MONTH, -1);
        Date yesterday = c.getTime();
        Date yesterdaybeginOfDay = DateUtil.beginOfDay(yesterday);
        Date yesterdayendOfDay = DateUtil.endOfDay(yesterday);

//         System.out.println(date);
//        System.out.println(beginOfDay);
//        System.out.println(endOfDay);
        //今天订单数
        OmsOrderExample todayOrderExample = new OmsOrderExample();
        todayOrderExample.createCriteria().andCreateTimeBetween(beginOfDay, endOfDay);
        adminStatistics.setTodayOrder(orderMapper.countByExample(todayOrderExample));

        //昨日订单数
        OmsOrderExample yesterdayOrderExample = new OmsOrderExample();
        yesterdayOrderExample.createCriteria().andCreateTimeBetween(yesterdaybeginOfDay, yesterdayendOfDay);
        adminStatistics.setYesterdayOrder(orderMapper.countByExample(yesterdayOrderExample));
        //今日销售金额
        List<OmsOrder> nowlist = orderMapper.selectByExample(todayOrderExample);

        return adminStatistics;

    }
}
