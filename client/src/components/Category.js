import React, { Component } from 'react';
import Card from './Card.js';

class Category extends Component {
  render() {
    const { widget, search } = this.props;
    //filter products by search
    const filteredProducts = widget.products.filter(product => {
      return search ? product.name.toLowerCase().includes(search) : true;
    });
    const cards = filteredProducts.map((product, index) => {
      return (
        <React.Fragment key={`${product.productID} - ${index}`}>
          <Card
            key={index}
            product={product}
            addProductToCart={this.props.addProductToCart}
          />
          <hr className="card-break" />
        </React.Fragment>
      );
    });

    return (
      <div className="category">
        <label className="category-label">{widget.category}</label>
        {cards}
      </div>
    );
  }
}

export default Category;
