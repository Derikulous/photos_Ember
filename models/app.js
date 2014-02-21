App.Model = Ember.Object.extend(Ember.Copyable, {
  init: function() {
    // make sure that class has a storageKey property
    // storageKey is the key that is used in localStorage
    if (Em.isNone(this.constructor.storageKey))
  }
})
