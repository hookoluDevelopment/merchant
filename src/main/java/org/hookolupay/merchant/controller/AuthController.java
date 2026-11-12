//package org.hookolupay.merchant.controller;
//
//import org.hookolupay.merchant.dto.*;
//import org.hookolupay.merchant.service.AuthService;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/auth")
//@CrossOrigin(origins = "*")
//public class AuthController {
//
//    private final AuthService authService;
//
//    public AuthController(AuthService authService) {
//        this.authService = authService;
//    }
//
//    @PostMapping("/signup")
//    public ResponseEntity<?> register(@RequestBody SignupRequest request) {
//        try {
//            Map<String, Object> result = authService.registerMerchant(request);
//            return ResponseEntity.ok(result);
//        } catch (Exception e) {
//            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
//        }
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
//        boolean valid = authService.authenticate(request);
//        if (valid) {
//            return ResponseEntity.ok(Map.of("status", "SUCCESS", "message", "Welcome to Claystone Projects Dashboard!"));
//        }
//        return ResponseEntity.status(401).body(Map.of("status", "FAILED", "message", "Invalid Username, Password, or TOTP Code."));
//    }
//
//    @PostMapping("/forgot-password")
//    public ResponseEntity<?> resetPassword(@RequestBody PasswordResetRequest request) {
//        boolean success = authService.resetPassword(request);
//        if (success) {
//            return ResponseEntity.ok(Map.of("status", "SUCCESS", "message", "Password updated successfully. You can now login."));
//        }
//        return ResponseEntity.status(400).body(Map.of("status", "FAILED", "message", "Provided recovery details are incorrect."));
//    }
//}