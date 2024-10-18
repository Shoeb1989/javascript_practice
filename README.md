## javascript_practice

# JavaScript Learning Process

A structured approach to learning JavaScript, including essential topics, demos, and resources.

## Learning Steps

1. **Basics of JavaScript**
   - Syntax, variables, data types, and basic control structures.
  
2. **Functions**
   - Declaration, expression, and arrow functions.
  
3. **Objects and Arrays**
   - Creating and manipulating objects and arrays.
  
4. **DOM Manipulation**
   - Selecting elements, modifying content, and handling events.
  
5. **Asynchronous JavaScript**
   - Understanding callbacks, Promises, and async/await.
  
6. **Advanced Topics**
   - ES6+ features, modules, error handling, and debugging.

## Demos

### 1. Basics of JavaScript
```javascript
let name = "Alice";
let age = 30;
if (age >= 18) {
    console.log(`${name} is an adult.`);
} else {
    console.log(`${name} is a minor.`);
}
```
### 2. Functions
```javascript
Copy code
function greet(user) {
    return `Hello, ${user}!`;
}
const greetArrow = (user) => `Hello, ${user}!`;
console.log(greet("Alice"));
console.log(greetArrow("Bob"));
```


### 3. Objects and Arrays
```javascript
Copy code
const person = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "traveling"]
};
console.log(person.name);
console.log(person.hobbies[0]);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
```

### 4. DOM Manipulation

```html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Manipulation</title>
</head>
<body>
    <h1 id="title">Hello World</h1>
    <button id="changeTitle">Change Title</button>
    <script>
        const button = document.getElementById("changeTitle");
        button.addEventListener("click", () => {
            document.getElementById("title").textContent = "Title Changed!";
        });
    </script>
</body>
</html>

```

### 5. Asynchronous JavaScript
```javascript
Copy code
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000);
    });
}
async function getData() {
    const data = await fetchData();
    console.log(data);
```

}
getData();
