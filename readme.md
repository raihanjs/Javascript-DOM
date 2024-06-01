# Document Object Model (DOM)

আমরা যখন একটা ওয়েবপেজ HTML এ লিখি তখন এটা আমরা ব্রাউজার দিয়ে দেখতে পারি। আবার চাইলে পেজ সোর্স থেকে সরাসরি HTML কোডগুলোও দেখতে পারি। মূলত আমরা ব্রাউজারে যেটা দেখি আর পেজ সোর্সে যা দেখা যায় দুইটাই এক। কিন্তু
<br/>
Dom is an interface of JavaScript.
<br/>
We can get, change, add, or delete HTML elements with DOM.
<br/>
![DOM Tree !](./assets/img/event-bubbling-default.png)
<br/>
D — Document
<br/>
O — Object
<br/>
M — Model (Document tree model)
<br/>
What we can do with dom

- Change HTML element
- Change HTML attributes (id/class)
- Change CSS styles
- Add HTML elements & attributes
- Remove HTML elements & attributes
- React to HTML elements

There are 4 ways to catch any HTML element

1. getelementsByTagName() — return all similar tags in an array
2. getElementsByClassName() — return collection of all the same name classes as an array list of collection
3. getElemntById()
4. querySelector() / querySelectorAll()

> [!NOTE]
> Classlist, appendChild, createElement, innerText, getAttribute, setAttribute, event handler, event listener, stop propagation, event bubble, event delegation
