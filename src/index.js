module.exports = function reverse (n) {
  const arr = n.toString().split('');
  const noMinus = arr.slice(1);
  if (arr[0] === '-') {
    return noMinus.reverse().join('');
  } else {
    return arr.reverse().join('');
  }
}

