import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sell/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sell/index');
    assert.ok(route);
  });
});
