import React from 'react'
import './Contact.scss';
import { Facebook, Instagram, Twitter, Google, Pinterest } from '@mui/icons-material';

const Contact = () => {
  return (
    <div className='contact'>
        <div className='wrapper'>
            <span>Be In Touch with Us!</span>
            <div className='mail'>
                <input type='text' placeholder='Enter your Email..' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <Facebook />
                <Instagram />
                <Twitter />
                <Google />
                <Pinterest />
            </div>
        </div>
    </div>
  )
}

export default Contact