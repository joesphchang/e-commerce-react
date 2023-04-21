import React from 'react'
import './List.scss';
import Card from '../Card/Card';

const List = () => {

    const data = [
        {
            id: 1,
            img: 'https://i.imgur.com/4AkVACK.jpg',
            title: 'T-Shirt',
            isNew: true,
            oldPrice: 30,
            price: 22,
        },
        {
            id: 2,
            img: 'https://i.imgur.com/jlVNPGQ.jpg',
            title: 'Jeans',
            isNew: true,
            oldPrice: 65,
            price: 50,
        },
        {
            id: 3,
            img: 'https://i.imgur.com/5yhMwih.jpg',
            title: 'Pull-Over Hoodie',
            oldPrice: 80,
            price: 72,
        },
        {
            id: 4,
            img: 'https://i.imgur.com/8zmto7i.jpg',
            title: 'Shoes',
            oldPrice: 125,
            price: 100,
        },
    ]

  return (
    <div className="list">
        {data?.map(item => (
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default List