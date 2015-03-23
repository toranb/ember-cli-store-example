import Ember from "ember";
import {test, module} from 'qunit';
import startApp from '../helpers/start-app';

var App, people = [{id: 1, firstName: 'toran', lastName: 'billups'}, {id: 2, firstName: 'brandon', lastName: 'williams'}];

module('Example Acceptance Test', {
    setup: function() {
        $.fauxjax.new({
          url: '/api/people',
          responseText: people
        });
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, App.destroy);
    }
});

test("people route will resolve promise and bind ember objects", function(assert) {
    visit("/");
    andThen(function() {
        var rows = find(".name");
        assert.equal(rows.length, 2);
        var first = find(".name:eq(0)").text();
        assert.equal(first, "toran");
        var last = find(".name:eq(1)").text();
        assert.equal(last, "brandon");
    });
});
