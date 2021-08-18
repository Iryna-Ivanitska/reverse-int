module.exports = function reverse (n) {
  let array = [],
      sNum = n.toString();

  for (let i = 0; i < sNum.length; i++) {
      array.push(sNum.charAt(i));
  } 

  return parseInt(array.reverse().join(''));
}
