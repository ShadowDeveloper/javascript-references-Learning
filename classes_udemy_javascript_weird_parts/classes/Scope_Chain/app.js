function b() {
  console.log("b ",myVar)
}

function a() {
  function c(){
    console.log("c ",myVar);
  }
  var myVar = 2;
  console.log("a ",myVar);
  b();
  c();
}

var myVar = 1;
console.log("Global context", myVar);
a();