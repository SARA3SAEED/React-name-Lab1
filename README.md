# Creating Elements with JavaScript and React

In this activity, we explore three different methods to create and render elements in a web page. These methods include using core JavaScript, React with plain JavaScript, and JSX with Babel. Each method achieves similar results but showcases the flexibility and power of different web technologies.

## 1. Using Core JavaScript

The first approach utilizes core JavaScript to create and append a paragraph element to a container.

```javascript
let container = document.getElementById('container');
let element = document.createElement('p');
element.innerHTML = 'Sara';
container.appendChild(element);
```

In this method:

1. We select a container element by its ID.
2. Create a new `<p>` element.
3. Set the inner HTML of the `<p>` element to "Sara".
4. Append the newly created element to the container.


2. Using React with Plain JavaScript

The second approach uses React to create and render a paragraph element.

```javascript
let container1 = document.getElementById('container1');
let element1 = React.createElement('p', { children: 'Sara1' });
ReactDOM.render(element1, container1);
```


In this method:

1. We select a container element by its ID.
2. Use `React.createElement` to create a new React element, specifying the element type (`<p>`) and its children (`'Sara1'`).
3. Render the React element into the container using `ReactDOM.render`.


3. Using JSX with Babel

The third approach uses JSX (JavaScript XML) and Babel to create and render a more complex structure, including a paragraph and an image.

```javascript
let container2 = document.getElementById('container2');
let element2 = (
    <div>
        <p>Sara2</p>
        <img src="https://images.pexels.com/photos/24778713/pexels-photo-24778713/free-photo-of-wooden-houses-in-village-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width="400" />
    </div>
);
ReactDOM.render(element2, container2);
```

In this method:

1. We select a container element by its ID.
2. Use JSX to define a structure containing a `<div>` with a `<p>` element and an `<img>` element inside it.
3. Render the JSX element into the container using `ReactDOM.render`.


Summary

These three approaches demonstrate different ways to create and render elements in a web application:

1. Core JavaScript: Direct manipulation of the DOM.
2. React with Plain JavaScript: Using React's createElement method for element creation.
3. JSX with Babel: Using JSX syntax for a more declarative and readable code structure, which is transpiled to JavaScript by Babel.

Each method has its own use cases and benefits, making them suitable for different scenarios in web development.




