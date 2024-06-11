package com.mycodes.student.repository;

import com.mycodes.student.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
