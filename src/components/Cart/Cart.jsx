import React from 'react'
import './Cart.scss';
import { DeleteForever } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';

const Cart = () => {

    // const data = [
    //     {
    //         id: 1,
    //         img: 'https://i.imgur.com/4AkVACK.jpg',
    //         title: 'T-Shirt',
    //         isNew: true,
    //         oldPrice: 30,
    //         price: 22,
    //         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Diam quis enim lobortis scelerisque fermentum dui faucibus. Erat nam at lectus urna duis convallis.'
    //     },
    //     {
    //         id: 2,
    //         img: 'https://i.imgur.com/jlVNPGQ.jpg',
    //         title: 'Jeans',
    //         isNew: true,
    //         oldPrice: 65,
    //         price: 50,
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Diam quis enim lobortis scelerisque fermentum dui faucibus. Erat nam at lectus urna duis convallis."
    //     }
    // ]

    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
    const totalPrice = () => {
        let total = 0;
        products.forEach(item => (total += item.quantity * item.price))
        return total.toFixed(2);
    }
  return (
    <div className='cart'>
        <h1>Title</h1>
        {products?.map(item => (
            <div className="item" key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className="price">
                        {item.quantity} x ${item.price}
                    </div>
                </div>
                <DeleteForever
                    className="delete"
                    onClick={() => dispatch(removeItem(item.id))}
                />
            </div>
        ))}
        <div className="total">
            <span>SUB TOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button className='checkout'>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart