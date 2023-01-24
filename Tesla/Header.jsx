import React from 'react'
import './Tesla.css'

function Header() {
  return (
    <>
      <header>

        <img src='tesla images/logo.svg' />
        <ul>
          <li>model S</li>
          <li>model 3</li>
          <li>model Y</li>
          <li>model X</li>
          <li>Solar Panel</li>
          <li>Solar roof</li>

        </ul>
        <ul>
          <li>Shop</li>
          <li>Account</li>
          <li>Menu</li>
        </ul>
      </header>

      <section className='photo'>
        <div className='headding'>
          <h1>Model 3</h1>
        </div>
        <div className='pera'>
          <p>Schedule a Demo Drive</p>
        </div>
        <div className='anchor'>
          <a href=''>Custom Order</a>
          <a href=''>View Inventory</a>
        </div>
        <div className='img'>
          
        </div>
      </section>
    </>
  )
}

export default Header