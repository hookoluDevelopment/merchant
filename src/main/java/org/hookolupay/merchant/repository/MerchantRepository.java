package org.hookolupay.merchant.repository;

import org.hookolupay.merchant.entity.Merchant;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface MerchantRepository extends JpaRepository<Merchant, Long> {
    Optional<Merchant> findByUsername(String username);
}