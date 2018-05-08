import React, { Component } from 'react';
import Category from './Category.js';

class CardPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { widgets } = this.props;
    const categories = widgets.map((widget, index) => {
      return <Category key={index} widget={widget} />;
    });

    return <div className="card-panel">{categories}</div>;
  }
}

export default CardPanel;
