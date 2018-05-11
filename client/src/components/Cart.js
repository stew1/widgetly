import React, { Component } from 'react';

class Cart extends Component {
  renderCartContents(cart) {
    return cart.map((product, index) => {
      return (
        <div className="cart-row" key={index}>
          <div>Widget: </div>
          <div>{product.category}</div>
          <div>{product.name}</div>
          <div>{product.size}</div>
          <div>{product.finish}</div>
        </div>
      );
    });
  }

  render() {
    const { cart } = this.props;
    return <div className="cart">{this.renderCartContents(cart)}</div>;
  }
}

export default Cart;
