// const numbers = [1, 2, 3, 4, 5, 6];
// const uuu = numbers.slice(3);
// console.log(uuu);

// let arr = ['Ваня', 'Иштван', 'Оля'];
// let newArr = arr;
// newArr.push('Петя');
// arr.splice(arr.indexOf('Иштван'), 1, 'Глеб');
// arr.slice(1, 1);

// console.log(arr.unshift('Маша', 'Паша'));
// console.log(arr.slice(0, 1));
// console.log(arr);

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   console.log(total);
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice();
// const fruits = ['mango', 'apple', 'kiwi', 'Bob'];
// console.table(fruits);
// for (let i = 0; i <= fruits.length; i += 1) {
//   console.log(fruits[i]);
// }
// console.log();
// function findLongestWord(string) {
//   const arrayString = string.split(' ');
//   let longestWord = arrayString[0];

//   for (let i = 0; i < arrayString.length; i += 1) {
//     if (arrayString[i].length > longestWord.length) {
//       longestWord = arrayString[i];
//     }
//   }
//   console.log(longestWord);
// }
// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');

// function findLongestWord(string) {
//   const arr = string.split(' ');
//   let long = arr[0];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].length > long.length) {
//       long = arr[i];
//     }
//   }

//   console.log(long);
// }
// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');
// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   console.log(numbers);
// }
// createArrayOfNumbers(14, 17);

// function filterArray(numbers, value) {
//   let moreNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       moreNumbers.push(numbers[i]);
//     }
//   }

//   console.log(moreNumbers);
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// function getCommonElements(array1, array2) {
//   let filterArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     // let arr = array2.length;
//     if (array2.includes(array1[i])) {
//       filterArray.push(array1[i]);
//     }
//   }
//   console.log(filterArray);
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// function getEvenNumbers(start, end) {
//   let evenNum = [];
//   for (let i = start; i <= end; i += 1) {
//     if ([i] % 2 === 0) {
//       evenNum.push(i);
//     }
//   }
//   console.log(evenNum);
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(6, 12);

// function includes(array, value) {
//   let msg = '';
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       msg = 'true';
//       return i;
//       console.log(msg);
//     } else {
//       msg = 'false';
//     }
//   }
//   console.log(msg);
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(6, 12);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На березі спокійних вод',
//     author: 'Роберт Шеклі',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смішної людини',
//     author: 'Федір Достоєвський',
//     rating: 7.75,
//   },
// ];
// for (const book of books) {
//   // Об'єкт книги
//     console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(user); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes);

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (let key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);

//   //   console.log(values);
// }
// console.log(keys);
// console.log(values);

// function countProps(object) {
//   let propCount = 0;
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount++;
//     }
//   }
//   console.log(propCount);
// }
// countProps({});
// countProps({ name: 'Mango', age: 2 });
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// const temps = { as: 1, ab: 2, ag: 3, ac: 14, al: 45 };
// const b = {
//   ...temps,
//   ab: 700,
// };
// console.log(b);
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   let arraySalary = Object.values(salaries);
//   for (let array of arraySalary) {
//     totalSalary += array;
//   }
//   //   console.log(arraySalary);
//   console.log(totalSalary);
// }
// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (let color of colors) {
//   hexColors.push(color.hex);
// }
// for (let color of colors) {
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (let product of products) {
//     if (product.name === productName) {
//       return console.log(product.price);
//     }
//   }
//   return console.log(null);
// }
// getProductPrice('Radar');

// getProductPrice('Grip');
// getProductPrice('Droid');
// getProductPrice('Scanner');
// getProductPrice('Engine');

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const arrProducts = [];
//   for (let product of products) {
//     for (const key of Object.keys(product)) {
//       if (key === propName) {
//         arrProducts.push(product[key]);
//       }
//     }
//     console.log(arrProducts);
//     //   return products.name;
//     // } else if (product.quantity === propName) {
//     //   console.log(product.quantity);
//     //   //   return products.quantity;
//     // } else if (product.price === propName) {
//     //   console.log(product.price);
//     //   //   return products.price;
//   }
// }

// //   console.log(null);
// //   return null;

// getAllPropValues('name');
// getAllPropValues('quantity');
// getAllPropValues('price');
// getAllPropValues('category');

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;
//   const a = { b: 78, c: 90 };
//   console.log(a);
//   // Change code above this line
//   //   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// const {
//     today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//     tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, }

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     if (this.books.indexOf(oldName)) {
//       this;
//     }
//   },
// };
// bookShelf.updateBook('Haze', 'Dungeon chronicles');
// bookShelf.updateBook('The last kingdom', 'Dune');

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         console.log(this.potions);
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === oldName) {
//         this.potions.splice(this.potions[i].name, 1, newName);
//       }
//     }
//   },
// };
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.removePotion('Speed potion');
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    for (const item of this.items) {
      console.log(this.items);
      if (productName === item.name) {
        console.log('vins', productName);
      }
    }
  },
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};
console.table(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'kiwi', price: 110 });
console.table(cart.getItems());

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );

// console.log(average); // Масив об

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(...students);
// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       onSuccess(`Your order is accepted. Cooking pizza ${pizzaName}.`);
//     } else {
//       onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     }
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// Change code below this line
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (averTime, player) => averTime + player.playtime / player.gamesPlayed,
//   0
// );
// console.log(totalAveragePlaytimePerGame);
// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance = cost - cost * this.discount;
//     this.orders.push(order);
//     console.log(this.balance);
//   },
//   // Change code above this line
// };
// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
// function checkForSpam(message) {
//   let result;
//   // result = message.toLowerCase().includes('spam');
//   result = message.toLowerCase().includes('sale');
//   console.log(result);
//   return result;

//   // result = message.toLowerCase();
//   // return result.includes('spam') || result.includes('sale');
// }
// checkForSpam('Latest technology news');
// checkForSpam('JavaScript weekly newsletter');
// checkForSpam('Get best sale offers now!');
// checkForSpam('Amazing SalE, only tonight!');
// checkForSpam('Trust me, this is not a spam message');
// checkForSpam('Get rid of sPaM emails. Our book in on sale!');
// checkForSpam('[SPAM] How to earn fast money?');
