import { useState } from 'react'
import Header from './Header';
import './App.css'
import { AiFillEdit, AiOutlinePlusSquare} from "react-icons/ai";

function Sections() {
  return (
    <div className="App">

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
export default Sections