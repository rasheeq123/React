import React, { useState } from 'react'
import productData from './dummyData'

const ProductList = () => {

    const [productsArray, setproductsArray] = useState(productData);
  return (
    <div>
        <div className="container">
            <h1>Product Listing</h1>
            <div className="row">

            {productsArray.map((product)=>(
            <div className="col-md-3">
                <div className="card">
                    <img src={product.Image} alt="" />
                    <div className="card-body">
                    <h4>{product.brand}</h4>
                    <h3>{product.model}</h3>
                    <h2>₹{product.price}</h2> {/* windows+. */}

                    <button className='btn  btn-primary'> <i class="bi bi-cart-dash-fill"></i> Add to Cart</button>
                    </div>
                    
                </div>
            </div>
            
            
           ) )}

          </div> 
        </div>
    </div>
  )
}

export default ProductList