Meteor.methods({
  addATab: function(message) {
    console.log('method called');
    Tabs.insert({url: arguments});
  },
  addAWorkspace: function() {
    //TODO: call out parameters above?
    Workspaces.insert({
      name: arguments.name,
      about: arguments.about,
      urls: arguments.url,
      participants: arguments.participants,
      checkedOut: arguments.checkedOut
      //todo, there's an autoincrement type
    });
  }
});
