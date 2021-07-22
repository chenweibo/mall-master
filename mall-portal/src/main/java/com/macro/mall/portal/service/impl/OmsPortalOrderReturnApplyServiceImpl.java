package com.macro.mall.portal.service.impl;

import com.macro.mall.mapper.OmsOrderReturnApplyMapper;
import com.macro.mall.model.OmsOrderReturnApply;
import com.macro.mall.model.OmsOrderReturnApplyExample;
import com.macro.mall.model.PmsProductExample;
import com.macro.mall.model.UmsMember;
import com.macro.mall.portal.domain.OmsOrderReturnApplyParam;
import com.macro.mall.portal.service.OmsPortalOrderReturnApplyService;
import com.macro.mall.portal.service.UmsMemberService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * 订单退货管理Service实现类
 * Created by macro on 2018/10/17.
 */
@Service
public class OmsPortalOrderReturnApplyServiceImpl implements OmsPortalOrderReturnApplyService {
    @Autowired
    private OmsOrderReturnApplyMapper returnApplyMapper;

    @Autowired
    private UmsMemberService memberService;

    @Override
    public int create(OmsOrderReturnApplyParam returnApply) {

        UmsMember currentMember = memberService.getCurrentMember();

        OmsOrderReturnApply realApply = new OmsOrderReturnApply();
        BeanUtils.copyProperties(returnApply, realApply);
        realApply.setCreateTime(new Date());
        realApply.setStatus(0);
        realApply.setMemberUsername(currentMember.getUsername());
        return returnApplyMapper.insert(realApply);
    }

    @Override
    public int checkOmsOrderReturnApply(Long orderId, String productAttr) {

        OmsOrderReturnApplyExample example = new OmsOrderReturnApplyExample();
        OmsOrderReturnApplyExample.Criteria criteria = example.createCriteria();
        criteria.andOrderIdEqualTo(orderId).andProductAttrEqualTo(productAttr);
        List<OmsOrderReturnApply> list = returnApplyMapper.selectByExample(example);
        if (list.size() > 0) {
            return 1;
        } else {
            return 0;
        }

    }

    @Override
    public List<OmsOrderReturnApply> getList(String memberUsername) {

        OmsOrderReturnApplyExample example = new OmsOrderReturnApplyExample();
        OmsOrderReturnApplyExample.Criteria criteria = example.createCriteria();
        criteria.andMemberUsernameEqualTo(memberUsername);

        return returnApplyMapper.selectByExample(example);
    }

    @Override
    public OmsOrderReturnApply getDetailById(Long id) {

        return returnApplyMapper.selectByPrimaryKey(id);
    }

}
