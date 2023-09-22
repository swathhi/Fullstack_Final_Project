import React, { useEffect, useState } from 'react';
import ModalEntity from '../TableDetails/ModalEntity';
import "./Show.css";
import *as Falcons from "react-icons/fa";
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom';

export default function Show() {

    const [books,setBooks] = useState([]);

    useEffect(() =>{
            getBooks( )
        },[])

    const getBooks =()=>{

        ModalEntity.getBooks().then((response) =>{
            setBooks(response.data)
        })
    }

  return (
    <div>
        <div>
          <IconButton className='but'>
              <Link to='/home' className='butt butt-link'>
                  <Falcons.FaHome/>
              </Link>
          </IconButton>
      </div>
    <div className='container bx'>
        <h1 className='text-center  vv'><p/>Reviews Here...</h1>
        <table className='table table-striped '>
           <thead>
            <tr>
                <th>Book ID</th>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Description</th>
                <th>Year of publish</th>
                <th>Review</th>
            </tr>
           </thead>
           <tbody>
            {
                books.map(
                    bk=>
                    <tr key = {bk.id}>
                        <td>{bk.id}</td>
                        <td>{bk.name}</td>
                        <td>{bk.auth}</td>
                        <td>{bk.descr}</td>
                        <td>{bk.year}</td>
                        <td>{bk.rev}</td>
                    </tr>
                )
            }
           </tbody>
        </table>
    </div>
    </div>
  )
}
