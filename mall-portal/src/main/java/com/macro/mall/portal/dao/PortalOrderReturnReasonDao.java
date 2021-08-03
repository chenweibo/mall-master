package com.macro.mall.portal.dao;

import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

public interface PortalOrderReturnReasonDao {

    @Select("select id,`name` as text from oms_order_return_reason")
    List<Map<String, Object>> selectMapList();

}
