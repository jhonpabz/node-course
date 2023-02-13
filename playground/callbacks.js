// setTimeout(() => {
//   console.log('Two seconds are done');
// }, 2000);

// const names = ['Jhon', 'Janin', 'Ja'];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };

//     callback(data);
//   }, 2000);
// };

// geocode('Urdaneta', (data) => {
//   console.log(data);
// });

const add = (a, b, c) => {
  setTimeout(() => {
    const s = a + b;
    c(s);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
