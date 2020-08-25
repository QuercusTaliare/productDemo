import React, { Component } from 'react';
import '../styles/AddProduct.css';

class addProduct extends Component {

  constructor() {

    super();
    this.state = {

      productTitle: "",
      productDesc: "",
      photo: "",
      price: "",
      comparePrice: "",
      costPerItem: "",
      tax: false,
      SKU: "",
      barcode: "",
      quantity: false,
      variantOptionsCheck: false,
      SEOoptions: false,
      productType: "",
      productVendor: "",
      productCollections: [],
      tags: []




    }

  }

  handleChange = (e) => {

    // This will update state everytime the form is altered
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })

  }

  handleCheck = (e) => {

    this.setState({
      [e.target.name]: e.target.checked
    })

  }

  handleClick = (e) => {

    e.preventDefault();

    let SEOoptions = this.state.SEOoptions;

    SEOoptions = !SEOoptions;

    this.setState({ SEOoptions });

  }

  addTags = (e) => {

    if(e.key === 'Enter') {

      e.preventDefault();
      
      let newTags = this.state.tags;

      newTags.push(e.target.value);

      this.setState({ tags: newTags });

      e.target.value = "";

    }

  }

  render() {

    return (

      <div className="addProduct__container">

        <h2>Add Product</h2>
        <form action="">

          {/* MAIN (LEFT) */}
          <div>

            {/* BASIC INFO  */}
            <fieldset className="addProduct__basicInfoFieldset">

              <div className="addProduct__subFormContainer">

                <legend>Basic Info</legend>
                

                <label htmlFor="productTitle" class="addProduct__label">
                  <span>Title</span>
                  <input 
                    type="text" 
                    id="productTitle" 
                    name="productTitle" 
                    className="basicInfo__productTitle" 
                    onChange={this.handleChange}
                  />
                </label>

                <label htmlFor="productDesc" class="addProduct__label">
                  <span>Description</span>
                  <textarea 
                    id="productDesc"
                    name="productDesc" 
                    className="basicInfo__productDesc" 
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

                <img src={this.state.photo} alt=""/>
                <label htmlFor="photo">
                  <span className="sr-only">Upload a photo</span>
                  <input 
                    type="file" 
                    id="photo" 
                    name="photo"
                    onChange={this.handleChange}
                  />
                </label>
                <p>or drop files to upload</p>

              </div>

            </fieldset>

            {/* PRICING  */}
            <fieldset>
              
              <div>

                <legend>Pricing</legend>

                <label htmlFor="price">
                  <span>Price</span>
                  <input 
                    type="text" 
                    id="price" 
                    name="price" 
                    onChange={this.handleChange} 
                  />
                </label>

                <label htmlFor="comparePrice">
                  <span>Compare at price</span>
                  <input 
                    type="text" 
                    id="comparePrice" 
                    name="comparePrice" 
                    onChange={this.handleChange} 
                  />
                </label>

              </div>

              <div>

                <div>

                  <label htmlFor="costPerItem">
                    <span>Cost per Item</span>
                    <input 
                      type="text" 
                      id="costPerItem"
                      name="costPerItem"
                      onChange={this.handleChange}
                    />
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
                  <input 
                    type="checkbox" 
                    id="tax" 
                    name="tax"
                    onChange={this.handleCheck} 
                  />
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
                  <input 
                    type="text" 
                    id="SKU"
                    name="SKU"
                    onChange={this.handleChange}
                  />
                </label>

                <label htmlFor="barcode">
                  <span>Barcode (ISBN, UPC, GTIN, etc.)</span>
                  <input 
                    type="text" 
                    id="barcode" 
                    name="barcode" 
                    onChange={this.handleChange} 
                  />
                </label>

                <label htmlFor="quantity">
                  <input 
                    type="checkbox" 
                    id="quantity" 
                    name="quantity" 
                    onChange={this.handleCheck} 
                  />
                  <span>Track Quantity</span>
                </label>

              </div>

            </fieldset>

            {/* VARIANTS  */}
            <fieldset>
              <div>

                <legend>Variants</legend>
                <label htmlFor="variantOptionsCheck">
                  <input type="checkbox" id="variantOptionsCheck" name="variantOptionsCheck" onChange={this.handleCheck} />
                  <span>This product has multiple options, like different sizes or colors</span>
                </label>

              </div>

              {/* When the Variants checkbox is checked, more Variant form elements will appear */}
              {
                this.state.variantOptionsCheck 
                
                && 

                <div className="variants__options">

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

              }

            </fieldset>

            {/* SEO  */}
            <fieldset>

              <div>

                <div>

                  <legend>Search Engine listing preview</legend>

                  <button onClick={this.handleClick}>Edit website SEO</button>

                </div>

                <p>
                  Add a title and description to see how this product might appear in a search engine listing
                </p>

              </div>

              {
                this.state.SEOoptions

                &&

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
                      <input type="text" id="SEO__URL" placeholder="link from STATE" />
                    </label>

                  </div>

                </div>
              }

            </fieldset>

          </div>

          {/* SIDEBAR  */}
          <div>

            {/* ORGANIZATION  */}
            <fieldset>

              <div>

                <legend>Organization</legend>

                <div>

                  <label htmlFor="productType">
                    <span>Product type</span>
                    <input 
                      type="text" 
                      id="productType"
                      name="productType"
                      onChange={this.handleChange} 
                    />
                  </label>
                  <button>Arrows Image</button>

                </div>

                <div>

                  <label htmlFor="productVendor">
                    <span>Vendor</span>
                    <input 
                      type="text" 
                      id="productVendor"
                      name="productVendor"
                      onChange={this.handleChange} 
                    />
                  </label>
                  <button>Arrows Image</button>

                </div>

              </div>

              <div>
                <label htmlFor="productCollections">
                  <span>Collections</span>
                  <input 
                    type="text" 
                    id="productCollections"
                    name="productCollections"
                  />
                </label>
                <p>Add this product to a collection so it’s easy to find in your store.</p>
                <ul>
                  {/* Empty list for new collections  */}
                </ul>
              </div>

              <div>
                <label htmlFor="tags">
                  <span>Tags</span>
                  <input 
                    type="text" 
                    id="tags" 
                    name="tags"
                    onKeyDown={this.addTags}
                     
                  />
                </label>
                <ul>
                  {
                    this.state.tags.map(tag => {
                      return (
                        <li>
                          {tag}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>

            </fieldset>

          </div>

        </form>

      </div>

    )

  }

}

export default addProduct;