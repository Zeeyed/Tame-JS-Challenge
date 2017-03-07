exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var reduce = new RegExp("(.)(?=\\1{" + amount + "})","g");
    return str.replace(reduce, "");
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    return str.split("").reverse().join("");
  }
};
