import React from 'react';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Update from './Components/Update';
import Delete from './Components/Delete';
import Add from './Components/Add';
import UserCard from "./UserCard";
import Show from './Components/Show';
import Books from './Components/Books';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Filter from './Components/Filter';


function App() {
  return (
    // <div >
    //   {/* <div id="showws"><Show/></div>
    //   <div id="adds"><Add/></div>
    //   <div id="dels"><Delete/></div>
    //   <div id="upd"><Update/></div> */}
    //   {/* <Login/> */}
    //   {/* <Signup/> */}
    // </div>
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Login/>} />
      <Route path='/sign' element={<Signup/>} />
      <Route path='/home' element={<UserCard/>} />
      <Route path='/show' element={<Show/>} />
      <Route path='/add' element={<Add/>} />
      <Route path='/delete' element={<Delete/>} />
      <Route path='/update' element={<Update/>} />
      <Route path='/filter' element={<Filter/>} />
      <Route path='/search' element={<Books/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
