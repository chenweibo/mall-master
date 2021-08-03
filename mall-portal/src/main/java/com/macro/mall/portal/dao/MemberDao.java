package com.macro.mall.portal.dao;

import com.macro.mall.model.UmsMember;

public interface MemberDao {

    UmsMember selectByPhone(String phone);
}
