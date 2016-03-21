const groupAt = require('..');
const test = require('ava');

const data = [
  {
    parent: {
      child: {
        items: {
          foo: 'foo',
          bar: 'bar',
        },
      },
    },
  },
  {
    parent: {
      child: {
        items: {
          foo: 'FOO',
          baz: 'baz',
        },
      },
    },
  },
];

test('object', (t) => {
  const result = groupAt(data, 'parent.child.items');

  t.is(result[0].key, 'foo');
  t.is(result[0].items.length, 2);
  t.is(result[0].items.join(','), 'foo,FOO');

  t.is(result[2].key, 'baz');
  t.is(result[2].items.length, 1);
  t.is(result[2].items[0], 'baz');
});
