import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Products.css';

class Products extends Component {

  render() {

    return (

      <div className="products__container">
        <h2>Products</h2>
        <div>
          <button>Export</button>
          <button>Import</button>
        </div>
        
        <Link to="/products/addProduct">
          Add Product
        </Link>
      </div>

    )

  }

}

export default Products;