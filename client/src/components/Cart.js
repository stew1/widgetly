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
    })
      .then(res => {
        cart.forEach(order => {
          //Update quantities
          this.updateQuantity(order.product, order.quantity);
        });
      })
      .then(result => {
        this.props.loadAllWidgets();
      });
  }

  updateQuantity(product, quantity) {
    fetch('/api/widgets/quantity', {
      method: 'PUT',
      body: JSON.stringify({
        product: product.productID,
        quantity: product.quantity - quantity,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        this.setState({
          product: null,
          value: null,
        });
      });
  }

  renderCartContents(cart) {
    if (cart.length === 0) {
      return <p className="empty-cart"> Uh oh, your cart is empty.</p>;
    }
    return cart.map((order, index) => {
      let product = order.product;
      return (
        <div key={index} className="card cart-row">
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
        <div
          className={cart.length === 0 ? 'product-cart hidden' : 'product-cart'}
        >
          <a
            className="cart-add-button"
            onClick={() => this.orderProducts(cart)}
          >
            Order
          </a>
        </div>
        {this.renderCartContents(cart)}
      </div>
    );
  }
}

export default Cart;
