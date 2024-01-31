import { useDispatch } from 'react-redux';
import '../styling/cartItem.css'
import { addCartItem, removeCartItem } from '../features/CartSlice';

function CartItem(props) {
    const { id, name, quantity, price, image, totalPrice } = props;
    const dispatch = useDispatch();

    const addItemHandler = () => {
        dispatch(addCartItem({
            id,
            price,
            name
        }))
    }
    const removeItemHandler = () => {
        dispatch(removeCartItem(id))
    }

    return (
        <li className='item-list' key={id}>
            <div className='image-div'>
                <img src={image} alt="" />
            </div>
            <div className='content'>
                <h3>{name}</h3>
                <div className='item-info'>
                    <p>{`Quantity : ${quantity}`}</p>
                    <p>{`Price : ${price}`}</p>
                    <div className='cart-buttons'>
                        <button onClick={addItemHandler}>+</button>
                        <button onClick={removeItemHandler}>-</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem;