import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { amount } = useSelector((store) => store.cart)

    return (
        <nav>
            <div className='nav-center'>
                <h3>Redux Toolkit</h3>
                <div className="nav-container">
                    <div>
                        <h3>Total amount: {amount}</h3>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar