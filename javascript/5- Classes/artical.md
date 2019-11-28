# Class

JavaScript supports the concept of classes as a syntax for creating objects. Classes specify the shared properties and methods that objects produced from the class will have.

The basic syntax is:
```js
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

When an object is created based on the class, the new object is referred to as an instance of the class. New instances are created using the new keyword.

The code sample shows a class that represents a Song. A new object called mySong is created underneath and the .play() method on the class is called. The result would be the text Song playing! printed in the console.

```js
class Song {
  constructor() {
    this.title;
    this.author;
  }
  
  play() {
  	console.log('Song playing!');
  }
}

const mySong = new Song();
mySong.play();
```

## What is a class?

In JavaScript, a class is a kind of function.

Here, take a look:

```js run
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// proof: User is a function
alert(typeof User); // function

```

## Class Expression

Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.

Here's an example of a class expression:

```js
let User = class {
  sayHi() {
    alert("Hello");
  }
};
```

We can even make classes dynamically "on-demand", like this:

```js run
function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      alert(phrase);
    };
  };
}

// Create a new class
let User = makeClass("Hello");

new User().sayHi(); // Hello
```


## Class Constructor

JavaScript classes can have a constructor method. This is a special method that is called when the object is created (instantiated). Constructor methods are usually used to set initial values for the object.

```js
class Song {
	constructor(title, artist) {
  	this.title = title;
    this.artist = artist;
  }
}

const mySong = new Song('Bohemian Rhapsody', 'Queen');
console.log(mySong.title);
```

## Class Methods

Properties in JS objects are separated using commas. This is not the case when using the class syntax. Methods in classes do not have any separators between them.

```js
class Song {
	play() {
  	console.log('Playing!');
  }
  
  stop() {
  	console.log('Stopping!');
  }
}
```

## Getters/setters

Classes may include getters/setters, computed properties etc.

Here's an example for `user.name` implemented using `get/set`:

```js run
class User {

  constructor(name) {
    // invokes the setter
    this.name = name;
  }


  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let user = new User("John");
alert(user.name); // John

user = new User(""); // Name too short.
```

The class declaration creates getters and setters in `User.prototype`, like this:

```js
Object.defineProperties(User.prototype, {
  name: {
    get() {
      return this._name
    },
    set(name) {
      // ...
    }
  }
});
```

## Classes extends/Inherritance

JavaScript classes support the concept of inheritance - a child class can extend a parent class. This is accomplished by using the extends keyword as part of the class definition.

Child classes have access to all of the instance properties and methods of the parent class. They can add their own properties and methods in addition to those. A child class constructor calls the parent class constructor using the super() method.

```js
// parent class
class Media {
	constructor(info) {
  	this.publishDate = info.publishDate;
    this.name = info.name;
  }
}

// child class
class Song extends Media {
	constructor(songData) {
    super(songData);
    this.artist = songData.artist;
  }
}

const mySong = new Song({ 
  artist: 'Queen', 
  name: 'Bohemian Rhapsody', 
  publishDate: 1975
});
```

## Overriding a method

Usually we don't want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality. We do something in our method, but call the parent method before/after it or in the process.

Classes provide `"super"` keyword for that.

- `super.method(...)` to call a parent method.
- `super(...)` to call a parent constructor (inside our constructor only).

For instance, let our rabbit autohide when stopped:

```js run
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }

}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }


  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }

}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White rabbit hides!
```