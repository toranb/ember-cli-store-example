import Ember from 'ember';
import Person from 'ember-cli-store-example/models/person';
import PromiseMixin from 'ember-cli-store-example/mixins/promise';

var PeopleRoute = Ember.Route.extend({
    model: function() {
        var store = this.get('store');
        PromiseMixin.xhr('/api/people', 'GET').then(function(response) {
            response.forEach(function(person) {
                store.push('person', person);
            });
        });
        return store.find('person');
    }
});

export default PeopleRoute;
