# An Introduction to JavaScript

In the introduction, we will se what special about JavaScript, what we can achieve with it, and which other technolgies play well with it.


## What is JavaScript?

*JavaScript* is a very powerful client-side scripting language. It is used mainly for enhancing the interaction of a user with the webpage. In other words, you can make your webpage more lively and interactive, with the help of JavaScript. JavaScript is also being used widely in game development, Mobile application and server side development.

Javascript programs are provided and executed as plain text. They don't need special preparation or compilation to run.

Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called [the JavaScript engine](https://en.wikipedia.org/wiki/JavaScript_engine).

The browser has an embedded engine sometimes called a "JavaScript virtual machine".

Different engines have different "codenames". For example:

- [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) -- in Chrome and Opera.
- [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey) -- in Firefox.
- ...There are others as well.


```smart header="How do engines work?"

How do engines work?

Engines are complicated. But the basics are easy.

1. The engine (embedded if it's a browser) reads ("parses") the script.
2. Then it converts ("compiles") the script to the machine language.
3. And then the machine code runs, pretty fast.

```

## Javascript History

JavaScript was developed by Brendan Eich in 1995, which appeared in Netscape, a popular browser of that time.

The language was initially called LiveScript and was later renamed JavaScript. There are many programmers who think that JavaScript and Java are the same but they are totaly independent. Java is a very complex programming language whereas JavaScript is only a scripting language.


## How to Run JavaScript?

Being a scripting language, JavaScript cannot run on its own. In fact, the browser is responsible for running JavaScript code. When a user requests an HTML page with JavaScript in it, the script is sent to the browser and it is up to the browser to execute it. JavaScript runs on any operating system including Windows, Linux or Mac


## Tools You Need

To start with, you need a text editor to write your code and a browser to display the web pages you develop. You can use a text editor of your choice including Notepad++, Visual Studio Code  or any other text editor you are comfortable with. You can use any web browser including Google Chrome, Firefox, Microsoft Edge, Internet Explorer etc.


## What makes JavaScript unique?

There are at least *three* great things about JavaScript:

```compare
+ Full integration with HTML/CSS.
+ Simple things are done simply.
+ Support by all major browsers and enabled by default.
```
JavaScript is the only browser technology that combines these three things.

That's what makes JavaScript unique. That's why it's the most widespread tool for creating browser interfaces.

That said, JavaScript also allows to create servers, mobile applications, etc.

## Where is JavaScript Today?

ECMAScript is a specification governed by ECMA international aimed at standardizing JavaScript. The latest version is ECMA9 also called JavaScript 9. It is supported by all major browsers like Chrome, Firefox, Internet Explorer, etc. Though each browser has an array of unique commands that are not part of the standards.


## Developer console

If something goes wrong in the script, we won't see what's broken and can't fix it.

To see errors and get a lot of other useful information about scripts, "developer tools" have been embedded in browsers.

## A Simple Javascript Program

### Hello World

You should place all your JavaScript code within <script> tags (<script> and </script>) if you are keeping your JavaScript code within the HTML document itself.

```html run height=100

<html>
<head>
	<title>My First JavaScript code!!!</title>
	<script type="text/javascript">
		alert("Hello World!");
	</script>
</head>
<body>
</body>
</html>

```
