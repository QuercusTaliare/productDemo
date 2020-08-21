import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import MainNav from './components/MainNav';
import Home from './components/Home';
import Products from './components/Products';

class App extends Component {
  
  render() {

    return (
      
      <>

        <Header />

        <main>

          <MainNav />

          <BrowserRouter>

            <Switch>
              
              <Route exact path="/" component={Home}></Route>
              <Route path="/products" component={Products}></Route>
            
            </Switch>  

          
          </BrowserRouter>

        </main>

      </>

    )

  }
  
  
}

export default App;
