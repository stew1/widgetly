import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    let cartCount = 0;
    this.props.cart.forEach(order => {
      cartCount += order.quantity;
    });
    return (
      <div className="navbar">
        <div className="site-logo">Widgetly</div>
        <div className="navigation">
          <div onClick={() => this.props.displayWidgets()}>Widgets</div>
          <div onClick={() => this.props.displayInventory()}>Inventory</div>
          <div onClick={() => this.props.displayCart()}>
            {`Cart(${cartCount})`}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
