package com.macro.mall.portal.dao;

import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

public interface ProductAttributeDao {


    @MapKey(value = "id")
    @Select(" select `name`, `input_list`from pms_product_attribute where type = 0 and product_attribute_category_id = #{id,jdbcType=BIGINT} order by sort desc")
    List<Map<String, Object>> getLstByIdAndType(@Param("id") Long id);

}
