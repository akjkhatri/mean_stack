
# Prototype 

JavaScript is a prototype based language, so, whenever we create a function using JavaScript, JavaScript engine adds a prototype property inside a function, Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.

*Consider the example below:-*

There are different ways to create an object, one of the way is to create an object using function constructor.

```js
<script> 
// function constructor 
function Person(name, job, yearOfBirth){ 
	this.name= name; 
	this.job= job; 
	this.yearOfBirth= yearOfBirth; 
} 
// this will show Person's prototype property. 
console.log(Person.prototype); 
</script> 

```

**Let examine this.....**


In above example result, you can see Person has a prototype property and that prototype property has a constructor object which again points to the Person constructor function.

When we create an object using the above function constructor, JavaScript Engine will add dunder proto or __proto__ in the object which will point to the prototype’s constructor object.


Now, we will add a method calculateAge() to the Prototype property in a Person function constructor which will inherit by the different objects. Below is the code for this:-

```js
// function constructor 
function Person(name, job, yearOfBirth){ 
	this.name= name; 
	this.job= job; 
	this.yearOfBirth= yearOfBirth; 
} 
Person.prototype.calculateAge= function(){ 
	console.log('The current age is: '+(2019- this.yearOfBirth)); 
} 
console.log(Person.prototype); 

```

**Output??**

In above result, we can see calculateAge() method gets added to the Prototype property. Now, we will create 2 different objects which will inherit calculateAge() method and remember, When a certain method(or property) is called, it first checks inside the object but when it doesn’t find, then search moves on Object’s prototype.

```js
// function constructor 
function Person(name, job, yearOfBirth){ 
	this.name= name; 
	this.job= job; 
	this.yearOfBirth= yearOfBirth; 
} 
// adding calculateAge() method to the Prototype property 
Person.prototype.calculateAge= function(){ 
	console.log('The current age is: '+(2019- this.yearOfBirth)); 
} 
console.log(Person.prototype); 

// creating Object Person1 
let Person1= new Person('Jenni', 'clerk', 1986); 
console.log(Person1) 
let Person2= new Person('Madhu', 'Developer', 1997); 
console.log(Person2) 

Person1.calculateAge(); 
Person2.calculateAge(); 



```

**Output??**

In above example, we created two Objects Person1 and Person2 using constructor function Person, when we called Person1.calculateAge() and Person2.calculateAge(), First it will check whether it is present inside Person1 and Person2 object, if it is not present, it will move Person’s Prototype object and prints the current age, which shows Prototype property enables other objects to inherit all the properties and methods of function constructor.

