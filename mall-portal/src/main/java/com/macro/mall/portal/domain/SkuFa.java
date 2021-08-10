package com.macro.mall.portal.domain;

import lombok.Data;

import java.io.Serializable;

@Data
public class SkuFa implements Serializable {

    private String name;

    private Integer sort;

    private String input_list;

}
