# group-from

[![npm version](https://badge.fury.io/js/group-from.svg)](https://badge.fury.io/js/group-from)
[![Build Status](https://travis-ci.org/totora0155/group-from.svg?branch=master)](https://travis-ci.org/totora0155/group-from)

Create group from a property object value

---

## Install

```
npm i group-from
```

## Usage

```js
const groupFrom = require('group-form');

const data = [
  {
    parent: {
      child: {
        categories: [
          'foo',
          'bar',
        ],
      },
    },
  },
  {
    parent: {
      child: {
        categories: [
          'foo',
          'baz',
        ],
      },
    },
  },
];

console.log(groupFrom(data, 'parent.child.categories'));

```

output.

```js
{ foo: [ { parent: [Object] }, { parent: [Object] } ],
  bar: [ { parent: [Object] } ],
  baz: [ { parent: [Object] } ] }
```
