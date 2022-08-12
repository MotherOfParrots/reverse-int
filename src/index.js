module.exports = function reverse (n) {
  const arr = n.toString().split('');
  console.log(arr);
  const noMinus = arr.slice(1);
  if (arr[0] === '-') {
    return noMinus;
  } else {
    return arr.reverse().join('');
  }
}

