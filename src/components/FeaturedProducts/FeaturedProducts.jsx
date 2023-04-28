import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import './FeaturedProducts.scss';
import axios from 'axios';

const FeaturedProducts = ({type}) => {

    // const data = [
    //     {
    //         id: 1,
    //         img: 'https://i.imgur.com/4AkVACK.jpg',
    //         title: 'T-Shirt',
    //         isNew: true,
    //         oldPrice: 30,
    //         price: 22,
    //     },
    //     {
    //         id: 2,
    //         img: 'https://i.imgur.com/jlVNPGQ.jpg',
    //         title: 'Jeans',
    //         isNew: true,
    //         oldPrice: 65,
    //         price: 50,
    //     },
    //     {
    //         id: 3,
    //         img: 'https://i.imgur.com/5yhMwih.jpg',
    //         title: 'Pull-Over Hoodie',
    //         oldPrice: 80,
    //         price: 72,
    //     },
    //     {
    //         id: 4,
    //         img: 'https://i.imgur.com/8zmto7i.jpg',
    //         title: 'Shoes',
    //         oldPrice: 125,
    //         price: 100,
    //     },
    // ];

    const [ data, setData ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_API_URL+"/products?populate=*", {
                    headers: {
                        Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                    }
                });
                setData(res.data.data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, [])

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Diam quis enim lobortis scelerisque fermentum dui faucibus. Erat nam at lectus urna duis convallis. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Egestas egestas fringilla phasellus faucibus. Nisi lacus sed viverra tellus in hac. </p>
        </div>
        <div className="bottom">
            {data.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts