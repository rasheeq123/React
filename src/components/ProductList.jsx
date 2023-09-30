import React, { useState } from 'react'
import productData from './dummyData'
import useCartContext from './CartContest';

const ProductList = () => {

    const [productsArray, setProductsArray] = useState(productData);
    const {addItemToCart}= useCartContext();

    const brands = ["Asus", "Dell", "Apple", "Lenevo", "HP"];
    const searchProduct = (e) => {
    const search = e.target.value;
    let filteredData = productData.filter((product) => {
      return product.model.toLowerCase().includes(search.toLowerCase());
    });
    setProductsArray(filteredData);
  };
  const filterBrand = (e) => {
    const search = e.target.value;
    let filteredData = productData.filter((product) => {
      return product.brand === search;
    });
    setProductsArray(filteredData);
  };
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

                    <button onClick={() => addItemToCart(product)} className='btn  btn-primary'> <i class="bi bi-cart-dash-fill"></i> Add to Cart</button>
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