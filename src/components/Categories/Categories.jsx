import React from 'react'
import { Link } from 'react-router-dom';
import './Categories.scss';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src='https://i.imgur.com/RwMpw27.jpg' alt='' />
                <button>
                    <Link className='link' to='/products/1' >
                        Sale
                    </Link>
                </button>
            </div>
            <div className="row">
                <img src='https://i.imgur.com/1CRNS2F.jpg' alt='' />
                <button>
                    <Link className='link' to='/products/1' >
                        T-Shirt
                    </Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src='https://i.imgur.com/CVSLw7d.jpg' alt='' />
                <button>
                    <Link className='link' to='/products/1' >
                        Jackets
                    </Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src='https://i.imgur.com/x9LqVdr.jpg' alt='' />
                        <button>
                            <Link className='link' to='/products/1' >
                                Hoodies
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src='https://i.imgur.com/7fCDpyH.jpg' alt='' />
                        <button>
                            <Link className='link' to='/products/1' >
                                Shoes
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                        <img src='https://i.imgur.com/xTnq5cM.jpg' alt='' />
                        <button>
                            <Link className='link' to='/products/1' >
                                Jeans
                            </Link>
                        </button>
            </div>
        </div>
    </div>
  )
}

export default Categories