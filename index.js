const transform = require('lodash.transform');
const get = require('lodash.get');
const forEach = require('lodash.foreach');
const map = require('lodash.map');

module.exports = function groupFrom(data, path) {
  const grouped = transform(data, (result, obj) => {
    const target = get(obj, path);
    if (!Array.isArray(target) && typeof target === 'object') {
      forEach(target, (items, key) => {
        if (!result[key]) {
          result[key] = [];
        }
        result[key].push(items);
      });
    } else {
      return false;
    }
  }, {});

  return map(grouped, (items, key) => {
    return {items, key};
  });
};
