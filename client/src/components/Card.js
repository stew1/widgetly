import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card">
        <div className="product-profile">
          <div className="product-name">{product.name}</div>
          <div className="product-logo" style={{ color: product.finish }}>
            W
          </div>
        </div>
        <div className="details">
          <p>Size: {product.size}</p>
          <p>Finish: {product.finish}</p>
          <p>Stock: {product.quantity}</p>
        </div>
        <div className="description">
          <p>{product.description}</p>
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
