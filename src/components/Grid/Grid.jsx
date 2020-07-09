import React, { Component } from 'react';
import './Grid.css';

export default class Grid extends Component {
  render() {
    return (
      <div className="container">
        { this.props.children }
      </div>
    );
  }
}
