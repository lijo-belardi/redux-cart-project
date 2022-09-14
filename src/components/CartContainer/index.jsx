import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../../features/modal/modalslice'
import CartItem from '../CartItem'

const CartContainer = () => {
    const dispatch = useDispatch()
    const { cartItems, amount, total } = useSelector((store) => store.cart)

    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                    <h4>is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className='cart'>
            {/* Header */}
            <header>
                <h2>Your Bag</h2>
                <div>
                    {cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />
                    })}
                </div>
            </header>

            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>$ {total.toFixed(2)}</span>
                    </h4>
                </div>
                <button
                    className='btn clear-btn'
                    onClick={() => dispatch(openModal())}>
                    Clear cart
                </button>
            </footer>
        </section>
    )
}

export default CartContainer