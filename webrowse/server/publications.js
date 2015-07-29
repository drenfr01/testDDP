Meteor.publish("tabs", function() {
  return Tabs.find();
});

Meteor.publish('workspaces', function() {
  return Workspaces.find();
});
