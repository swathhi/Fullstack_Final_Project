import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Books.css'; // Import the external CSS file
import *as Falcons from "react-icons/fa";
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom';

function Books() {
  const[details, setDetails] = useState([]);
  const[searchInput, setSearchInput] = useState('');
  const[showDetails, setShowDetails] = useState(false); // State to control whether to show details


  function deleteData(idd) {

      axios.delete(`http://localhost:8099/delbyid/${idd}`)
      .then(response => {
        console.log(response);
        window.location.reload();
      });
  }

  function FetchDetails() {
    console.log("Clicked get");
    axios.get('http://localhost:8099/sorta/name')
      .then((response) => {
        console.log(response.data);
        setDetails(response.data);
        setShowDetails(true); // Show details when data is fetched
        console.log(details)
        console.log(showDetails)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const filteredData = details.filter((e) => {
    if (searchInput==='') {
      return e; // Return false to exclude null or undefined values
    }
    return e.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  useEffect(() => {
    // Fetch data initially (if needed)
    FetchDetails();
  },[]);

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
              <div>
          <IconButton className='but'>
              <Link to='/home' className='butt butt-link'>
                  <Falcons.FaHome/>
              </Link>
          </IconButton>
      </div>
      <input
            type='text'
            className='form-control'
            placeholder='Search book'
            value={searchInput}
            onChange={handleChange}
          />
          
          <br/><br/>
        <div className='container1'>
          <div className='grid-container'>
          {filteredData.map((details) => (
            <div key={details.id} className='card1'>
              <div className='card-content'>
              <h2><b>{details.name}</b></h2>
              <div className="delete-button-container">
                <Falcons.FaTrash variant='outlined' onClick={()=>deleteData(details.id)}/>
              </div>
                <p><b>Author:</b> {details.auth}</p>
                <p><b>Year of Publication:</b>{details.year}</p>
                <p><b>Description:</b>{details.descr}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
  );
}

export default Books;