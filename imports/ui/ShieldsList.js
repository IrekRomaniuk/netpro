import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
// import { Session } from 'meteor/session';
// import FlipMove from 'react-flip-move';

import { Shields } from '../api/shields';
//import ShieldsListItem from './ShieldsListItem';

export default class ShieldsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shields: []
    };
  }
  componentDidMount() {
    console.log('componentDidMount ShieldsList');
    this.shieldsTracker = Tracker.autorun(() => {
      Meteor.subscribe('robo');
      const shields = Shields.find({}).fetch();
      this.setState({ shields });
    });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount ShieldsList');
    this.shieldsTracker.stop();
  }
  /*renderShieldsListItems() {
    if (this.state.shields.length === 0) {
      return (
        <div className="item">
          <p className="item__status-message">No Shields Found</p>
        </div>
      );
    }

    return this.state.shields.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <ShieldsListItem key={link._id} shortUrl={shortUrl} {...link}/>;
    });
  }*/
  render() {
    return (
      <div>
          {this.state.shields.length}
      </div>
    );
  }
};