import Ember from "ember";

export default Ember.ObjectController.extend({
	isEditing: false,

  authorlist: function() {
    return this.store.find('author');
  }.property()
});