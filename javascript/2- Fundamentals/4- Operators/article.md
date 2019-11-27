# Operators

JavaScript includes operators as in other languages. An operator performs some operation on single or multiple operands (data value) and produces a result. For example 1 + 2, where + sign is an operator and 1 is left operand and 2 is right operand. + operator adds two numeric values and produces a result which is 3 in this case.

JavaScript includes following categories of operators.

- Arithmetic Operators
- Comparison Operators
- Logical Operators
- Assignment Operators
- Conditional Operators

## Arithmetic Operators

Arithmetic operators are used to perform mathematical operations between numeric operands.

| Operator | Description |
|----------|-------------|
| `+` | Adds two numeric operands. |
| `-` | Subtract right operand from left operand |
| `*` | Multiply two numeric operands. |
| `/` | Divide left operand by right operand. |
| `%` | Modulus operator. Returns remainder of two operands. |
| `++` | Increment operator. Increase operand value by one. |
| `--` | Decrement operator. Decrease value by one. |



### Example

```js
var x = 5, y = 10, z = 15;

x + y; //returns 15

y - x; //returns 5

x * y; //returns 50

y / x; //returns 2

x % 2; //returns 1

x++; //returns 6

x--; //returns 4
```


## Comparison Operators

JavaScript language includes operators that compare two operands and return Boolean value true or false.

| Operator | Description |
|----------|-------------|
| `==` | Compares the equality of two operands without considering type. |
| `===` | Compares equality of two operands with type. |
| `!=` | Compares inequality of two operands. |
| `>` | Checks whether left side value is greater than right side value. If yes then returns true otherwise false. |
| `<` | Checks whether left operand is less than right operand. If yes then returns true otherwise false. |
| `>=` | Checks whether left operand is greater than or equal to right operand. If yes then returns true otherwise false. |
| `<=` | Checks whether left operand is less than or equal to right operand. If yes then returns true otherwise false. |


### Example

```js
var a = 5, b = 10, c = "5";
var x = a;

a == c; // returns true

a === c; // returns false

a == x; // returns true

a != b; // returns true

a > b; // returns false

a < b; // returns true

a >= b; // returns false

a <= b; // returns true

a >= c; // returns true

a <= c; // returns true
```


## Logical Operators

Logical operators are used to combine two or more conditions. JavaScript includes following logical operators.


| Operator | Description |
|----------|-------------|
| `&& (AND)` | It checks whether two operands are non-zero (0, false, undefined, null or "" are considered as zero), if yes then returns 1 otherwise 0. |
| `(OR)` | It checks whether any one of the two operands is non-zero (0, false, undefined, null or "" is considered as zero). |
| `!` | ! is known as NOT operator. It reverses the boolean result of the operand (or condition) |



### Example

```js
var a = 5, b = 10;

(a != b) && (a < b); // returns true

(a > b) || (a == b); // returns false

(a < b) || (a == b); // returns true

!(a < b); // returns false

!(a > b); // returns true
```

## Assignment Operators

JavaScript includes assignment operators to assign values to variables with less key strokes.


| Operator | Description |
|----------|-------------|
| `=` | Assigns right operand value to left operand. |
| `+=` | || Sums up left and right operand values and assign the result to the left operand. |
| `-=` | Subtract right operand value from left operand value and assign the result to the left operand. |
| `*=` | Multiply left and right operand values and assign the result to the left operand. |
| `/=` | Divide left operand value by right operand value and assign the result to the left operand. |
| `%=` | Get the modulus of left operand divide by right operand and assign resulted modulus to the left operand. |



### Example

```js
var x = 5, y = 10, z = 15;

x = y; //x would be 10

x += 1; //x would be 6

x -= 1; //x would be 4

x *= 5; //x would be 25

x /= 5; //x would be 1

x %= 2; //x would be 1
```
