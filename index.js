const transform = require('lodash.transform');
const get = require('lodash.get');
const forEach = require('lodash.foreach');
const map = require('lodash.map');

module.exports = function groupAt(data, path) {
  const grouped = transform(data, (result, obj) => {
    const target = get(obj, path);
    if (!Array.isArray(target) && target) {
      target = [target];
    }

    forEach(target, (items, key) => {
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(items);
    });
  }, {});

  return map(grouped, (items, key) => {
    return {items, key};
  });
};
