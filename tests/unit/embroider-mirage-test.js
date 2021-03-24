import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Unit | embroider mirage', function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('mirage server contains dbs for all models', async function(assert) {
    const { db } = this.server;
    assert.ok(db.authors, 'authors db present');
    assert.ok(db.books, 'books db present');
    assert.ok(db.tags, 'tags db present');
  });
});
