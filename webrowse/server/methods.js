Meteor.methods({
  addATab: function(message) {
    console.log('method called');
    Tabs.insert({url: attributes});
  },
  addAWorkspace: function() {
    //var attributes = EJSON.parse(arguments);
    Workspaces.insert({
      name: attributes.name,
      about: attributes.about,
      urls: attributes.urls,
      participants: attributes.participants,
      checkedOut: attributes.checkedOut
      //todo, there's an autoincrement type
    });
  }
});
