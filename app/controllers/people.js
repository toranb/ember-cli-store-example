import Ember from 'ember';

var PeopleController = Ember.ArrayController.extend({
    numberz: function() {
        return 12345;
    }.property()
});

export default PeopleController;
