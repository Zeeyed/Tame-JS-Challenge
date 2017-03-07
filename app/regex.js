exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d+/g.test(str);
  },

  containsRepeatingLetter: function(str) {
    return (/([a-zA-Z]).*?\1/).test(str)
  },

  endsWithVowel: function(str) {
    return (/[aeiou]$/i).test(str);
  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {
    return /^([0-9]){3}-([0-9]){3}-([0-9]){4}$/.test(str);
  },

  isUSD: function(str) {
    
  }
};
