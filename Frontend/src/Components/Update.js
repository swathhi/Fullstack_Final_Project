import './Update.css';
import React, { useState } from 'react';
import Axios from 'axios';
import *as Falcons from "react-icons/fa";
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom';

function Update() {
    const [ids, setIds] = useState("")
    const [nam, setNam] = useState("")
    const [author, setAuthor] = useState("")
    const [desp, setDesp] = useState("")
    const [yop, setYop] = useState("")
    const [review, setReview] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleButtonClick = () => {
      setIsSubmitted(!isSubmitted);
    };

  const handleSubmit = (e) => {
      e.preventDefault();

      Axios.put(`http://localhost:8099/updatebyid/${ids}`, {
          id:ids,
          name:nam,
          auth:author,
          descr:desp,
          year:yop,
          rev:review
      })
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
        <div className="logInnform">
            <form onSubmit={handleSubmit}>
                <p>Book Id</p>

                <input
                type="text"
                placeholder="ID please"
                onChange={(e) => {setIds(e.target.value)}}
                />

                <p>Book Name</p>

                <input
                  type="text"
                  placeholder="Name please"
                  onChange={(e) => {setNam(e.target.value)}}
                />

                <p> Author</p>

                <input
                  type="text"
                  placeholder = "Author" 
                  onChange={(e) => {setAuthor(e.target.value)}}
                />

                <p> Description</p>

                <input 
                type="text"
                placeholder = "Describe here" 
                onChange={(e) => {setDesp(e.target.value)}}
                />

                <p> Year of Publish</p>

                <input 
                type="text"
                placeholder = "Published year" 
                onChange={(e) => {setYop(e.target.value)}}
                />

                <p> Review</p>

                <input 
                type="text"
                placeholder = "Review here" 
                onChange={(e) => {setReview(e.target.value)}}
                />

                <div class="btnncontainer">
                    <button id="btn4" type="submit" onClick={handleButtonClick}>Update</button>
                    {isSubmitted && <p id="btn4-text" class="popup-message">Updated Successfully!</p>}
                </div>
            </form>
        </div>
      </header>
    </div>
  );
}

export default Update;