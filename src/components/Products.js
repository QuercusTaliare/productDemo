import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {

  render() {

    return (

      <>
        <h2>Products</h2>
        <div>
          <button>Export</button>
          <button>Import</button>
        </div>
        
        <Link to="/products/addProduct">
          Add Product
        </Link>
      </>

    )

  }

}

export default Products;