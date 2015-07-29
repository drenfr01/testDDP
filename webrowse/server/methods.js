Meteor.methods({
  addATab: function(message) {
    console.log('method called');
    Tabs.insert({url: attributes});
  },
  addAWorkspace: function(attributes) {
    console.log("begin attributes");
    console.log(attributes);
    console.log("end attributes");
    Workspaces.insert({
      channelId: attributes.channelId,
      name: attributes.name,
      about: attributes.about,
      urls: attributes.urls,
      participants: attributes.participants,
      checkedOut: parseInt(attributes.checkedOut,10)
      //todo, there's an autoincrement type
    });
  }
});
