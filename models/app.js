App.Model = Ember.Object.extend(Ember.Copyable, {
  init: function() {
    // make sure that class has a storageKey property
    // storageKey is the key that is used in localStorage
    if (Em.isNone(this.constructor.storageKey))
      throw new Error(Ember.String.fmt("%@ has to implement storageKey property", [this]));
    }
    if (Em.isNone(this.get('guid'))) {
      // guid is null when item is being created
      // set the guid for this item to the new guid
      this.set('guid', guid());
    }
  },
  // default guid
  guid: null,
  copy: function() {
    // copy method is used by the PhotoEditRoute to create a clone of the model
    // we create a clone to preserve the original in case the Cancel button is clicked
    return Em.run(this.constructor, 'create', this.serialize());
  },
  serialize: function() {
    // Our persistance layer doesn't know about the fields that custom models need to preserve
    // for this reason, we need a serialize function that will return a version of this model
    // that can be saved to localStorage
    throw new Error(Ember.String.fmt("%@ has to implement serialize() method which is required to convert it to JSON.", [this]))
  }
});

// add a class property ( aka static property)
Model.reopenClass({
  /**
    * String name of the storage key for this model.
    * This is only necessary because Ember has a bug that prevents propert class inspection when using modules
    */
    storageKey: null
});
