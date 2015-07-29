Workspaces = new Mongo.Collection('workspaces');

//NO updates, just insert new documents
Workspaces.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Topic Name"
  },
  about: {
    type: String,
    label: 'description of work space',
    optional: true
  },
  urls: {
    type: [Object],
    label: 'Group of tab objects',
    optional: true,
    blackbox: true
  },
  participants: {
    type: [String],
    label: 'People following channel'
  },
  checkedOut: {
    type: Boolean,
    label: 'Is it checked out'
  },
  revisionNumber: {
    type: Number, //TODO: make this type auto-increment
    label: 'Tracks revision number',
    optional: true
  }
}));
