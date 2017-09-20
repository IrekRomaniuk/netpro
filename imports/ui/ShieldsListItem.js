import { Meteor } from 'meteor/meteor';
import React from 'react';

export default class ShieldsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  /*componentDidMount() {
    console.log(this.props)
  }*/
  
  render() {
    return (
        <div className="item">
        <h2>{this.props.Name}</h2>
        <h4>{this.props.Ext}   {this.props.Int}</h4> 
        <h4>{this.props.Policy}</h4> 
        <h5>{this.props.Comment}</h5>
      </div>
    );
  }
};

ShieldsListItem.propTypes = {
  Name: React.PropTypes.string.isRequired,
};