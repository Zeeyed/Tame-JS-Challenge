exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((a, b) => a + b, 0);
  },

  remove: function(arr, item) {
    return arr.filter((element) => element !== item);
  },

  removeWithoutCopy: function(arr, item) {
    //console.log(arr);
  },

  append: function(arr, item) {
    return arr.concat(item);
  },

  truncate: function(arr) {
    return arr.splice(0, arr.length - 1);
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index)]
    return insert(arr, index, item);
  },

  count: function(arr, item) {
    return arr.filter((val) => val === item).length;
  },

  duplicates: function(arr) {
    var duplicates = arr.reduce(function(accumulator, currentValue, index, arr) {
      if (arr.indexOf(currentValue) !== index && accumulator.indexOf(currentValue) < 0) accumulator.push(currentValue); return accumulator;
    }, []);
    return duplicates.sort();
  },

  square: function(arr) {
    arr.forEach(function(element, index, array){array[index] = element * element;});
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((accumulator, currentValue, index) => (currentValue === target) ? accumulator.concat(index) : accumulator, []);
  }
};
