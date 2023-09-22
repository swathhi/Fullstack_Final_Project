package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.modal.ModalEntity;
import com.example.demo.repository.Repo;

@Service
public class Serv {

	@Autowired
	Repo r;
	
	//POST
	public ModalEntity addinfo(ModalEntity me)
	{
		return r.save(me);
	}
	
	//nPOST
	public List<ModalEntity> savedetails(List<ModalEntity> me)
	{
		return (List<ModalEntity>)r.saveAll(me);
	}
	
	//GET
	public List<ModalEntity> showinfo()
	{
		return r.findAll();
	}
	
	//GETbyID
	public Optional<ModalEntity> readId(int id)
	{
		return r.findById(id);
	}
	
	//PUT
	public ModalEntity changeinfo(ModalEntity me)
	{
		return r.saveAndFlush(me);
	}
	
	//PUTbyid
	public String updateinfo(int id, ModalEntity ss)
	{
		r.saveAndFlush(ss);
		
		if(r.existsById(id))
		{
			return "Updated";
		}
		else
		{
			return "Enter valid id";
		}
	}
	
	//DELETE
	public void deleteinfo(ModalEntity me)
	{
		r.delete(me);
	}
	
	//deletebyID for pathvariable
	public void deleteid(int id)
	{
		r.deleteById(id);
	}
	
	//deletebyQuery
	public void deletepid(int id)
	{
		r.deleteById(id);
	}
	
	//Sorting only
	public List<ModalEntity> getaSorted(String str)
	{
		return r.findAll(Sort.by(Sort.DEFAULT_DIRECTION, str));
	}
	
	//Sorting only in descending
	public List<ModalEntity> showinfo(String str)
	{
		return r.findAll(Sort.by(Sort.Direction.ASC, str));
	}
	
	//Pagination and sorting
	public List<ModalEntity> getPageandSort(int pgno,int pgsize,Sort.Direction dt,String str)
	{
		Page<ModalEntity> p = r.findAll(PageRequest.of(pgno, pgsize, dt, str));
		return p.getContent();
	}
	
	//Pagination only
	public List<ModalEntity> getPage(int pgno,int pgsize)
	{
		Page<ModalEntity> p = r.findAll(PageRequest.of(pgno, pgsize));
		return p.getContent();
	}
	
	//JPQL OR
	public List<ModalEntity> get(int s, int b)
	{
		return r.getinfo(s,b);
	}
	
	//JPQL AND
	public List<ModalEntity> getand(int s, int b)
	{
		return r.getandinfo(s,b);
	}
	
	//JPQL LIKE-F
	public List<ModalEntity> getf(String b)
	{
		return r.getfinfo(b);
	}
	
	//JPQL LIKE-L
	public List<ModalEntity> getl(String b)
	{
		return r.getlinfo(b);
	}
	
	//JPQL LIKE-M
	public List<ModalEntity> getm(String b)
	{
		return r.getminfo(b);
	}
	
	//JPQL DELETE
	public int delstud(int id)
	{
		return r.delete(id);
	}
	
	//JPQL UPDATE
	public int updatestud(int id,int id1)
	{
		return r.updat(id, id1);
	}
	
	//JPQL Select Name
	public List<ModalEntity> gett()
	{
		return r.getbname();
	}
	
	//JPQL Select name
	public List<String> sshow()
	{
		return r.getbinfo();
	}
	
	public List<ModalEntity> sshove(String m)
 	{
 		return r.getallinfo(m);
 	}
}