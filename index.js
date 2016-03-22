const transform = require('lodash.transform');
const get = require('lodash.get');
const forEach = require('lodash.foreach');

module.exports = function groupFrom(data, path) {
  return transform(data, (result, obj) => {
    const target = get(obj, path);
    if (Array.isArray(target)) {
      forEach(target, (name) => group(obj, result, name));
    } else if (typeof target === 'object') {
      forEach(target, (value, name) => group(obj, result, name));
    } else if (typeof target === 'string') {
      group(obj, result, target);
    } else {
      return false;
    }
  }, {});
};

function group(obj, result, name) {
  if (!result[name]) {
    result[name] = [];
  }
  result[name].push(obj);
}
