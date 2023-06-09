import React from 'react'
import './List.scss';
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

const List = ({subCats, maxPrice, sort, catId}) => {

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
    // ]
    const {data, loading, error} = useFetch(
        `/products?populate=*&[filters][categories][id]=${catId}${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}
        &[filters][price][$lte]=${maxPrice}`
    );

  return (
    <div className="list">
        {loading ? 
        "loading" :
        data?.map(item => (
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default List