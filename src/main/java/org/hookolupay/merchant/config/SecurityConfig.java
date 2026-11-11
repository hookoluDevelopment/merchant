package org.hookolupay.merchant.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // 1. Disable CSRF (or disable specifically for h2-console)
                .csrf(csrf -> csrf.ignoringRequestMatchers("/h2-console/**").disable())

                // 2. Allow H2 Console to load inside HTML frames
                .headers(headers -> headers.frameOptions(frame -> frame.disable()))

                // 3. Permit unauthenticated access to H2 Console and static endpoints
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/h2-console/**").permitAll()
                        .requestMatchers(
                                "/",
                                "/index.html",
                                "/login.html",
                                "/signup.html",
                                "/forgot-password.html",
                                "/css/**",
                                "/js/**",
                                "/api/auth/**"
                        ).permitAll()
                        .anyRequest().authenticated()
                );

        return http.build();
    }



    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}