# Loops: while and for

Loops are useful when you have to execute the same lines of code repeatedly, for a specific number of times or as long as a specific condition is true. 

There are mainly four types of loops in JavaScript.

- for loop
- for/in a loop (explained later)
- while loop
- do…while loop


## The "for" loop

Syntax
```js
for(statement1; statement2; statment3)
{

 // code

}
```

- The statement1 is executed first even before executing the looping code. So, this statement is normally used to assign values to variables that will be used inside the loop.
- The statement2 is the condition to execute the loop.
- The statement3 is executed every time after the looping code is executed.

```js
<html>
<head>
	<script type="text/javascript">
		var students = new Array("John", "Ann", "Aaron", "Edwin", "Elizabeth");
		document.write("<b>Using for loops </b><br />");
		for (i=0;i<students.length;i++)
		{
		document.write(students[i] + "<br />");
		}
	</script>
</head>
<body>
</body>
</html>
```

## The "while" loop

The `while` loop has the following syntax:

```js
while (condition) {
  // code
  // so-called "loop body"
}
```

The “while loop” is executed as long as the specified condition is true. Inside the while loop, you should include the statement that will end the loop at some point of time. Otherwise, your loop will never end and your browser may crash.

```js
<html>
<head>
	<script type="text/javascript">
		document.write("<b>Using while loops </b><br />");
		var i = 0, j = 1, k;
		document.write("Fibonacci series less than 40<br />");
		while(i<40)
		{
			document.write(i + "<br />");
			k = i+j;
			i = j;
			j = k;
		}
	</script>
</head>
<body>
</body>
</html>
```

## The "do..while" loop

The condition check can be moved *below* the loop body using the `do..while` syntax:

```js
do {
  // loop body
} while (condition);
```

The do…while loop is very similar to while loop. The only difference is that in do…while loop, the block of code gets executed once even before checking the condition.

For example:

```js run
<html>
<head>
	<script type="text/javascript">
		document.write("<b>Using do...while loops </b><br />");
		var i = 2;
		document.write("Even numbers less than 20<br />");
		do
		{
			document.write(i + "<br />");
			i = i + 2;
		}while(i<20)
	</script>
</head>
<body>
</body>
</html>
```

## Breaking the loop

Normally, a loop exits when its condition becomes falsy.

But we can force the exit at any time using the special `break` directive.

For example, the loop below asks the user for a series of numbers, "breaking" when no number is entered:

```js run
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

*!*
  if (!value) break; // (*)
*/!*

  sum += value;

}
alert( 'Sum: ' + sum );
```

## Continue to the next iteration [#continue]

The `continue` directive is a "lighter version" of `break`. It doesn't stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

The loop below uses `continue` to output only odd values:

```js run no-beautify
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  *!*if (i % 2 == 0) continue;*/!*

  alert(i); // 1, then 3, 5, 7, 9
}
```
