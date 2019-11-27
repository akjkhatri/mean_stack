# Variable

Variables are used to store values (name = "John") or expressions (sum = x + y).


## Declare Variables in JavaScript

Before using a variable, you first need to declare it. You have to use the keyword `let` to declare a variable like this:

```js
let message;
```

## Assign a Value to the Variable

You can assign a value to the variable either while declaring the variable or after declaring the variable. `=` assignment operator will be used to assign a value.

```js
let message;

*!*
message = 'Hello'; // store the string
*/!*
```

## Accessing a Value from the Variable

We can access a variable using the variable name:

```js run
let message;
message = 'Hello!';

*!*
alert(message); // shows the variable content
*/!*
```

To be concise, we can combine the variable declaration and assignment into a single line:

```js run
let message = 'Hello!'; // define the variable and assign the value

alert(message); // Hello!
```

We can also declare multiple variables in one line:

```js no-beautify
let user = 'John', age = 25, message = 'Hello';
```

## Naming Variables

Though you can name the variables as you like, it is a good programming practice to give descriptive and meaningful names to the variables. Moreover, variable names should start with a letter and they are case sensitive. Hence the variables student name and studentName are different because the letter n in a name is different (n and N).

## Constants

To declare a constant (unchanging) variable, use `const` instead of `let`:

```js
const myBirthday = '18.04.1982';
```

Variables declared using `const` are called "constants". They cannot be reassigned. An attempt to do so would cause an error:

```js run
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!
```
