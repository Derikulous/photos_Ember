App.IndexRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    this.transitionTo('photos');
  }
});
