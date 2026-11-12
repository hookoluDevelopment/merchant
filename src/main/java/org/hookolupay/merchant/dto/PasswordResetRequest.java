package org.hookolupay.merchant.dto;

import lombok.Data;

@Data
public class PasswordResetRequest {
    public String username;
    public String dateOfRegistration;
    public Integer ageDuringRegistration;
    public String phoneNo;
    public String emailId;
    public String newPassword;
}