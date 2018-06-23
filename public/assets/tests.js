'use strict';

define('frontend/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/extended-navbar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/extended-navbar.js should pass ESLint\n\n');
  });

  QUnit.test('components/feature-collection.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/feature-collection.js should pass ESLint\n\n');
  });

  QUnit.test('components/landing-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/landing-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/page-footer.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/page-footer.js should pass ESLint\n\n6:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:18 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('components/page-navbar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-navbar.js should pass ESLint\n\n');
  });

  QUnit.test('components/search-bar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/search-bar.js should pass ESLint\n\n');
  });

  QUnit.test('components/top-bar.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/top-bar.js should pass ESLint\n\n2:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/top-rated.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/top-rated.js should pass ESLint\n\n3:10 - \'alias\' is defined but never used. (no-unused-vars)\n7:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass ESLint\n\n2:8 - \'Ember\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/base-controller.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/base-controller.js should pass ESLint\n\n3:16 - Use import Controller from \'@ember/controller\'; instead of using Ember.Controller (ember/new-module-imports)');
  });

  QUnit.test('controllers/change-password.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/change-password.js should pass ESLint\n\n4:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:18 - \'Ember\' is not defined. (no-undef)\n9:17 - Use import { oneWay } from \'@ember/object/computed\'; instead of using Ember.computed.oneWay (ember/new-module-imports)\n9:17 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/forgot-password.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/forgot-password.js should pass ESLint\n\n1:8 - \'Controller\' is defined but never used. (no-unused-vars)\n5:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:18 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/index.js should pass ESLint\n\n1:8 - \'Controller\' is defined but never used. (no-unused-vars)\n8:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/login.js should pass ESLint\n\n1:8 - \'Controller\' is defined but never used. (no-unused-vars)\n8:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)');
  });

  QUnit.test('controllers/register.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/register.js should pass ESLint\n\n6:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });

  QUnit.test('routes/change-password.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/change-password.js should pass ESLint\n\n');
  });

  QUnit.test('routes/forgot-password.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/forgot-password.js should pass ESLint\n\n5:44 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n5:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n9:16 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n16:44 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/item.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/login.js should pass ESLint\n\n5:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:18 - \'Ember\' is not defined. (no-undef)\n7:44 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/privacy-and-policy.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/privacy-and-policy.js should pass ESLint\n\n');
  });

  QUnit.test('routes/register.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/register.js should pass ESLint\n\n4:44 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/terms-and-conditions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/terms-and-conditions.js should pass ESLint\n\n');
  });

  QUnit.test('services/item-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/item-service.js should pass ESLint\n\n18:17 - Unexpected console statement. (no-console)\n27:17 - Unexpected console statement. (no-console)\n36:17 - Unexpected console statement. (no-console)\n46:17 - Unexpected console statement. (no-console)');
  });

  QUnit.test('services/user-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/user-service.js should pass ESLint\n\n2:8 - \'Ember\' is defined but never used. (no-unused-vars)\n13:17 - Unexpected console statement. (no-console)');
  });
});
define('frontend/tests/helpers/flash-message', ['ember-cli-flash/flash/object'], function (_object) {
  'use strict';

  _object.default.reopen({ init() {} });
});
define('frontend/tests/integration/components/extended-navbar-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | extended-navbar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3pdaL6hA",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"extended-navbar\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "q38mFpm4",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"extended-navbar\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('frontend/tests/integration/components/feature-collection-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | feature-collection', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "9e8rEuSY",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"feature-collection\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3WvzGEUj",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"feature-collection\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('frontend/tests/integration/components/landing-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | landing-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "WGBhjA+l",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"landing-item\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Zw6s+P3c",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"landing-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('frontend/tests/integration/components/page-footer-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | page-footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "DRIuNsrg",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"page-footer\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "KifBK6TY",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"page-footer\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('frontend/tests/integration/components/page-navbar-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | page-navbar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "6YnHGpwn",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"page-navbar\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "D/gXeLZ3",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"page-navbar\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('frontend/tests/integration/components/search-bar-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | search-bar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "FCPVkNKv",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"search-bar\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "J8iLrZjr",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"search-bar\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('frontend/tests/integration/components/top-bar-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | top-bar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "0ueBhVPX",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"top-bar\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "xR1RJH1C",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"top-bar\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('frontend/tests/integration/components/top-rated-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | top-rated', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "qRTnUiYU",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"top-rated\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "IRD3cqMG",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"top-rated\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('frontend/tests/test-helper', ['frontend/app', 'frontend/config/environment', '@ember/test-helpers', 'ember-qunit', 'frontend/tests/helpers/flash-message'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('frontend/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/flash-message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/flash-message.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/extended-navbar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/extended-navbar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/feature-collection-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/feature-collection-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/landing-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/landing-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/page-footer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/page-footer-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/page-navbar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/page-navbar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/search-bar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/search-bar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/top-bar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/top-bar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/top-rated-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/top-rated-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/base-controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/base-controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/change-password-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/change-password-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/forgot-password-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/forgot-password-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/register-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/register-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/change-password-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/change-password-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/forgot-password-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/forgot-password-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/privacy-and-policy-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/privacy-and-policy-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/register-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/register-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/terms-and-conditions-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/terms-and-conditions-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/item-service-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/item-service-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/user-service-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/user-service-test.js should pass ESLint\n\n');
  });
});
define('frontend/tests/unit/controllers/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define('frontend/tests/unit/controllers/base-controller-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | base-controller', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:base-controller');
      assert.ok(controller);
    });
  });
});
define('frontend/tests/unit/controllers/change-password-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | change-password', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:change-password');
      assert.ok(controller);
    });
  });
});
define('frontend/tests/unit/controllers/forgot-password-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | forgot-password', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:forgot-password');
      assert.ok(controller);
    });
  });
});
define('frontend/tests/unit/controllers/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define('frontend/tests/unit/controllers/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:login');
      assert.ok(controller);
    });
  });
});
define('frontend/tests/unit/controllers/register-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | register', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:register');
      assert.ok(controller);
    });
  });
});
define('frontend/tests/unit/routes/about-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/routes/change-password-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | change-password', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:change-password');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/routes/forgot-password-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | forgot-password', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:forgot-password');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/routes/item-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | item', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:item');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/routes/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/routes/privacy-and-policy-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | privacy-and-policy', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:privacy-and-policy');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/routes/register-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | register', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:register');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/routes/terms-and-conditions-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | terms-and-conditions', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:terms-and-conditions');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/services/item-service-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | itemService', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:item-service');
      assert.ok(service);
    });
  });
});
define('frontend/tests/unit/services/user-service-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | user-service', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:user-service');
      assert.ok(service);
    });
  });
});
define('frontend/config/environment', [], function() {
  var prefix = 'frontend';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
