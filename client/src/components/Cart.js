import React, { Component } from 'react';

class Cart extends Component {
  renderCartContents(cart) {
    return cart.map((product, index) => {
      return <div key={index}>{product.name}</div>;
    });
  }

  render() {
    const { cart } = this.props;
    return <div className="Cart">{this.renderCartContents(cart)}</div>;
  }
}

export default Cart;
