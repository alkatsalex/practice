// import cards from './card.js'

// console.log(cards);

// const btnIncrement = document.querySelector(".js-increment")
// const btnDiscrement = document.querySelector(".js-discrement")
// const inputValue = document.querySelector(".js-input-value")
// const btnCreate = document.querySelector('.js-create')
// const block = document.querySelector('.js-block')

// const counter = {
//   value: 0,

//   decrement() {
//     this.value -=1
// },
//     increment() {
//     this.value +=1
//   }
// }

// const decrementValue = () => {
//   counter.decrement()
//   inputValue.textContent = counter.value
// }

// const incrementValue = () => {
//   counter.increment()
//   inputValue.textContent = counter.value
// }




// btnIncrement.addEventListener('click', incrementValue)
// btnDiscrement.addEventListener('click', decrementValue)


// const makeMarkupCard = ({src, alt, description}) => {
//   return `<img src="${src}" alt="${alt}" width="300"><p>${description}</p>`
//  }

// const takeMarcapToHTML = cards.map(makeMarkupCard).join('')
// console.log(takeMarcapToHTML);
//    block.insertAdjacentHTML('beforeend', takeMarcapToHTML);



// btnCreate.addEventListener('click', takeMarcapToHTML)
// const btnIncrement = document.querySelector(".js-increment")
// const btnDiscrement = document.querySelector(".js-discrement")
// const inputValue = document.querySelector(".js-input-value")

// const counter = {
//   value: 0,

//   decrement() {
//     this.value -=1
// },
//     increment() {
//     this.value +=1
//   }
// }

// const decrementValue = () => {
//   counter.decrement()
//   inputValue.textContent = counter.value
// }

// const incrementValue = () => {
//   counter.increment()
//   inputValue.textContent = counter.value
// }




// btnIncrement.addEventListener('click', incrementValue)
// btnDiscrement.addEventListener('click', decrementValue)




// const user = {
//   name: "Alex", 
// }

// console.log(user);

// const userPro = Object.create(user)

// userPro.role = "proUser"

// console.log(userPro);
// console.log(userPro.name);

// const userAdmin = Object.create(userPro)
// userAdmin.iAdmin = function () {
//   console.log("i admin");
// }


// console.log(userAdmin.iAdmin());
// console.log(userAdmin.name);





// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));












// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((previousValue, player) => {
//   return previousValue + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);



// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]





// const calculateTotalBalance = users => {const qwe = users.reduce((total, user) => {
//   return total += user.balance
// }, 0)
//    return qwe
// };

// console.log(calculateTotalBalance(users));








// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 11, tags: ["js", "nodejs", "react"] },
// ];

// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, {likes}) => totalLikes + likes, 0);
// };


// const getTags = tweets =>
//   tweets.reduce((allTags, {tags}) => {
//     allTags.push(...tags);

//     return allTags;
//   }, []);
 
// const tags = getTags(tweets)

// console.log(tags)



// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;
// console.log(acc);
//   return acc;
// };

// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

  



















// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];


// const findStudentName = students.map(({name}) => name)


// console.log(findStudentName);

/////////////////////////////////////////

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const studentsWithHighScore = students.filter(({score}) => score > HIGH_SCORE)

// const studentsWithLowScore = students.filter(({score}) => score < LOW_SCORE)

// const studentsWithAvengerScore = students.filter(({score}) => score > LOW_SCORE && score < HIGH_SCORE)

// console.log(studentsWithHighScore)
// console.log(studentsWithLowScore)
// console.log(studentsWithAvengerScore)







// const sum = {
//   first: 320,
//   second: {a: 1, b: 2},
//   third: 560,
// }

// const { first, second: { a, b }, third } = sum;

// sum.first = 110
//  console.log(sum.first);
//  console.log(first, a, b, third);

//  const ollSum = [first, a, b, third]

//  console.log(ollSum);

//  function fainalSum(one ,two, three, fird) {
//  const sum = one + two + three + fird
//  return sum
//  }

//  console.log((fainalSum(first, a, b, third)));






// const colors = ["red", "green", "blue"];

// colors.splice(3, 0, "yellow", "pink");
// console.log(colors);




// const num1 = 5;
// const num2 = 10;
// // let biggerNumber;

// // if (num1 > num2) {
// //   biggerNumber = num1;
// // } else {
// //   biggerNumber = num2;
// // }


// const biggerNumber = num1 > num2 ? "num1 strong" : "num2 strong"
// console.log(biggerNumber);



// console.log(Math.floor(7.7))
// console.log(Math.ceil(3.09));
// console.log(Math.pow(16, 4))



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];
// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }



// const totalSpent = 1000;
// let paymant = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 0.02
// } else if (totalSpent >= 1000 && totalSpent < 2000) {
//   discount = 0.05
// } else if (totalSpent >= 2000 && totalSpent < 5000) {
//   discount = 0.1
// } else if (totalSpent >= 5000){
// discount = 0.15
// }
// console.log(`Заказ на суму ${paymant}, скидка ${discount * 100}%`);
// console.log(`К оплате ${paymant - paymant * discount} грн`);



// let balance = 10000
// const paymant = 2000;

// // общая сума заказа ${ paymant } кредитов

// console.log(`общая сума заказа ${paymant} кредитов`);

// if (paymant > balance) {
//    console.log('not money');
 
// } else {
//    balance -= paymant;
//   console.log('осталось ', balance)
// }

// console.log('done' , balance);






// const min = 0;
// const max = 9;
// let t = 0;

// for (let i = 0; i <= 9; i += 1)
// { 

//   if (i % 2 === 0) {
//     console.log(i);
//     t += i;
//   }
// };
  

// console.log(t);







// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//  blacklistedEmails = []

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email)
//   }

//   isBlacklisted(email) {
//   this.blacklistedEmails.includes(email)
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true


// 1111111111!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel, blacklistedEmails }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     // this.blacklistedEmails = blacklistedEmails;
//   }

//   blacklistedEmails = []

//   blacklist(email) {
//     this.blacklistedEmails.push(email)
//   }

//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//       return true
//     } else {
//       return false
//     }
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true














// class Storage {
//   constructor(items) {
//     this.items = items
//   }

//   getItems() {
//     return this.items
//   }

//   addItem(newItem) {
//     this.items.push(newItem)
//   }

//   removeItem(itemToRemove) {
//  const i = this.items.findIndex(item => item === itemToRemove);
//     console.log(i);
//     this.items.splice(i, 1)
//   }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]













// class StringBuilder {
//   constructor(value) {
//     this.value = value
//   }

//   getValue() {
//     return this.value;
//   }


//   padEnd(str) {
// return this.value
//   };
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// // builder.padStart("^");
// // console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// // builder.padBoth("=");
// // console.log(builder.getValue()); // "=^.^="



















// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const { name, price } of this.potions) {
//       if (name.includes(newPotion.name)) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let index = this.potions.findIndex(potion => potion.name === potionName);
//     if (index === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(index, 1);
    
//   },
//   updatePotionName(oldName, newName) {
//     let index = this.potions.findIndex(potion => potion.name === oldName);
//     if (index === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     const objectOld = this.potions[index]
//     objectOld["name"] = newName
//     return objectOld
//   }
// };
  // Change code above this line



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   removePotion(potionName) {
//     this.potions.forEach(function (potion, index) {
//       if (potionName === potion[index].name) {
//         potion.splice(index, 1)
//       }
//     };
//   },
// }


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]


// const getInactiveUsers = (name) => {
//     const isInctiveUsers = users.filter(user => user.isActive == false)
//   return isActiveUsers 
// };
// console.log(getInactiveUsers(users));










// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });





// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//    addPotion(newPotion) {
// for (const {name, price} of this.potions) {
//   if (name.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
// }
//     this.potions.push(newPotion);
//   },
   
   
//   //  1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
   
   
// //   removePotion(potionName) {
// // for (const {name, price} of this.potions) {
// //   if ("Speed potion" === potionName) {
// //     // const potionIndex = this.potions.indexOf()
// //     return this.potions.splice(0, 1)
// //   } else if ("Dragon breath" === potionName) {
// //     // const potionIndex = this.potions.indexOf()
// //     return this.potions.splice(1, 1)
// //   } else if ("Stone skin" === potionName){
// //     return this.potions.splice(2, 1)
// //   } else {
// //     return `Potion ${potionName} is not in inventory!`;
// //   }
// // }
// //   },
   
   
   
   
   
//      removePotion(potionName) {
// for (const {name, price} of this.potions) {
//   if (this.potions.includes(potionName)) {
//    return 1
//   } 
// }

//  return `Potion ${potionName} is not in inventory!`;
//   },



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     let index = this.potions.findIndex(potion => potion.name === oldName);
//     if (index === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     const objectOld = this.potions[index]
//  objectOld["name"] = newName
//   return objectOld
//   }
// }
//         // Change code above this line
// console.log(atTheOldToad.updatePotionName("Stone skin", "stupid js"))
// console.log(atTheOldToad.potions);


// 1111111111111111111111111111111111111111111111111111
    // let index = this.potions.findIndex(potion => potion.name === oldName);
    // if (index === -1) {
    //   return `Potion ${oldName} is not in inventory!`;
    // }

    // this.potions.splice(index, 1,)




//   updatePotionName(oldName, newName) {
//     let index = this.potions.findIndex(potion => potion.name === oldName);
//     if (index === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.name = "iron heart"
//   },
//   // Change code above this line
// };

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   removePotion(potionName) {
//     let index = this.potions.findIndex(potion => potion.name === potionName);
//     if (index === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(index, 1);
    
//   },
// }




// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
// books.indexOf(oldName) = newName;

// return this.books
//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Duneeeeee"))

// // Change code below this line
// function add(...args) {
//   let total = 0
//   for (const number of args) {
//     return total += number
//   }
//   // Change code above this line
// }
// console.log(add(74, 11, 62, 46, 12, 36,))

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
// for (const product of products) {
//   if (productName === product.name) {
//     return product.price * product.quantity
//   }
// }

// return 0
//   // Change code above this line
// }


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const propArguments = [];
//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//  propArguments.push(product[propName]);
//     }
//   }
  
//   return propArguments;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"))


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   for (const key of salaries) {
//     totalSalary += salaries[kay]
//   }
//   // Change code above this line
//   return totalSalary;
// }

// // КРАСИВО
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (let product of products) {
//   if (productName === product.name) {
//     return product.price
//   }
// }

// return null;
//   // Change code above this line
// }
// console.log(getProductPrice("Droid"))
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// function filterArray(numbers) {
//    // Change code below this line
// for (let i = 0; numbers.length > i; i += 1) {
//   if (numbers[i] > 2) {
//     const gArray = [i]
//     console.log(i)
//   }
// }
//   // Change code above this line
// }


// console.log(filterArray([ 1, 2, 1, 4, 5, 6, 7, 8, 8]))



// function filterArray(numbers, value) {
//    // Change code below this line
// const newArray = []
// for (let i = 0; numbers.length > i; i += 1) {
//   if (numbers[i]> value) {
//     newArray.push(numbers[i])
//     console.log(i)
//   }
// }
//   return newArray
//   // Change code above this line
// }


// console.log(filterArray([ 1, 2, 1, 4, 5], 3))



// function getExtremeElements(array) {
//   // Change code below this line
// const firstElement = array[0];
//   const lastElementIndex = array.length -1;
//   const lastElement = array[lastElementIndex];
//   const arrayDone = [firstElement, lastElement];
// return arrayDone
//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]))