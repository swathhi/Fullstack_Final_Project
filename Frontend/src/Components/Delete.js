import React, { useState } from 'react';
import Axios from 'axios';
import './Delete.css';
import *as Falcons from "react-icons/fa";
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom';

export default function Delete() {

    const [nam, setNam] = useState("")

    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleButtonClick = () => {
      setIsSubmitted(!isSubmitted);
    };

   const handleSubmit = (e) => {
    e.preventDefault();
    Axios.delete(`http://localhost:8099/delbyid/${nam}`)
}

  return (
    <div className="App">
      <header className="App-header"> 
      <div>
          <IconButton className='but'>
              <Link to='/home' className='butt butt-link'>
                  <Falcons.FaHome/>
              </Link>
          </IconButton>

          <IconButton className='but'>
              <Link to='/show' className='butt butt-link'>
                  <Falcons.FaEye/>
              </Link>
          </IconButton>
      </div>
        <div className="logInform">
        <form onSubmit={handleSubmit}>
        <p>Delete a Review!</p>

        <input
            type="number"
            placeholder="ID please"
            onChange={(e) => {setNam(e.target.value)}}
        />

        <div class="btncontainer">
            <button id="btn4" type="submit" onClick={handleButtonClick}>Delete</button>
            {isSubmitted && <p id="btn4-text" class="popup-message">Deleted Successfully!</p>}
        </div>
        </form>
        </div>
      </header>
    </div>
  )
}
