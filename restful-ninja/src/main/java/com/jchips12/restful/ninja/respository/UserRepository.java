package com.jchips12.restful.ninja.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.jchips12.restful.ninja.entity.User;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, String> {
}
