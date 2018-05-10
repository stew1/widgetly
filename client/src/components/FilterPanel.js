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

  render() {
    const { widgets } = this.props;
    return (
      <div className="filter-panel">
        <input className="search-bar" />
        <form className="filter-form">
          {this.renderCategoryFilters(widgets)}
        </form>
      </div>
    );
  }
}

export default FilterPanel;
