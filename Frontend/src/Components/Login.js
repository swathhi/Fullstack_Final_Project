import React, { useEffect, useState } from 'react'
import 'boxicons'
import *as Falcons from "react-icons/fa";
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import ModalEntity from '../TableDetails/ModalEntity';

function Login() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const[cred, setCred] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  let navigate = useNavigate('');

  const handleButtonClick = () => {
    setTimeout(() => {
      setIsSubmitted(!isSubmitted);
    }, 10000);
  };

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(()=>{
    ModalEntity.getUser()
      .then((response)=>{
          console.log(response.data)
          setCred(response.data)
      })
      console.log("Fetched");
  },[])

  let canLog = false;
  const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Username: ${name}, Password: ${password}`)
        console.log(canLog)
        
          navigate('/home')
      

        /*try{
            cred.forEach( (detail) => {
                    if(detail.username === name && detail.pwd === password){
                        canLog = true;
                    }
            })
            console.log(canLog)
            if(canLog===true){
                navigate('/home')
            }
            else{
                throw new Error('The entered user credentials are incorrect')
            }
        }
        catch(error){
            alert('The entered username and password are incorrect')
            console.error('Error logging in', error)
        }*/
    }

  return (
    <div className='bodyy'>
      <form onSubmit={handleSubmit}>
    <div className='wrapper'>
      <h1>Login</h1>
      <div className='input-box'>
        <input type='text'  placeholder="Username" required
         onChange={handleUsernameChange}/>
        <Falcons.FaUser className='user'/>
      </div>
      <div className='input-box'>
        <input type='password'  placeholder="Password" required
        onChange={handlePasswordChange}/>
        <Falcons.FaLock className='lock'/>
      </div>
      <div className='remember-forgot'>
        <label><input type='checkbox'/>Remember me</label>
        <a>Forgot password?</a>
      </div>
      <div>
        <button type="submit" className='btn' onClick={handleButtonClick}>Login</button>
        {isSubmitted && <p id="btn4-text" class="popup-message">Login Successfull!</p>}
      </div>
        <div className='register-link'>
            <p>Don't have an account?<Link to='/sign'>Register</Link></p>
        </div>
    </div>
    </form>
    </div>
  )
}

export default Login
