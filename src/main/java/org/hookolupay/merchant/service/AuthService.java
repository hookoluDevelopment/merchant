//package org.hookolupay.merchant.service;
//
//import java.time.LocalDate;
//import java.util.HashMap;
//import java.util.Map;
//import java.util.Optional;
//import java.util.Random;
//
//import org.hookolupay.merchant.dto.LoginRequest;
//import org.hookolupay.merchant.dto.PasswordResetRequest;
//import org.hookolupay.merchant.dto.SignupRequest;
//import org.hookolupay.merchant.entity.Merchant;
//import org.hookolupay.merchant.repository.MerchantRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class AuthService {
//	
//	@Autowired
//    private final MerchantRepository merchantRepository;
//	
//	@Autowired
//    private final TotpService totpService;
//
//    public AuthService(MerchantRepository merchantRepository, TotpService totpService) {
//        this.merchantRepository = merchantRepository;
//        this.totpService = totpService;
//    }
//
//    public Map<String, Object> registerMerchant(SignupRequest request) {
//        if (!request.getPassword().equals(request.getConfirmPassword())) {
//            throw new IllegalArgumentException("Passwords do not match.");
//        }
//
//        // System auto-generated username
//        String username = "CSM" + (100000 + new Random().nextInt(900000));
//        String totpSecretKey = totpService.generateSecretKey();
//
//        Merchant merchant = new Merchant();
//        merchant.setUsername(username);
//        merchant.setNameAsPerAadhaar(request.getNameAsPerAadhaar());
//        merchant.setPanCardNo(request.getPanCardNo());
//        merchant.setAadhaarNo(request.getAadhaarNo());
//        merchant.setMobileNo(request.getMobileNo());
//        merchant.setEmailId(request.getEmailId());
//        merchant.setBankAccountNo(request.getBankAccountNo());
//        merchant.setIfscCode(request.getIfscCode());
//        merchant.setPresentAddress(request.getPresentAddress());
//        merchant.setPermanentAddress(request.getPermanentAddress());
//        merchant.setAgeAtRegistration(request.getAge());
//        merchant.setRegistrationDate(LocalDate.now());
//        merchant.setPassword(request.getPassword()); // In production, hash with BCryptPasswordEncoder
//        merchant.setTotpSecretKey(totpSecretKey);
//
//        merchantRepository.save(merchant);
//
//        Map<String, Object> response = new HashMap<>();
//        response.put("username", username);
//        response.put("registrationDate", merchant.getRegistrationDate().toString());
//        response.put("ageAtRegistration", merchant.getAgeAtRegistration());
//        response.put("mobileNo", merchant.getMobileNo());
//        response.put("emailId", merchant.getEmailId());
//        response.put("totpSecretKey", totpSecretKey);
//        response.put("qrCodeUri", String.format("otpauth://totp/ClaystoneProjects:%s?secret=%s&issuer=ClaystoneProjects", username, totpSecretKey));
//
//        return response;
//    }
//
//    public boolean authenticate(LoginRequest request) {
//        Optional<Merchant> optionalMerchant = merchantRepository.findByUsername(request.getUsername());
//        if (optionalMerchant.isEmpty()) return false;
//
//        Merchant merchant = optionalMerchant.get();
//        if (!merchant.getPassword().equals(request.getPassword())) return false;
//
//        try {
//            int code = Integer.parseInt(request.getTotpCode());
//            return totpService.verifyCode(merchant.getTotpSecretKey(), code);
//        } catch (NumberFormatException e) {
//            return false;
//        }
//    }
//
//    public boolean resetPassword(PasswordResetRequest request) {
//        Optional<Merchant> optionalMerchant = merchantRepository.findByUsername(request.getUsername());
//        if (optionalMerchant.isEmpty()) return false;
//
//        Merchant m = optionalMerchant.get();
//
//        boolean isMatch = m.getRegistrationDate().toString().equals(request.getDateOfRegistration()) &&
//                m.getAgeAtRegistration().equals(request.getAgeDuringRegistration()) &&
//                m.getMobileNo().equals(request.getPhoneNo()) &&
//                m.getEmailId().equalsIgnoreCase(request.getEmailId());
//
//        if (isMatch) {
//            m.setPassword(request.getNewPassword());
//            merchantRepository.save(m);
//            return true;
//        }
//
//        return false;
//    }
//}