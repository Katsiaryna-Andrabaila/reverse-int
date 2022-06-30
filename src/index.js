module.exports = function reverse (n) {
    let result = '';
    let nStr = n.toString();
    let i = nStr.length - 1;
      
      if (nStr[0] !== '-') {
        while (i >= 0) {
            result = `${result}${nStr[i]}`;
          --i;
        }
        return Number(result);
      } else {
        while (i > 0) {
            result = `${result}${nStr[i]}`;
        i = i - 1;
      }
        return Number(result);
      }
  };
