package org.hookolupay.merchant.dto;

import lombok.Data;

@Data
public class PasswordResetRequest {
    private String username;
    private String dateOfRegistration;
    private Integer ageDuringRegistration;
    private String phoneNo;
    private String emailId;
    private String newPassword;
}