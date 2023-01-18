import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const[menu ,setmenuopen] =useState(false)
    
   function menuopen(e){
    e.preventDefault();
    setmenuopen(true)
  }

  function open(){
    setmenuopen(false)
  }

  return (
    <header>
    <img src='tesla images/logo.svg'></img>
    <nav>
        <ul>
            <li><a href="">model 3</a></li>
            <li><a href="">model 3</a></li>
            <li><a href="">model Y</a></li>
            <li><a href="">model X</a></li>
            <li><a href="">Soler Roof</a></li>
            <li><a href="">Soler Panel</a></li>
        </ul>
    </nav>
    <nav>
      <ul>
        <li><a href="">home</a></li>
        <li><a href="">Account</a></li>
        <li><a href="" onClick={menuopen}>menu</a></li>
      </ul>
    </nav>


    <ul className='list' style={{ right:(menu ===false) ? "-250px" :"0"}}>

      <CloseIcon className='ico'  onClick={open}/>

      <li><a href=''>model 3</a></li>
      <li><a href=''>model s</a></li>
      <li><a href=''>model x</a></li>
      <li><a href=''>model y</a></li>
      <li><a href=''>Demo drive</a></li>
      <li><a href=''>Solar roof</a></li>
      <li><a href=''>Solar panel </a></li>
      <li><a href=''>accessories</a></li>
      <li><a href=''>charning</a></li>
      <li><a href=''>find us</a></li>
    </ul>
</header>
  )
}

export default Header