The Node.js require function is the main way of importing a module into the current file. There are three kinds of 
modules in Node.js: core modules, file modules, and external node_modules, all of which use the require function. 
When we make a require call with a relative path—for example, something like require('./filename') 
or require('../foldername/filename')—Node.js runs the destination JavaScript file in a new scope and returns 
whatever was the final value for module.exports in that file. This is the basis of file modules. Let’s look at the 
ramifications of this design.
