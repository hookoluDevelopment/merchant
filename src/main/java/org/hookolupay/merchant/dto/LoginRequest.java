package org.hookolupay.merchant.dto;

import lombok.Data;

@Data
public class LoginRequest {
    public String username;
    public String password;
    public String totpCode;
}