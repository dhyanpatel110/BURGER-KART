import React from 'react'
import ProductBox from './ProductBox'
import product1 from '../Assets/images/s1.png'
import product2 from '../Assets/images/s2.png'

const Products = () => {
    return (
        <div id='products'>
            <h1>CHOOSE & ENJOY</h1>
            <p></p>
            <div className='a-container'>
                <ProductBox image={product1} title='Chicken Burger' />
                <ProductBox image={product2} title='Spicy Paneer Burger' />
                <ProductBox image={product1} title='Aloo Tikki Burger' />
                <ProductBox image={product2} title='Egg Burger' />
            </div>

        </div>
    )
}

export default Products
