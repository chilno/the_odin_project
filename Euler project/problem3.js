var num = 600851475143;
var i = 2;
var newNum = num;

while (i <= newNum) {
  if (newNum % i === 0) {
    newNum = newNum / i;
  }
  i++;
}
console.log(i-1);
