var x = 1;
a();
b();
console.log(x);
// we can invoke the function before we intailaze them(Hoisting)

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
