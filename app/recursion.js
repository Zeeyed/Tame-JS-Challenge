exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {
    var result = arr.reduce(function permute(res, item, key, arr) {
      return res.concat(
        arr.length > 1 && arr.slice(0, key)
          .concat(arr.slice(key + 1))
          .reduce(permute, [])
          .map(function(perm) {
             return [item].concat(perm);
          }) || item);
    }, []);
    return result;
  },

  fibonacci: function(n) {
    if (n <= 2) return 1;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function(n) {
    if (n == 0) return [""];
    var result = [];
    for (var i = 0; i < n; ++i) {
      var lefts = this.validParentheses(i);
      var rights = this.validParentheses(n - i - 1);
      for (var l = 0; l < lefts.length; ++l)
      for (var r = 0; r < rights.length; ++r)
        result.push("(" + lefts[l] + ")" + rights[r]);
    }
    return result;
  }
};
