import './footer.scss';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Link</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Diam quis enim lobortis scelerisque fermentum dui faucibus.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Diam quis enim lobortis scelerisque fermentum dui faucibus.</span>
        </div>
      </div>
      <div className="bottom">
          <div className="left">
            <span className='logo'>Attica</span>
            <span className='copyright'>
              © Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className="right">
            <img src='/img/payment.png' alt='' />
          </div>
      </div>
    </div>
  )
}

export default Footer