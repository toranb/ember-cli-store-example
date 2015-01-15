import PersonRepository from 'ember-cli-store-example/repositories/person';

export function initialize(container, application) {
  application.register('repositories:person', PersonRepository);
  application.inject('repositories:person', 'store', 'store:main');
  application.inject('route:people', 'repository', 'repositories:person');
}

export default {
  name: 'person-repository',
  after: 'store',
  initialize: initialize
};
