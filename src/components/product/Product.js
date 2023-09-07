import React from 'react'
import './Product.scss'

function Product({item}) {
  return (
    <div className='Product'>
      <div className="product-container">
        <div className="product-img">
          <div className="image" >
            <img src={item.url} alt={item.title} id='img' />
          </div>
        </div>
        <div className="product-info">
          <h3 className="title">
            {item.title}
          </h3>
          <p className="desc">
            {item.desc}
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Product