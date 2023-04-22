import React, { useState } from 'react'
import './Product.scss';
import { AddShoppingCart } from '@mui/icons-material';
import { FavoriteBorder } from '@mui/icons-material';
import { Balance } from '@mui/icons-material';

const Product = () => {

    const [ selectedImg, setSelectedImg] = useState(0)
    const [ quantity, setQuantity ] = useState(1)

    const data = [
        "https://i.imgur.com/CVSLw7d.jpg",
        "https://i.imgur.com/7fCDpyH.jpg",
        "https://i.imgur.com/1CRNS2F.jpg"
    ];

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={data[0]} alt='' onClick={e=> setSelectedImg(0)} />
          <img src={data[1]} alt='' onClick={e=> setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={data[selectedImg]} alt='' />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Diam quis enim lobortis scelerisque fermentum dui faucibus. Erat nam at lectus urna duis convallis.</p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev=> prev === 1 ? 1 : prev - 1)} >-</button>
          {quantity}
          <button onClick={() => setQuantity(prev=> prev + 1)} >+</button>
        </div>
        <button className="add">
          <AddShoppingCart /> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorder /> ADD TO WISH LIST
          </div>
          <div className="item">
            <Balance /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>Description</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product