package com.macro.mall.portal.domain;

import lombok.Data;

@Data
public class WxGetPhoneParams {

    String iv;

    String encryptedData;

    String sessionKey;

    String openid;

}
