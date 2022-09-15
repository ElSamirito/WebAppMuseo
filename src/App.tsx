import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AiFillEdit, AiOutlinePlusSquare} from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <Header/>

      <div id="Container">

        <SeccionTarjeta name="Dinos"/>
        <SeccionTarjeta name="Aviones"/>
        <SeccionTarjeta name="Malvinas"/>
        <SeccionTarjeta name="Indigenas"/>
        <SeccionTarjeta name="San Martin"/>
        <SeccionTarjeta name="Ushuaia"/>
        <NewSeccionTarjeta/>
      </div>

    </div>
  )
}

function Header(){
  return(
    <header>
      <h1>Museo Ficticio de la Ciudad de San Francisco</h1>
    </header>
  )
}

function EditBtn(){
  return(
    <button className='Lapiz'>
      <AiFillEdit/>
    </button>
  )
}

interface SeccionTarjetaProps {
  name: string
}

function SeccionTarjeta(props:SeccionTarjetaProps){
  return(
    <div className='Tarjeta'>
      <div className='Img'>
      
      </div>
      <div className='TarjetaTitle'>
        <h3>
          {props.name}
        </h3>
        <EditBtn/>
      </div>

    </div>
  )
}

function NewSeccionTarjeta(){
  return(
    <div className='Tarjeta'>
      <AiOutlinePlusSquare/>
    </div>
  )
}
export default App