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

const { label: productLabel, stock, rating } = product;
console.log(productLabel);
console.log(stock);
console.log(rating);
