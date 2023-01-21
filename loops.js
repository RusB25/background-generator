const basket = ["apples", "banana", "grapes"];
const detailBasket = {
  applles: 5,
  oranges: 10,
  grapes: 1000,
};
//1
// for (var i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

//2
// basket.forEach((item) => console.log(item));

//3 for of
// Itterating - arrays, strings
for (item of basket) console.log(item);

//4 for in - properties
// enumerating - objects
for (item in detailBasket) console.log(item);
for (item in basket) console.log(item);
