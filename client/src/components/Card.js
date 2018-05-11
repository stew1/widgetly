import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      product: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: parseInt(event.target.value),
    });
  }

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
            onClick={() =>
              this.props.addProductToCart(product, this.state.value)
            }
          >
            Add to Cart
          </a>
          <div className="order-quantity">
            Qty:
            <input
              className="edit-quantity"
              type="text"
              value={this.state.value ? this.state.value : 0}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
