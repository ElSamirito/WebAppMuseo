import { useState } from 'react'
import './App.css'
import Header from './Header';
import { AiFillEdit, AiOutlinePlusSquare} from "react-icons/ai";
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  )
}


export default App