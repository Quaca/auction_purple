import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | base-controller', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:base-controller');
    assert.ok(controller);
  });
});
