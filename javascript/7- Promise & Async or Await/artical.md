# Async/Await Function

Javascript is a Synchronous which means that it has an event loop that allows you to queue up an action that won’t take place until the loop is available sometime after the code that queued the action has finished executing. But there’s a lot of functionalities in our program which makes our code Asynchronous. One of them is the Async/Await functionality.

Async/Await is the extension of promises which we get as a support in the language.


## Async

It simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event-loop. Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then javascript automatically wraps it in a promise which is resolved with its value.

```js
const getData = async() => { 
	var data = "Hello World"; 
	return data; 
} 

getData().then(data => console.log(data)); 

```


## Await

Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

```js
const getData = async() => { 
	var y = await "Hello World"; 
	console.log(y); 
} 

console.log(1); 
getData(); 
console.log(2); 

```

Notice that the console prints 2 before the “Hello World”. This is due to the usage of the await keyword.


# Promises

Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code.
Multiple callback functions would create callback hell that leads to unmanageable code.
Events were not good at handling asynchronous operations.

Promises are the ideal choice for handling asynchronous operations in the simplest manner. They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events.

- Benefits of Promises
	- Improves Code Readability
	- Better handling of asynchronous operations
	- Better flow of control definition in asynchronous logic
	- Better Error Handling
- A Promise has four states:
	- fulfilled: Action related to the promise succeeded
	- rejected: Action related to the promise failed
	- pending: Promise is still pending i.e not fulfilled or rejected yet
	- settled: Promise has fulfilled or rejected

A promise can be created using Promise constructor.

Syntax

```js
var promise = new Promise(function(resolve, reject){
     //do something
});
```

**Parameters**

- Promise constructor takes only one argument,a callback function.
- Callback function takes two arguments, resolve and reject
- Perform operations inside the callback function and if everything went well then call resolve.
- If desired operations do not go well then call reject.

```js
var promise = new Promise(function(resolve, reject) { 
const x = "geeksforgeeks"; 
const y = "geeksforgeeks"
if(x === y) { 
	resolve(); 
} else { 
	reject(); 
} 
}); 

promise. 
	then(function () { 
		console.log('Success, You are a GEEK'); 
	}). 
	catch(function () { 
		console.log('Some error has occured'); 
	}); 

```

**Promise Consumers**

Promises can be consumed by registering functions using .then and .catch methods.

then() is invoked when a promise is either resolved or rejected.
Parameters:
then() method takes two functions as parameters.

	- First function is executed if promise is resolved and a result is received.
	- Second function is executed if promise is rejected and an error is received. (It is optional and there is a better way to hanlde error using .catch() method

Syntax:

```js
.then(function(result){
        //handle success
    }, function(error){
        //handle error
    })
```

Example: Promised Resolved

```js
var promise = new Promise(function(resolve, reject) { 
	resolve('Geeks For Geeks'); 
}) 

promise 
	.then(function(successMessage) { 
	//success handler function is invoked 
		console.log(successMessage); 
	}, function(errorMessage) { 
		console.log(errorMessage); 
	}) 

```

Examples: Promise Rejected

```js
var promise = new Promise(function(resolve, reject) { 
	reject('Promise Rejected') 
}) 

promise 
	.then(function(successMessage) { 
		console.log(successMessage); 
	}, function(errorMessage) { 
	//error handler function is invoked 
		console.log(errorMessage); 
	}) 

```


