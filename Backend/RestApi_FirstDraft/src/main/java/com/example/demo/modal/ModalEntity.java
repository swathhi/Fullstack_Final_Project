package com.example.demo.modal;

//import java.util.List;
//
//import org.hibernate.annotations.OnDelete;
//import org.hibernate.annotations.OnDeleteAction;

//import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Main_Table")
public class ModalEntity {
	
	@Id  
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Book_ID")
	private int id;
	@Column(name = "Book_Name")
	private String name;
	@Column(name = "Author")
	private String auth;
	@Column(name = "Description",columnDefinition = "TEXT")
	private String descr;
	@Column(name = "Genre")
	private String gen;
	@Column(name = "YOP")
	private int year;
	@Column(name = "Review",columnDefinition = "TEXT")
	private String rev;
	
//	@ManyToMany(cascade = CascadeType.ALL)
//	@OnDelete(action = OnDeleteAction.CASCADE)
//	@JoinColumn(name = "fk_user")
//	private List<User> user;
//	
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public String getAuth() {
//		return auth;
//	}
//
//	public void setAuth(String auth) {
//		this.auth = auth;
//	}
//
//	public String getDescr() {
//		return descr;
//	}
//
//	public void setDescr(String descr) {
//		this.descr = descr;
//	}
//
//	public String getGen() {
//		return gen;
//	}
//
//	public void setGen(String gen) {
//		this.gen = gen;
//	}
//
//	public int getYear() {
//		return year;
//	}
//
//	public void setYear(int year) {
//		this.year = year;
//	}
//
//	public String getRev() {
//		return rev;
//	}
//
//	public void setRev(String rev) {
//		this.rev = rev;
//	}
//
//	public List<User> getUser() {
//		return user;
//	}
//
//	public void setUser(List<User> user) {
//		this.user = user;
//	}
//
//	public ModalEntity(int id, String name, String auth, String descr, String gen, int year, String rev,
//			List<User> user) {
//		super();
//		this.id = id;
//		this.name = name;
//		this.auth = auth;
//		this.descr = descr;
//		this.gen = gen;
//		this.year = year;
//		this.rev = rev;
//		this.user = user;
//	}

	public ModalEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ModalEntity(int id, String name, String auth, String descr, String gen, int year, String rev) {
		super();
		this.id = id;
		this.name = name;
		this.auth = auth;
		this.descr = descr;
		this.gen = gen;
		this.year = year;
		this.rev = rev;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAuth() {
		return auth;
	}

	public void setAuth(String auth) {
		this.auth = auth;
	}

	public String getDescr() {
		return descr;
	}

	public void setDescr(String descr) {
		this.descr = descr;
	}

	public String getGen() {
		return gen;
	}

	public void setGen(String gen) {
		this.gen = gen;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getRev() {
		return rev;
	}

	public void setRev(String rev) {
		this.rev = rev;
	}
	
	
	
//	@OneToOne(cascade = CascadeType.ALL , fetch = FetchType.EAGER)
//	@JoinColumn(name = "fk_id")
//	private SecondModalEntity sme;
//
//	public ModalEntity() {
//		super();
//		// TODO Auto-generated constructor stub
//	}
//
//	public ModalEntity(int id, String name, String auth, String descr, int year, String rev, SecondModalEntity sme) {
//		super();
//		this.id = id;
//		this.name = name;
//		this.auth = auth;
//		this.descr = descr;
//		this.year = year;
//		this.rev = rev;
//		this.sme = sme;
//	}
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public String getAuth() {
//		return auth;
//	}
//
//	public void setAuth(String auth) {
//		this.auth = auth;
//	}
//
//	public String getDescr() {
//		return descr;
//	}
//
//	public void setDescr(String descr) {
//		this.descr = descr;
//	}
//
//	public int getYear() {
//		return year;
//	}
//
//	public void setYear(int year) {
//		this.year = year;
//	}
//
//	public String getRev() {
//		return rev;
//	}
//
//	public void setRev(String rev) {
//		this.rev = rev;
//	}
//
//	public SecondModalEntity getSme() {
//		return sme;
//	}
//
//	public void setSme(SecondModalEntity sme) {
//		this.sme = sme;
//	}
}