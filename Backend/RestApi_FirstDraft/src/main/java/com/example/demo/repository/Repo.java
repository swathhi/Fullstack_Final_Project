package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.modal.ModalEntity;

import jakarta.transaction.Transactional;

@Repository
public interface Repo extends JpaRepository<ModalEntity, Integer>{

	@Query(value = "select* from main_table where book_id=:s or yop=:d",nativeQuery = true)
	public List<ModalEntity> getinfo(@Param("s") int book_id, @Param("d") int yop);
	
	@Query(value = "select* from main_table where book_id=:s and yop=:d",nativeQuery = true)
	public List<ModalEntity> getandinfo(@Param("s") int book_id, @Param("d") int yop);
	
	@Query(value = "select* from main_table where author like :key%",nativeQuery = true)
	public List<ModalEntity> getfinfo(@Param("key")String key);
	
	@Query(value = "select* from main_table where author like %:key",nativeQuery = true)
	public List<ModalEntity> getlinfo(@Param("key")String key);
	
	@Query(value = "select* from main_table where author like %:key%",nativeQuery = true)
	public List<ModalEntity> getminfo(@Param("key")String key);
	
	@Query(value = "select book_name as BOOKNAME from main_table",nativeQuery = true)
	public List<String> getbinfo();
	
	@Modifying
	@Transactional
	@Query( value = "delete from main_table where book_id=:s",nativeQuery = true)
	public int delete(@Param("s") int book_id);

	@Modifying
	@Transactional
	@Query( value = "update main_table set book_id=?1 where book_id=?2",nativeQuery = true)
	public int updat(int newbook_id,int oldbook_id);
	
	@Query(value = "select book_name from main_table ",nativeQuery = true)
	public List<ModalEntity> getbname();
	
	@Query(value = "select * from main_table where genre=:j",nativeQuery = true)
	public List<ModalEntity> getallinfo(@Param("j") String j);
	
//	@Query(value = "select* from main_table where yop in (:keys)",nativeQuery = true)
//	public List<ModalEntity> getininfo(@Param("keys") List<String> keys);
	
}
