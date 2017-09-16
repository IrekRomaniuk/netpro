import { Meteor } from 'meteor/meteor';
import React from 'react';

export default class ShieldsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="item">
        <h2>{this.props.Name}</h2>
      </div>
    );
  }
};

ShieldsListItem.propTypes = {
  Name: React.PropTypes.string.isRequired,
};