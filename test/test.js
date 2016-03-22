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

  t.is(result[0].name, 'foo');
  t.is(result[1].name, 'bar');
  t.same(result[0].items, result[1].items);
});

test('Multi', (t) => {
  const result = groupFrom(data.multi, 'parent.child.categories');

  t.is(result[0].name, 'foo');
  t.is(result[0].items.length, 2);
});

test('String', (t) => {
  const result = groupFrom(data.string, 'parent.child.categories');

  t.same(result, []);
});

test('Object', (t) => {
  const result = groupFrom(data.object, 'parent.child.categories');

  t.is(result[0].name, 'foo');
  t.is(result[1].name, 'bar');
  t.same(result[0].items, result[1].items);
});
