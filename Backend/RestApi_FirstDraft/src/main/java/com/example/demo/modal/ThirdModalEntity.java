package com.example.demo.modal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ThirdModalEntity {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SNO")
	private int id;
	@Column(name = "Authors")
	private String author;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public ThirdModalEntity(int id, String author) {
		super();
		this.id = id;
		this.author = author;
	}

	public ThirdModalEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
