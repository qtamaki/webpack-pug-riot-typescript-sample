window.onload = function() {
  global.riot = require('riot');

  require("./sample.tag");

  var Person = require("./Person.ts");

  ((e) => {
    console.log(e);
  })("ES6");

  riot.mount("sample", new Person.Person());
};
