## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?

---

Answer of all questions is given below:

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?<br>
   Answer:

- `getElementById()` It select element by id. Returns only one element. Fasted method for getting one specific element.
- `getElementsByClassName()` It Selects all elements with a given class name. It returns a live html collection that updates automatically when the DOM changes.
- `querySelector()`It Selects the first element that matches a CSS selector. It is more flexible then getElementById.
- `querySelectorAll()`It Selects all elements that match a CSS selector. Returns Nodelist, which is not live.

2. How do you create and insert a new element into the DOM?<br>
   Answer:

   ```javascript
   // Create a new element
   const paragraph = document.createElement("p");

   // Add content
   paragraph.innerText = "This element is created and inserted into the DOM";

   // Select parent element
   const parent = document.getElementById("container");

   // Insert into DOM
   parent.appendChild(paragraph);
   ```

3. What is Event Bubbling? And how does it work?<br>
   Answer: <br>
   Event bubbling is a process where when an event occurs on a child element, it automatically propagates upwards to its parent elements. The event first runs on the target element, then gradually reaches the elements above it. If desired, this propagation can be stopped using event.stopPropagation().
4. What is Event Delegation in JavaScript? Why is it useful?<br>
   Answer:<br>
   Event delegation is a JavaScript technique where a single event listener is attached to a parent element to handle events of its child elements using event bubbling.<br>

- Improves performance and memory efficiency
- Makes code cleaner and easier to manage
- Reduces the number of event listeners

5. What is the difference between preventDefault() and stopPropagation() methods?<br>
   Answer:<br>

- `preventDefault()` stops the default action of an element like form submission or link navigation.
- `stopPropagation()` stops the event from bubbling up to parent elements and prevents parent event handlers from running.
