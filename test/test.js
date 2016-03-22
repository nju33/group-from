const groupFrom = require('..');
const test = require('ava');
const data = {
  single: require('./fixtures/single'),
  multi: require('./fixtures/multi'),
  string: require('./fixtures/string'),
  object: require('./fixtures/object'),
};

test('Single', (t) => {
  const result = groupFrom(data.single, 'parent.child.categories');

  t.ok(result.foo);
  t.ok(result.bar);
  t.same(result.foo, result.bar);
});

test('Multi', (t) => {
  const result = groupFrom(data.multi, 'parent.child.categories');

  t.is(result.foo.length, 2);
});

test('String', (t) => {
  const result = groupFrom(data.string, 'parent.child.categories');

  t.ok(result.foo);
});

test('Object', (t) => {
  const result = groupFrom(data.object, 'parent.child.categories');

  t.ok(result.foo);
  t.ok(result.bar);
  t.same(result.foo, result.bar);
});
