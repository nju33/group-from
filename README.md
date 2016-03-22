# group-from

[![Build Status](https://travis-ci.org/totora0155/group-from.svg?branch=master)](https://travis-ci.org/totora0155/group-from)

Create group from a property object value

---

## Install

```
npm i group-from
```

## Usage

```js
const groupFrom = require('group-from');

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

console.log(groupFrom(data, 'parent.child.items'));

```

output.

```js
[ { items: [ 'foo', 'FOO' ], name: 'foo' },
  { items: [ 'bar' ], name: 'bar' },
  { items: [ 'baz' ], name: 'baz' } ]
```
