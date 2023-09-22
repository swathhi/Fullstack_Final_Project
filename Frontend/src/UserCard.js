import React,{useState} from 'react'
import "./UserCard.css";
import *as Falcons from "react-icons/fa";
import img from "./Images/bookaes.jpeg"
import { IconButton } from '@mui/material';
import {Link} from 'react-router-dom';


export default function UserCard() {
    const [detail,setDetail] = useState(false);
    
  return (
    <div>
    <div className='main center'>
        <div className='box center'>
            <img src={img} alt='Weeee'/>
            <div>
                <p className='appname center'>Book World</p>
                <p className='status center'>Connect to the world of awesomeness!</p>
            </div>
            <div className='arrow center' onClick={() => setDetail(true)}>
                <Falcons.FaBook className='fas'/>
            </div>
            <div className='btnn center' onClick={() => setDetail(true)}>
                <Link to='/' className='butt-link'><Falcons.FaArrowLeft/></Link>
            </div>
            <div className={detail ? 'left_container active' :'left_container off'}>
                <p className='center'><h2>Books Review Application</h2></p>
                <div className='searchs'>
                       <div>
                            <button className='butt'><Link to='/search' className='butt-link'><Falcons.FaSearch/></Link></button>
                        </div>
                        <div>
                            <button className='butt'><Link to='/add' className='butt-link'><Falcons.FaPlus/></Link></button>
                        </div>
                        <div>
                            <button className='butt'><Link to='/update' className='butt-link'><Falcons.FaEdit/></Link></button>
                        </div>
                        <div>
                            <button className='butt'><Link to='/delete' className='butt-link'><Falcons.FaTimes/></Link></button>
                        </div>
                        <div>
                            <IconButton className='butt'>
                                <Link to='/show' className='butt butt-link'>
                                    <Falcons.FaEye/>
                                </Link>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton className='butt'>
                                <Link to='/filter' className='butt butt-link'>
                                    <Falcons.FaFilter/>
                                </Link>
                            </IconButton>
                        </div>
                </div>
                <div className='icons'>
                    <IconButton className='fab' href="https://github.com/sandhiya0013">
                        <Falcons.FaGithub/>
                    </IconButton>
                    <IconButton className='fab' href="https://www.linkedin.com/in/sandhiya-hari-a7baa0256">
                        <Falcons.FaLinkedin/>
                    </IconButton>
                    <IconButton className='fab' href="https://www.instagram.com/swathx_05">
                        <Falcons.FaInstagram />
                    </IconButton>
                </div>
                <div>
                    <div className='cancel center'  onClick={() => setDetail(false)}>
                        <Falcons.FaBookOpen className='faS'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}