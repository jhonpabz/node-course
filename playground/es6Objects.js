// Object property shorthand
const name = 'Jhon';
const userAge = 26;

const user = {
  name,
  age: userAge,
  location: 'Quezon City',
};

console.log(user);

// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 200,
  salePrice: undefined,
};

// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

// Destructure inside an argument

const transaction = (type, { label, stock } = {}) => {
  console.log(type, label, stock);
};

transaction('order', product);

// To test error if no test value
// transaction('order');
