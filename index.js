//Defining the Animal Base Class (Constructor Function)
function Animal(name) {
    this.name = name;
}
/*This is a constructor function for Animal.
When an object is created using new Animal("elephant"),
A new object is created.
The name property is set on that object. */
//Adding a Method to Animal’s Prototype
Animal.prototype.walk = function (destination) {
    console.log(this.name, 'is walking to', destination);
};
/*Animal.prototype is where we define methods shared across all instances of Animal.
walk(destination) will be available to all objects created from Animal.*/
//Creating an Instance of Animal
var animal = new Animal('elephant');
animal.walk('melbourne'); // elephant is walking to melbourne
/*new Animal('elephant') creates an object where:
this.name = 'elephant'
The object gets access to Animal.prototype.walk().
animal.walk('melbourne') prints:
"elephant is walking to melbourne" ✅*/
//Defining the Bird Child Class
function Bird(name) {
    Animal.call(this, name);
}
/*Bird is another constructor function, meant to extend Animal.
Animal.call(this, name);:
Calls Animal inside Bird, using this from Bird.
This means Bird also gets a name property like Animal.*/
//Inheriting from Animal (Prototype Chain)

Bird.prototype.__proto__ = Animal.prototype;

/*This makes Bird inherit all methods from Animal.
Bird.prototype.__proto__ (old way, better to use Object.create(Animal.prototype))
Links Bird.prototype to Animal.prototype.
Allows bird.walk() to work, since walk is in Animal.prototype.*/
//Adding a New Method to Bird
Bird.prototype.fly = function (destination) {
    console.log(this.name, 'is flying to', destination);
};
//Now, only Bird instances can use fly(destination)
//Creating an Instance of Bird
var bird = new Bird('sparrow');
/*new Bird('sparrow') creates:
{ name: "sparrow" }
It inherits walk() from Animal due to Bird.prototype.__proto__ = Animal.prototype.*/
//Calling Methods on Bird Instance
bird.walk('sydney'); // sparrow is walking to sydney
//Even though walk() is in Animal, bird can use it because of prototype chaining.
bird.fly('melbourne'); // sparrow is flying to melbourne
//fly() is defined in Bird.prototype, so bird can use it.