import React, { Component } from 'react';

class addProduct extends Component {

  render() {

    return (

      <>

        <h2>Add Product</h2>
        <form action="">

          <fieldset>

            <legend>Basic Info</legend>

            <label htmlFor="productTitle">
              <span>Title</span>
              <input type="text" id="productTitle" />
            </label>

            <label htmlFor="productDesc">
              <span>Description</span>
              <textarea name="productDesc" id="productDesc" cols="30" rows="10"></textarea>
            </label>
            

          </fieldset>

        </form>

      </>

    )

  }

}

export default addProduct;