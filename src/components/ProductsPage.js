import React, { Component } from 'react';

import Header from './Header';
import MainNav from './MainNav';
import Products from './Products';

class ProductsPage extends Component {

  render() {

    return (

      <>

        <Header />

        <main>

          <MainNav />

          <h3>What is this?????</h3>
          <Products />

        </main>

      </>

    )

  }


}

export default ProductsPage;