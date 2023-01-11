const array = ["aaron", "bill", "cam", "dave", "ed"];

array.sort(() => Math.random() - 0.5);

console.log(array);

// const products = [
//   { name: "laptop", price: 1000 },

//   { name: "desktop", price: 1500 },

//   { name: "desktop", price: 500 },
// ];

// const compareFunction = (a, b) => {
//   return a.price - b.price;
// };

// products.sort(compareFunction);

// console.log(products);
