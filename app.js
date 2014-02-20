// log binding activities
Ember.LOG_BINDINGS = true;

var App = Ember.Application.create({
  // log when Ember generates a controller or a route from a generic class
  LOG_ACTIVE_GENERATION: true,
  // log when Ember looks up a template or a view
  LOG_VIEW_LOOKUPS: true,
  // render the application in jQuery("#ember-crud-example")
  rootElement: "#ember-crud-example"
});
