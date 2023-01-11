console.log("index.js loaded");

// console.log(document.getElementsByTagName("h1")[0].textContent);

// const sayHello = () => {
//   console.log("Hello")
// }

// const currentTime = Date.now();
// const endTime = currentTime + 5000;
// while(Date.now() < endTime) {}

// setTimeout(sayHello, 0);

// console.log("here");

let something = fetch("https://jsonplaceholder.typicode.com/todos/25");
// a Promise (pending/fulfilled/rejected)
console.log(something);
something.then(() => {}); //run a callback when the promise fulfils.

let stuff = {};

fetch("https://jsonplaceholder.typicode.com/todos/25")
  .then((response) => {
    console.log(response.status);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    stuff = data;
    document.getElementById("data_container").textContent =
      JSON.stringify(data);
  })
  .then(() => {
    console.log("last then completed!");
    console.log(stuff);
  });

console.log(stuff);

// setTimeout(() => {
//   console.log("timeout completed!");
//   console.log(stuff);
// }, 1000);

const makeJsonRequest = (url, callback) => {
  fetch(url)
    .then((response) => response.json())
    .then(callback);
};

makeJsonRequest("https://jsonplaceholder.typicode.com/todos/2", (data) => {
  console.log(data);
});

const makeJsonRequestAlternate = (url) => {
  return fetch(url).then((response) => response.json());
};

makeJsonRequestAlternate("https://jsonplaceholder.typicode.com/todos/5")
  .then((data) => console.log(data))
  .catch(() => console.log("things went wrong!"));
