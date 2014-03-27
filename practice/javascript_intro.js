#!/usr/bin/env node

console.log("Hello, World!");

var myFunction = function(params) {
  console.log(params);
};
myFunction('Hello');

function myOtherFunction(params) {
  console.log(params);
}
myOtherFunction("second hello");

var myObject = {
  name: 'Peter',
  city: 'Sacramento',
  printInfo: function(params) {
    console.log(this.name + " " + this.city);
  }
  printInfo: ((params) -> 
    console.log('jm')
  )
};

myObject.printInfo();
var methodName = "printInfo";
myObject[methodName]();

printMethodName = function(name) {
  var text = "hello " + name;
  return function() { console.log (text) };
};

successFn = function () {
  callbackSuccess(data)
};
$.ajax()

$http.request('/users', {params: "" , type: "get"})
myPromise = $http.get('/users')
myPromise.success(function() {

});
myPromise.error( function() {

});
return myPromise

text = "hello";
printMethodName("test")();

methodName = "changed";
printMethodName();