import React, { Component } from 'react';
import Card from './Card.js';

class Category extends Component {
  render() {
    const { widget } = this.props;
    const cards = widget.products.map((product, index) => {
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
