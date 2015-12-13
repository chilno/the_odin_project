var a=0;
var b=1;
var fib=0;
var sum=0;
var x;
for(x=0; fib<4000000; x++) {
    fib=a+b;
    if(fib%2===0)
        sum+=fib;
    a=b;
    b=fib;
  }
  document.write(sum);