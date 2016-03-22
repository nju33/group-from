const transform = require('lodash.transform');
const get = require('lodash.get');
const forEach = require('lodash.foreach');

module.exports = function groupFrom(data, path) {
  return transform(data, (result, obj) => {
    const target = get(obj, path);
    if (Array.isArray(target)) {
      forEach(target, (name) => {
        if (!result[name]) {
          result[name] = [];
        }
        result[name].push(obj);
      });
    } else if (typeof target === 'object') {
      forEach(target, (value, name) => {
        if (!result[name]) {
          result[name] = [];
        }
        result[name].push(obj);
      });
    } else {
      return false;
    }
  }, {});
};
