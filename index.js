/*
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log(car.brand);  // "Toyota"
console.log(car.model);  // "Corolla"
console.log(car.year);   // 2020  */


/*
let person = {};

person.firstName = "Alice"; // Add property firstName
person.lastName = "Smith";  // Add property lastName
person.age = 25;            // Add property age

delete person.age;          // Delete age property

console.log(person);        // { firstName: "Alice", lastName: "Smith" } */

/*
let book = {
  title: "1984",
  author: "George Orwell"
};

function hasProperty(obj, key) {
  return key in obj;
}

console.log(hasProperty(book, "title"));   // true
console.log(hasProperty(book, "year"));    // false */

/*
let student = {
  name: "John",
  age: 21,
  grade: "A"
};

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
} */

/*5

function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
}

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

console.log(countProperties(user));  // 3  */

/*6
let calculator = {
  num1: 10,
  num2: 5,
  add() {
    return this.num1 + this.num2;
  },
  subtract() {
    return this.num1 - this.num2;
  }
};

console.log(calculator.add());       // 15
console.log(calculator.subtract());  // 5  */

/*7
let User = {
  name: "Sam",
  age: 28
};

function cloneObject(obj) {
  let clone = {};
  for (let key in obj) {
    clone[key] = obj[key];
  }
  return clone;
}

let userClone = cloneObject(user);
console.log(userClone);  // { name: "Sam", age: 28 }  */

/*8

let userInfo1 = {
  name: "Jane",
  age: 22
};

let userInfo2 = {
  age: 23,
  city: "New York"
};

let mergedUser = Object.assign({}, userInfo1, userInfo2);

console.log(mergedUser);  // { name: "Jane", age: 23, city: "New York" }  */

/*9
function createUser(name, age, role = "user") {
  return {
    name: name,
    age: age,
    role: role
  };
}

let newUser = createUser("Tom", 30);
console.log(newUser);  // { name: "Tom", age: 30, role: "user" } */

/*10
let company = {
  name: "Tech Corp",
  employees: [
    { name: "Alice", position: "Developer" },
    { name: "Bob", position: "Designer" }
  ]
};

console.log(company.employees[0].name);   // "Alice"
console.log(company.employees[1].position);  // "Designer" */

/*11

let fruitPrices = {
  apple: 2,
  banana: 1,
  cherry: 3
};

function getKeys(obj) {
  return Object.keys(obj);
}

function getValues(obj) {
  return Object.values(obj);
}

console.log(getKeys(fruitPrices));   // ["apple", "banana", "cherry"]
console.log(getValues(fruitPrices)); // [2, 1, 3] */

/*12
let salaries = {
  John: 200,
  Ann: 150,
  Pete: 300
};

function sortSalaries(obj) {
  return Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
}

console.log(sortSalaries(salaries));  // ["Ann", "John", "Pete"] */

/*13
let Users = {
  name: "Emily",
  age : 25,
  city : "London"
};

let { name, age, city } = user;

console.log(name);  // "Emily"
console.log(age);   // 25
console.log(city);  // "London" */


/*14
let person = {
  name: "James",
  age: 32,
  address: {
    street: "Main St",
    city: "New York",
    zipCode: 10001
  }
};

let { address: { street, citys, zipCode } } = person;

console.log(street);  // "Main St"
console.log(city);    // "New York"
console.log(zipCode); // 10001   */

/*15
let user1 = { name: "Alice", age: 30 };
let user2 = { city: "Paris", country: "France" };

let mergedUsers = { ...user1, ...user2 };

console.log(mergedUsers);  // { name: "Alice", age: 30, city: "Paris", country: "France" }


//16
let settings = {
  theme: "dark",
  fontSize: "16px",
  language: "en"
};

Object.freeze(settings);

settings.theme = "light";  // This change will be ignored
console.log(settings);     // { theme: "dark", fontSize: "16px", language: "en" }  */

/*17

let scores = {
  math: 90,
  english: 80,
  science: 85
};

let scoreEntries = Object.entries(scores);
console.log(scoreEntries); // [["math", 90], ["english", 80], ["science", 85]]  */

/*18
let team = {
  player1: 5,
  player2: 10,
  player3: 7
};

function updateScore(obj, increment) {
  for (let key in obj) {
    obj[key] += increment;
  }
}

updateScore(team, 3);
console.log(team);  // { player1: 8, player2: 13, player3: 10 }  */

/*19
let rectangle = {
  width: 10,
  height: 5,
  area() {
    return this.width * this.height;
  }
};

console.log(rectangle.area());  // 50 */

//20
let products = {
  "laptop": 1000,
  "phone": 500,
  "tablet": 700
};

function findMaxPrice(obj) {
  let maxPrice = 0;
  let maxProduct = "";

  for (let key in obj) {
    if (obj[key] > maxPrice) {
      maxPrice = obj[key];
      maxProduct = key;
    }
  }

  return maxProduct;
}

console.log(findMaxPrice(products));  // "laptop"
