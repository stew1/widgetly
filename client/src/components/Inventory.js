import React, { Component } from 'react';

class Inventory extends Component {
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
      value: parseInt(event.target.value, 10),
    });
  }

  editQuantity(product) {
    this.setState({
      product: product.productID,
    });
  }

  updateQuantity() {
    fetch('/api/widgets/quantity', {
      method: 'PUT',
      body: JSON.stringify({
        product: this.state.product,
        quantity: this.state.value,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        this.props.loadAllWidgets();
        this.setState({
          product: null,
          value: null,
        });
      });
  }

  renderQuantityColumn(product) {
    if (product.productID === this.state.product) {
      return (
        <div>
          <input
            className="edit-quantity"
            type="text"
            value={this.state.value ? this.state.value : ''}
            placeholder={product.quantity}
            onChange={this.handleChange}
          />
        </div>
      );
    } else {
      return <div>{product.quantity}</div>;
    }
  }

  renderInventory(widgets) {
    let inventoryRows = [];
    widgets.forEach((widget, wIndex) => {
      widget.products.forEach((product, pIndex) => {
        let inventoryRow = (
          <div key={`${wIndex}-${pIndex}`} className="inventory-row">
            <div>{widget.category}</div>
            <div>{product.name}</div>
            {this.renderQuantityColumn(product)}
            <div className="product-cart">
              <a
                className="edit-button"
                onClick={() => {
                  const { value } = this.state;
                  if (value && this.state.product === product.productID) {
                    this.updateQuantity();
                  } else {
                    this.editQuantity(product);
                  }
                }}
              >
                {this.state.product === product.productID ? 'Update' : 'Edit'}
              </a>
            </div>
          </div>
        );
        inventoryRows.push(inventoryRow);
      });
    });
    return inventoryRows;
  }

  render() {
    const { widgets } = this.props;
    return (
      <div className="inventory">
        <div className="inventory-row">
          <div>Category</div>
          <div>Name</div>
          <div>Quantity</div>
          <div />
        </div>

        {this.renderInventory(widgets)}
      </div>
    );
  }
}

export default Inventory;
