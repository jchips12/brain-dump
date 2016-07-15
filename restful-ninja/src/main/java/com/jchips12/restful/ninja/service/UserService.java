package com.jchips12.restful.ninja.service;

import java.util.List;

import com.jchips12.restful.ninja.entity.User;

public interface UserService {
    
    List<User> getAll();
	
	void deleteUser(String id);
	
	User addUser(User user);

}
