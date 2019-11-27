# Conditional operators: if, '?'

There are mainly three types of conditional statements in JavaScript.

- If statement
- If…Else statement
- If…Else If…Else statement

## The "if" statement

The `if(...)` statement evaluates a condition in parentheses and, if the result is `true`, executes a block of code.

For example:

```js run

<html>
<head>
	<title>IF Statments!!!</title>
	<script type="text/javascript">
		var age = prompt("Please enter your age");
		if(age>=18)
		document.write("You are an adult <br />");
		if(age<18)
		document.write("You are NOT an adult <br />");
	</script>
</head>
<body>
</body>
</html>
```

Recommendation is wrapping your code block with curly braces `{}` every time you use an `if` statement, even if there is only one statement to execute. Doing so improves readability.

## The "If…Else" statement

You can use If….Else statement if you have to check two conditions and execute a different set of codes. In short, The `if` statement may contain an optional "else" block. It executes when the condition is false.

```run js
<html>
<head>
	<title>If...Else Statments!!!</title>
	<script type="text/javascript">
		// Get the current hours
		var hours = new Date().getHours();
		if(hours<12)
		document.write("Good Morning!!!<br />");
		else
		document.write("Good Afternoon!!!<br />");
	</script>
</head>
<body>
</body>
</html>

```


## The "If…Else If…Else" statement

Sometimes, we'd like to test several variants of a condition. The `else if` clause lets us do that.

```js run
<html>
<head>
	<script type="text/javascript">
		var one = prompt("Enter the first number");
		var two = prompt("Enter the second number");
		one = parseInt(one);
		two = parseInt(two);
		if (one == two)
			document.write(one + " is equal to " + two + ".");
		else if (one<two)
			document.write(one + " is less than " + two + ".");
		else
			document.write(one + " is greater than " + two + ".");
	</script>
</head>
<body>
</body>
</html>
```



## Conditional operator '?'

Sometimes, we need to assign a variable depending on a condition.

For instance:

```js run no-beautify
let accessAllowed;
let age = prompt('How old are you?', '');

*!*
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
*/!*

alert(accessAllowed);
```
