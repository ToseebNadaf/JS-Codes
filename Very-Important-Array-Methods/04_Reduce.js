//Reduce
// array.reduce(callbackfunction);
//return is must while using this function

const numbers = [1, 2, 3, 4, 5, 10];

// aim : sum of all the numbers in array

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum); //25

// accumulator , currentValue,  return
// 1               2              3
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25 <-- sum

//----------------------------------------------------------
// real life ex for counting the total in cart items in ecommerse site

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 15000 },
];

const totalCartValue = userCart.reduce((accumulatorPrice, currentPrice) => {
  return accumulatorPrice + currentPrice.price;
}, 0);
//here ,0 is initiate accumulatorvalue

console.log(totalCartValue);

// total price      currentValue     return
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000
