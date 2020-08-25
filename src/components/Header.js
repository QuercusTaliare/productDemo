import React, { Component } from 'react';
import '../styles/Header.css';


class Header extends Component {

  render() {

    return (
      <header>
        
        <section className="header__container">
          <h1 className="header__child header__title">Veg Fund</h1>
          <button className="header__child header__userName">User Name</button>
        </section>

      </header>
    )

  }

}

export default Header;