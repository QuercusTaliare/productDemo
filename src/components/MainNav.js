import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

class MainNav extends Component {

  render() {

    return (

      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li>Orders</li>
          <li><Link to={"/products"}>Products</Link></li>
          <li>Customers</li>
          <li>Analytics</li>
        </ul>
      </nav>

    )

  }

}

export default MainNav;