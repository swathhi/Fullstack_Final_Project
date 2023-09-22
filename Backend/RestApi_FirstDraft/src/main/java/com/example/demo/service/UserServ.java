package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.modal.User;
import com.example.demo.repository.UserRepo;

@Service
public class UserServ {

	@Autowired
	UserRepo ur;
	
	//POST
	public User add(User ss)
	{
		return ur.save(ss);
	}
	
	//GET
	public List<User> showss()
	{
		return ur.findAll();
	}
}
