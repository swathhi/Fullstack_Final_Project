package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modal.ModalEntity;
import com.example.demo.modal.User;
import com.example.demo.service.Serv;
import com.example.demo.service.UserServ;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ApiController {
	
	@Autowired
	Serv sc;
	@Autowired
	UserServ usc;
	
	//Add single record
	@PostMapping("addrecord")
	public ModalEntity add(@RequestBody	ModalEntity me)
	{
		return sc.addinfo(me);
	}
	
	//Add multiple records
	@PostMapping("addnrecord")
	public List<ModalEntity> addndetails(@RequestBody List<ModalEntity> ss)
	{
		return sc.savedetails(ss);
	}
	
	//Displays whole table value
	@GetMapping("displayrecord")
	public List<ModalEntity>show()
	{
		return sc.showinfo();
	}
	
	//Display value based on ID
	@GetMapping("dispby/{id}")
	public Optional<ModalEntity> readbyId(@PathVariable  int id)
	{
		return sc.readId(id);
	}
	
	//Update the mentioned full record
	@PutMapping("updaterecord")
	public ModalEntity modify(@RequestBody ModalEntity me)
	{
		return sc.changeinfo(me);
	}
	
	//Updates by the ID specified
	@PutMapping("updatebyid/{id}")
	public String modifyit(@PathVariable int id, @RequestBody ModalEntity me)
	{
		return sc.updateinfo(id, me);
	}
	
	//Delete the full Record
	@DeleteMapping("deleterecord")
	public String del(@RequestBody ModalEntity me)
	{
		sc.deleteinfo(me);
		return "Deleted successfully!";
	}
	
	//Delete by the ID specified
	@DeleteMapping("delbyid/{id}")
	public String delmyid(@PathVariable int id)
	{
		sc.deleteid(id);
		return "Doneyyy...Deleted Successfully.";
	}
	
	//Delete by the parameter specified
	@DeleteMapping("delparamid")
	public String delmyparamid(@RequestParam int id)
	{
		sc.deletepid(id);
		return "Super...Deleted Successfully";
	}
	
	//Sorting Only
	@GetMapping("sorta/{name}")
	public List<ModalEntity> sortainfo(@PathVariable String name)
	{
		return sc.getaSorted(name);
	}
	
	//Sorting Only in descending
//	@GetMapping("sortd/{name}")
//	public List<ModalEntity> sortinfo(@PathVariable String name)
//	{
//		return sc.getSorted(name);
//	}
	
	//Pagination Only
	@GetMapping("paging/{pgno}/{pgsize}")
	public List<ModalEntity> showpginfo(@PathVariable int pgno, @PathVariable int pgsize)
	{
		return sc.getPage(pgno, pgsize);
	}
	
	//Sorting and Pagination
	@GetMapping("pagingandsorting/{pgno}/{pgsize}/{dr}/{str}")
	public List<ModalEntity> showpgsortinfo(@PathVariable int pgno, @PathVariable int pgsize ,@PathVariable Sort.Direction dr, @PathVariable String str)
	{
		return sc.getPageandSort(pgno, pgsize,dr,str);
	}
	
	//JPQL OR
	@GetMapping("/getnew/{id}/{year}")
	public List<ModalEntity> displayall(@PathVariable int id, @PathVariable int year)
	{
		return sc.get(id, year);
	}
	
	//JPQL AND
	@GetMapping("/getandnew/{id}/{year}")
	public List<ModalEntity> displayand(@PathVariable int id, @PathVariable int year)
	{
		return sc.getand(id, year);
	}
	
	//JPQL LIKE-F
	@GetMapping("getf/{name}")
	public List<ModalEntity> displayallf(@PathVariable String name)
	{
		return sc.getf(name);
	}
	
	//JPQL LIKE-L
	@GetMapping("getl/{name}")
	public List<ModalEntity> displayalll(@PathVariable String name)
	{
		return sc.getl(name);
	}
	
	//JPQL LIKE-M
	@GetMapping("getm/{name}")
	public List<ModalEntity> displayallm(@PathVariable String name)
	{
		return sc.getm(name);
	}
	
	//JPQL DELETE
	@DeleteMapping("deletequery/{id}")
	public String dels(@PathVariable int id)
	{
		return sc.delstud(id)+" Deleted";
	}
	
	//JPQL UPDATE
	@PutMapping("updatequery/{newid}/{oldid}")
	public String upds(@PathVariable int newid, @PathVariable int oldid)
	{
		return sc.updatestud(newid,oldid)+" Updated";
	}
	
	//JPQL Select name
	@GetMapping("BookName")
	public List<String> showw()
	{
		return sc.sshow();
	}
	
	//Get by genere
	@GetMapping("genre/{genre}")
	public List<ModalEntity> showgen(@PathVariable String genre)
	{
		return sc.sshove(genre);
	}
	
	//Add single user
	@PostMapping("adduser")
	public User adding(@RequestBody	User me)
	{
		return usc.add(me);
	}
	
	//Displays whole user value
	@GetMapping("displayuser")
	public List<User>showing()
	{
		return usc.showss();
	}
}
