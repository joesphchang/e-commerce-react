import React from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Slider = () => {

    const data = [
        "https://i.imgur.com/iq0GMX8.jpg",
        "https://i.imgur.com/5shRxzx.jpg",
        "https://i.imgur.com/LsaamJK.jpg"
    ];
  return (
    <div className='slider'>
        <div className="container">
            <img src={data[0]} alt='' />
            <img src={data[1]} alt='' />
            <img src={data[2]} alt='' />
        </div>
        <div className="icons">
            <div className="icon">
                <ArrowBackIosNewOutlinedIcon />
            </div>
            <div className="icon">
                <ArrowForwardIosOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider