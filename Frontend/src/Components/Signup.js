import React, { useState } from 'react'
import Axios from 'axios';
import *as Falcons from "react-icons/fa";
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [nam, setNam] = useState("")
  const [author, setAuthor] = useState("")
  const [desp, setDesp] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleButtonClick = () => {
    setIsSubmitted(!isSubmitted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:8099/adduser', {
        username:nam,
        email:author,
        pwd:desp
    })
}

  return (
    <div className='bodyy'>
      <form onSubmit={handleSubmit}>
    <div className='wrapper'>
      <h1>Signup</h1>
      <div className='input-box'>
        <input type='text'  placeholder="Username" required
        onChange={(e) => {setNam(e.target.value)}}/>
        <Falcons.FaUser className='user'/>
      </div>
      <div className='input-box'>
        <input type='text'  placeholder="email id" required
        onChange={(e) => {setAuthor(e.target.value)}}/>
        <Falcons.FaMailBulk className='lock'/>
      </div>
      <div className='input-box'>
        <input type='password'  placeholder="Password" required
        onChange={(e) => {setDesp(e.target.value)}}/>
        <Falcons.FaLock className='lock'/>
      </div>
      <div className='remember-forgot'>
        <label><input type='checkbox'/>Remember me</label>
      </div>
      <div>
      <button type="submit" className='btn' onClick={handleButtonClick}>Register</button>
      {isSubmitted && <p id="btn4-text" class="popup-message">Registered Successfully!</p>}
      </div>
      <div className='icons'>
        <Link to='/'><Falcons.FaBackward/></Link>
      </div>
    </div>
    </form>
    </div>
  )
}

export default Signup
