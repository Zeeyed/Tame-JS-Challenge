exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    console.log(start);
    let timer = setInterval(() => {
      start++;
      start <= end && console.log(end);
    }, 100);
    return {
      cancel: () => clearInterval(timer)
    };
  }
};
