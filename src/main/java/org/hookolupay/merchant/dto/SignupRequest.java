package org.hookolupay.merchant.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SignupRequest {
    public String nameAsPerAadhaar;
    public String panCardNo;
    public String aadhaarNo;
    public String mobileNo;
    public String emailId;
    public String bankAccountNo;
    public String ifscCode;
    public String presentAddress;
    public String permanentAddress;
    public Integer age;
    public String password;
    public String confirmPassword;
}
