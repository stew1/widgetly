import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card">
        <div className="product-profile">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-logo" style={{ color: product.finish }}>
            W
          </p>
        </div>
        <div className="details">
          <p>Size: {product.size}</p>
          <p>Finish: {product.finish}</p>
        </div>
        <div className="product-cart">
          <a
            className="cart-add-button"
            onClick={() => this.props.addProductToCart(product)}
          >
            Add to Cart
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
