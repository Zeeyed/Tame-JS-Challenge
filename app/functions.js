exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2])
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return el => str + ', ' + el;
  },

  makeClosures: function(arr, fn) {

  },

  partial: function(fn, str1, str2) {
    return el => fn(str1, str2, el);
  },

  useArguments: function() {
    return Array.prototype.reduce.call(arguments, function(a, b) {
        return a + b;
    }, 0);
  },

  callIt: function(fn) {
    let args = [...arguments].slice(1);
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
