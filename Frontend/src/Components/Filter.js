import React, { useState, useEffect } from 'react';
import './Filter.css'
import axios from 'axios';
import *as Falcons from "react-icons/fa";
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom';

function Filter() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);

  const fetchAllGenres = () => {
    axios.get(`http://localhost:8099/displayrecord`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleValueChange = (genre) => {
    setSelectedGenre(genre);
    if (genre === 'All') {
      fetchAllGenres();
    } else {
      axios.get(`http://localhost:8099/genre/${genre}`)
        .then((response) => {
          setUser(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  };

  
  useEffect(() => {
    // Fetch data initially (if needed)
    fetchAllGenres();
  }, []);

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
      <button className='btn' onClick={() => handleValueChange("All")}>All genres</button>
      <button className='btn' onClick={() => handleValueChange("Horror")}>Horror</button>
      <button className='btn' onClick={() => handleValueChange("Fantasy")}>Fantasy</button>
      <button className='btn' onClick={() => handleValueChange("Science Fiction")}>Science Fiction</button>
      <button className='btn' onClick={() => handleValueChange("Mystery")}>Mystery</button>

      {/* Render the user data in a table */}
      <p/> <p/>
      <table border={1} align="center" className='table table-striped'>
      <thead>
            <tr>
                <th>Book ID</th>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Genere</th>
                <th>Description</th>
                <th>Year of publish</th>
                <th>Review</th>
            </tr>
           </thead>
        <tbody>
          {selectedGenre === 'All' ? (
            data.map((userData) => (
              <tr key={userData.id}>
                <td>{userData.id}</td>
                <td>{userData.name}</td>
                <td>{userData.auth}</td>
                <td>{userData.gen}</td>
                <td>{userData.year}</td>
                <td>{userData.descr}</td>
                <td>{userData.rev}</td>
              </tr>
            ))
          ) : (
            user.map((userData) => (
              <tr key={userData.id}>
                <td>{userData.id}</td>
                <td>{userData.name}</td>
                <td>{userData.auth}</td>
                <td>{userData.gen}</td>
                <td>{userData.year}</td>
                <td>{userData.descr}</td>
                <td>{userData.rev}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Filter;