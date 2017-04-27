function getInsertFuncName(elem,func) {
   var destName = document.querySelector(elem + " .codePanel-header > h1");
  //  var funcName = arguments.callee.toString(); // Get the this/current/own function NAMESPACE
   var funcName = func.toString();
   funcName = funcName.substr('function '.length);
   funcName = funcName.substr(0, funcName.indexOf('('));
   destName.innerHTML = "Function " + funcName;
}

function fnInnerReturned(param1,param2){
  var destInner = document.querySelector(param1);
  destInner.innerHTML = param2;
}

function chunkArrayInGroups(arr, size) {
  return arr.reduce(function (p, c) {
    if (p[p.length - 1].length < size) {
      p[p.length - 1].push(c);
    }
    else {
      p.push([c]);
    }
    return p;
  }, [[]]);
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "c", "d", "c"], 2));


// function concatObj(obj) {
//   var elem = document.getElementById('app').innerHTML;
//   return elem.join("");
// }

// concatObj("a");


// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// reverseString("hello");


function factorialize(num) {
  var aux = 1;
  for (var i = 0; i < num; i++) {
    aux = (i + 1) * aux;
  }
  getInsertFuncName('#factorialize',arguments.callee);
  return aux;
}
fnInnerReturned('#factorialize .codePanel-body', factorialize(5));

function palindrome(str) {
  var isPalindrome = str.split('').reverse().join('').replace(/[^0-9a-z]/g, "");
  var strReplace = str.replace(/[^0-9a-z]/g, "");
  getInsertFuncName('#palindrome',arguments.callee);
  if (isPalindrome === strReplace) {
    console.log("isPalindrome", isPalindrome);
    console.log("str", strReplace);
    return true, isPalindrome;
  }
  console.log("isPalindrome", isPalindrome);
  console.log("str", strReplace);
  return false, isPalindrome;
}
fnInnerReturned('#palindrome .codePanel-body', palindrome("_eye"));

// console.log(palindrome("A man, a plan, a canal. Panama"));
// console.log(palindrome("0_0 (: /-\ :) 0-0"));
// console.log(palindrome("eye"));
// console.log(palindrome("_eye"));

// var strings = ['rodrigo','wagner','adriano'];

// strings.map(function(person, i){
//   return console.log(person, i); 
// });


var scope = (function () {

  var userConfig = {};

  var config = {
    target: "body",
    color: "red",
    content: "lorem lorem lorem lorem lorem lorem",
    width: "10px",
    height: "10px"
  }

  var fn = {
    mergeObjects: function (obj1, obj2) { // faz o update das configs nativas pelas do user ou vice-versa
      var result = {}, name;
      for (name in obj1) result[name] = obj1[name];
      for (name in obj2) result[name] = obj2[name];
      return result;
    }
  }

  function createObject() {
    var el = document.createElement('div');
    var elemToCreate = document.querySelector(config.target);
      el.style.cssText = "width:" + config.width + ";height:" + config.height + ";background-color:" + config.color + "";
      el.textContent = config.content;
    if (elemToCreate && typeof elemToCreate != "undefined" && elemToCreate != null) {
      elemToCreate.appendChild(el);
    }
    else {
      return false, console.log("Target não encontrado!");
    }
  }

  function init() {
    if (this.userConfig) { config = fn.mergeObjects(config, this.userConfig) };
    createObject();
  }

  return {
    userConfig: userConfig,
    init: init
  }

})();

scope.userConfig = {
  target: "#showScope .codePanel-body",
  color: "green",
  width: "300px",
  height: "200px"
};

scope.init();