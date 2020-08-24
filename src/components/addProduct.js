import React, { Component } from 'react';
import '../styles/AddProduct.css';

class addProduct extends Component {

  constructor() {

    super();
    this.state = {

      productTitle: ""

    }

  }

  handleChange = (e) => {

    // This will update state everytime the form is altered
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })

  }

  render() {

    return (

      <>

        <h2>Add Product</h2>
        <form action="">

          {/* MAIN (LEFT) */}
          <div>

            {/* BASIC INFO  */}
            <fieldset>

              <div>

                <legend>Basic Info</legend>

                <label htmlFor="productTitle">
                  <span>Title</span>
                  <input 
                    type="text" 
                    id="productTitle" 
                    name="productTitle" 
                    className="basicInfo__productTitle" 
                    onChange={this.handleChange}
                  />
                </label>

                <label htmlFor="productDesc">
                  <span>Description</span>
                  <textarea 
                    name="productDesc" 
                    id="productDesc" 
                    name="productDesc" 
                    className="basicInfo__productTitle" 
                    cols="30" 
                    rows="10"
                    onChange={this.handleChange}
                  >
                  </textarea>
                </label>

              </div>
              
            </fieldset>

            {/* MEDIA  */}
            <fieldset>

              <div>

                <legend>Media</legend>
                <button>Add media from URL</button>
                <ul className="media__URLoptions">
                  <li>Add image from URL</li>
                  <li>Embed YouTube Video</li>
                </ul>

              </div>

              <div>

                <img src="" alt=""/>
                <button>Add File</button>
                <p>or drop files to upload</p>

              </div>

            </fieldset>

            {/* PRICING  */}
            <fieldset>
              
              <div>

                <legend>Pricing</legend>

                <label htmlFor="price">
                  <span>Price</span>
                  <input type="text" id="price" />
                </label>

                <label htmlFor="comparePrice">
                  <span>Compare at price</span>
                  <input type="text" id="comparePrice"/>
                </label>

              </div>

              <div>

                <div>

                  <label htmlFor="costPerItem">
                    <span>Cost per Item</span>
                    <input type="text" id="costPerItem"/>
                  </label>
                  <p>Customers won't see this</p>

                </div>

                <div>

                  <p>
                    <span>Margin</span>
                    <span>-</span>
                  </p>
                  <p>
                    <span>Profit</span>
                    <span>-</span>
                  </p>
                  

                </div>

                
                <label htmlFor="tax">
                  <input type="checkbox" id="tax" />
                  <span>Charge tax on this product</span>
                </label>

              </div>

            </fieldset>

            {/* INVENTORY  */}
            <fieldset>

              <div>

                <legend>Inventory</legend>

                <label htmlFor="SKU">
                  <span>SKU (Stock Keeping Unit)</span>
                  <input type="text" id="SKU" />
                </label>

                <label htmlFor="barcode">
                  <span>Barcode (ISBN, UPC, GTIN, etc.)</span>
                  <input type="text" id="barcode" />
                </label>

                <label htmlFor="quantity">
                  <input type="checkbox" id="quantity" />
                  <span>Track Quantity</span>
                </label>

              </div>

            </fieldset>

            {/* VARIANTS  */}
            <fieldset>
              <div>

                <legend>Variants</legend>
                <label htmlFor="variantOptionsCheck">
                  <input type="checkbox" id="variantOptionsCheck" />
                  <span>This product has multiple options, like different sizes or colors</span>
                </label>

              </div>

              <div>

                <h4>Options</h4>

                <ul>

                  <li>

                    <label htmlFor="variantOptionSize--one">
                      <span>Option 1</span>
                      <input type="text" id="variantOptionSize--one" />
                    </label>

                    <label htmlFor="variantOptionsList--one">
                      <span>Option 1 List</span>
                      <input type="text" id="variantOptionsList--one" placeholder="Separate options with a comma" />
                    </label>

                  </li>

                </ul>

                {/* This button would need to dynamically add another option to the list above */}
                <button>Add another option</button>

              </div>

            </fieldset>

            {/* SEO  */}
            <fieldset>

              <div>

                <div>

                  <legend>Search Engine listing preview</legend>

                  <button>Edit website SEO</button>

                </div>

                <p>
                  Add a title and description to see how this product might appear in a search engine listing
                </p>

              </div>

              <div className="SEO__options">

                <div>

                  <label htmlFor="pageTitle">
                    <span>Page title</span>
                    <input type="text" id="pageTitle" />
                  </label>

                  <p>0 of 70 characters used</p>

                </div>

                <div>

                  <label htmlFor="SEO__description">
                    <span>Description</span>
                    <input type="text" id="SEO__description" />
                  </label>

                  <p>0 of 320 characters used</p>

                </div>

                <div>

                  <label htmlFor="SEO__URL">
                    <span>URL and handle</span>
                    <input type="text" id="SEO__URL" placeholder="link from STATE"/>
                  </label>

                </div>

              </div>

              

            </fieldset>

          </div>

          {/* SIDEBAR  */}
          <div>

            {/* ORGANIZATION  */}
            <fieldset>

              <div>

                <legend>Organization</legend>

                <div>

                  <label htmlFor="organization__productType">
                    <span>Product type</span>
                    <input type="text" id="organization__productType" />
                  </label>
                  <button>Arrows Image</button>

                </div>

                <div>

                  <label htmlFor="organization__vendor">
                    <span>Vendor</span>
                    <input type="text" id="organization__vendor" />
                  </label>
                  <button>Arrows Image</button>

                </div>

              </div>

              <div>
                <label htmlFor="organization__collections">
                  <span>Collections</span>
                  <input type="text" id="organization__collections" />
                </label>
                <p>Add this product to a collection so it’s easy to find in your store.</p>
                <ul>
                  {/* Empty list for new collections  */}
                </ul>
              </div>

              <div>
                <label htmlFor="organization__tags">
                  <span>Tags</span>
                  <input type="text" id="organization__tags" />
                </label>
                <ul>
                  {/* Empty list for new tags  */}
                </ul>
              </div>

            </fieldset>

          </div>

        </form>

      </>

    )

  }

}

export default addProduct;