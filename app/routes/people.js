import Ember from 'ember';
import PromiseMixin from 'ember-promise/mixins/promise';

var PeopleRoute = Ember.Route.extend({
    model: function() {
        var store = this.get("store");
        return PromiseMixin.xhr("/api/people", "GET").then(function(response) {
            response.forEach(function(data) {
                store.push("person", data);
            });
            return store.find("person");
        });
    }
});

export default PeopleRoute;
