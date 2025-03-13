define(['./foo', './bar'], function (foo, bar) {
    foo();
    bar.log();
 });
 document.getElementById("output").innerText = foo.greet() + " | " + bar.message;
 