package org.hookolupay.merchant.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "merchants")
@Data
public class Merchant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    private String nameAsPerAadhaar;
    private String panCardNo;
    private String aadhaarNo;
    private String mobileNo;
    private String emailId;
    private String bankAccountNo;
    private String ifscCode;

    @Column(length = 500)
    private String presentAddress;

    @Column(length = 500)
    private String permanentAddress;

    private Integer ageAtRegistration;
    private LocalDate registrationDate;
    private String password;
    private String totpSecretKey;
}