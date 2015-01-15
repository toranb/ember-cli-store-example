import Ember from 'ember';
import PromiseMixin from 'ember-promise/mixins/promise';

var PersonRepository = Ember.Object.extend({
    find: function() {
        var store = this.get("store");
        PromiseMixin.xhr("/api/people", "GET").then(function(response) {
            response.forEach(function(data) {
                store.push("person", data);
            });
        });
        return store.find("person");
    }
});

export default PersonRepository;
