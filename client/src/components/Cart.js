import React, { Component } from 'react';

class Cart extends Component {
  orderProducts(cart) {
    let ordersArray = cart.map(order => {
      let product = order.product;
      return {
        productID: product.productID,
        quantity: order.quantity,
      };
    });
    fetch('/api/orders/create', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ orders: ordersArray }),
    });
  }

  renderCartContents(cart) {
    return cart.map((order, index) => {
      let product = order.product;
      return (
        // <div className="cart-row" key={index}>
        //   <div>Widget: </div>
        //   <div>{product.category}</div>
        //   <div>{product.name}</div>
        //   <div>{product.size}</div>
        //   <div>{product.finish}</div>
        //   <div>{order.quantity}</div>
        // </div>
        <div className="card cart-row">
          <div className="product-profile">
            <div className="product-name">{product.name}</div>
            <div className="product-logo" style={{ color: product.finish }}>
              W
            </div>
          </div>
          <div className="details">
            <p>Size: {product.size}</p>
            <p>Finish: {product.finish}</p>
          </div>
          <div className="description">
            <p>{product.description}</p>
          </div>
          <div className="product-cart">Quantity: {order.quantity}</div>
        </div>
      );
    });
  }

  render() {
    const { cart } = this.props;
    return (
      <div className="cart">
        <div className="product-cart">
          <a className="cart-add-button" onClick={this.orderProducts(cart)}>
            Order
          </a>
        </div>
        {this.renderCartContents(cart)}
      </div>
    );
  }
}

export default Cart;
