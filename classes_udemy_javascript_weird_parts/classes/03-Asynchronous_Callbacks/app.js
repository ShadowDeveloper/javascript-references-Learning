function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while(new Date() < ms){}
  console.log('Finished execution');
}

function clickHandler(){
  console.log('click event');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('Finished execution');