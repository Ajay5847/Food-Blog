import React from 'react'
import './Product.scss'
import dummyImg from '../../assets/pizza.avif'

function Product({item}) {
  return (
    <div className='product-container'>
        <div className="image-container">
            <img src={item.url} alt={item.title} />
        </div>
        <h3 className='text'>{item.title}</h3>
        <p>{item.desc}</p>
        <button className="btn-primary">Read More</button>
    </div>
  )
}

export default Product