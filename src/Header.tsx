import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

function Header(){
  return(
    <header>
      <h1>Museo Ficticio de San Francisco</h1>
      <ul>
        <Link to="">Home</Link>
        <Link to="/sections">Secciones</Link>
      </ul>
    </header>
  )
}

export default Header