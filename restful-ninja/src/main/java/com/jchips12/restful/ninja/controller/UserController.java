package com.jchips12.restful.ninja.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jchips12.restful.ninja.entity.User;
import com.jchips12.restful.ninja.service.UserService;

@RestController
@RequestMapping("users")
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(method = RequestMethod.GET)
    public List<User> getUsers() {
        return userService.getAll();
    }

	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	public List<User> deleteUsers(@PathVariable String id) {
		userService.deleteUser(id);
		return userService.getAll();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public List<User> addUser(@RequestBody User user) {
		userService.addUser(user);
		return userService.getAll();
	}

}
