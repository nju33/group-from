const groupFrom = require('..');
const test = require('ava');
const data = {
  single: require('./fixtures/single'),
  multi: require('./fixtures/multi'),
  string: require('./fixtures/string'),
  array: require('./fixtures/array'),
};

test('Single', (t) => {
  const result = groupFrom(data.single, 'parent.child.items');

  t.is(result[0].name, 'foo');
  t.same(result[0].items, ['foo']);
  t.is(result[1].name, 'bar');
  t.same(result[1].items, ['bar']);
});

test('Multi', (t) => {
  const result = groupFrom(data.multi, 'parent.child.items');

  t.is(result[0].name, 'foo');
  t.is(result[0].items.length, 2);
  t.is(result[0].items.join(','), 'foo,FOO');

  t.is(result[2].name, 'baz');
  t.is(result[2].items.length, 1);
  t.is(result[2].items[0], 'baz');
});

test('String', (t) => {
  const result = groupFrom(data.string, 'parent.child.items');

  t.same(result, []);
});

test('Array', (t) => {
  const result = groupFrom(data.array, 'parent.child.items');

  t.same(result, []);
});
