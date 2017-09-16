import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Shields = new Mongo.Collection('robo');

if (Meteor.isServer) {
  Meteor.publish('robo', function () {
    return Shields.find({});
  });
}
