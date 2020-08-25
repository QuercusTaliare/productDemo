import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import '../styles/MainNav.css';

class MainNav extends Component {

  

  render() {

    return (

      <nav className="mainNav__nav">
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