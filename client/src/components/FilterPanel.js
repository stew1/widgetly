import React, { Component } from 'react';

class FilterPanel extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    let toggleFilter = () => this.props.toggleFilter(target.name);
    toggleFilter();
  }

  renderCategoryFilters(widgets, index) {
    return widgets.map((widget, index) => {
      return (
        <label key={index}>
          <input
            name={widget.category}
            type="checkbox"
            onChange={this.handleInputChange}
          />{' '}
          {widget.category}
        </label>
      );
    });
  }

  renderSizeFilters(widgets, index) {
    let sizeFilters = [];
    let sizes = [];
    widgets.forEach((widget, wIndex) => {
      widget.products.forEach((product, pIndex) => {
        let inventoryRow = (
          <label key={`${wIndex}-${pIndex}`}>
            <input
              name={product.size}
              type="checkbox"
              onChange={this.handleInputChange}
            />
            {product.size}
          </label>
        );

        if (!sizes.includes(product.size)) {
          sizes.push(product.size);
          sizeFilters.push(inventoryRow);
        }
      });
    });
    return sizeFilters;
  }

  render() {
    const { widgets } = this.props;
    return (
      <div className="filter-panel">
        <input className="search-bar" />
        <form className="filter-form">
          <div>Categories</div>
          {this.renderCategoryFilters(widgets)}
        </form>
      </div>
    );
  }
}

export default FilterPanel;
