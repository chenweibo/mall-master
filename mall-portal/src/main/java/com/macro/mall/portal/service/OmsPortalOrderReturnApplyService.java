package com.macro.mall.portal.service;

import com.macro.mall.model.OmsOrderReturnApply;
import com.macro.mall.model.PmsProduct;
import com.macro.mall.portal.domain.OmsOrderReturnApplyParam;

import java.util.List;

/**
 * 前台订单退货管理Service
 * Created by macro on 2018/10/17.
 */
public interface OmsPortalOrderReturnApplyService {
    /**
     * 提交申请
     */
    int create(OmsOrderReturnApplyParam returnApply);

    List<OmsOrderReturnApply> getList(String memberUsername);

    int checkOmsOrderReturnApply(Long orderId,String productAttr);



    OmsOrderReturnApply getDetailById(Long id);
}
