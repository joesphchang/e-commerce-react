import React, { useState } from 'react'
import './Product.scss';
import { AddShoppingCart } from '@mui/icons-material';
import { FavoriteBorder } from '@mui/icons-material';
import { Balance } from '@mui/icons-material';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("image");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  return (
    <div className='product'>
      {loading ? "loading" : (<>
      <div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.image?.data?.attributes?.url} alt='' onClick={(e) => setSelectedImg("image")} />
          <img src={process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.image_02?.data?.attributes?.url} alt='' onClick={(e) => setSelectedImg("image_02")} />
        </div>
        <div className="mainImg">
          <img src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                } alt='' />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>{data?.attrbitues?.title}</span>
        <p>{data?.attributes?.desc}</p>
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
      </>)}
    </div>
  )
}

export default Product