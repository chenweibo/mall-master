package com.macro.mall.dto;

import lombok.Data;

/**
 * @author xiaobozi
 */
@Data
public class AdminStatistics {

    private long todayOrder;

    private Integer todayPay;

    private Integer yesterdayPay;

    private long yesterdayOrder;

}
