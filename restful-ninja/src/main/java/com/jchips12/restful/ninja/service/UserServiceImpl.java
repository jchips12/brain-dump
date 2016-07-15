package com.jchips12.restful.ninja.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jchips12.restful.ninja.entity.User;
import com.jchips12.restful.ninja.respository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public void deleteUser(String id) {
		userRepository.delete(id);
	}

	@Override
	public User addUser(User user) {
		return userRepository.save(user);
	}

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

}
