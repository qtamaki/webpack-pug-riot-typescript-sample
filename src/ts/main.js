window.onload = function() {
  global.riot = require('riot');

  require("./sample.tag");

  var Person = require("./Person.ts");

  var Req = require("./req.ts");

  var req = new Req.Req();

  req.req();

  ((e) => {
    console.log(e);
  })("ES6");

  riot.mount("sample", new Person.Person());
};
