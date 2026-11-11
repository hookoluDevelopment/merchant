package org.hookolupay.merchant.dto;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class SignupRequest {
    private String nameAsPerAadhaar;
    private String panCardNo;
    private String aadhaarNo;
    private String mobileNo;
    private String emailId;
    private String bankAccountNo;
    private String ifscCode;
    private String presentAddress;
    private String permanentAddress;
    private Integer age;
    private String password;
    private String confirmPassword;
}
