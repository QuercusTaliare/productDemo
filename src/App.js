import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import MainNav from './components/MainNav';
import Home from './components/Home';
import Products from './components/Products';
import addProduct from './components/addProduct';

class App extends Component {
  
  render() {

    return (
      
      <>

        <Header />

        <main>

          <BrowserRouter>
          
            <MainNav />

            <Route exact path="/" component={Home}></Route>
            <Route exact path="/products" component={Products}></Route>
            <Route path="/products/addProduct" component={addProduct}></Route>
              
          </BrowserRouter>

        </main>

      </>

    )

  }
  
  
}

export default App;
