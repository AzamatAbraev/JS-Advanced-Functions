// ----- hof1 ----- //

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// students.map((el) => {
//   if (el.percent >= 85) {
//     return el.grade = 5;
//   } else if (el.percent >= 70) {
//     return el.grade = 4;
//   } else if (el.percent >= 60) {
//     return el.grade = 3;
//   } else {
//     return el.grade = "unsatisfactory"
//   }
// })

// let getStudentsWithGrade = (grade) => {
//   let filteredStudents = students.filter((student) => {
//     if (student.grade === grade) {
//       return student.name;
//     }
//   });
//   return filteredStudents;
// };

// let filteredStudents = getStudentsWithGrade(3);

// console.log(filteredStudents);

// ----- HOF2 ----- //

// let animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// let repeatedValues = animals.reduce((acc, el) => {
//   if (acc[el]) {
//     acc[el]++;
//   } else {
//     acc[el] = 1
//   }
//   return acc;
// }, {})

// console.log(repeatedValues);

// ----- HOF3 ----- //

// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.map((el) => {
//   return el ** 2;
// })

// console.log(newArr);

// ----- HOF4 ----- //

// let arr = [1, -4, 12, 0, -3, 29, -150];

// let integers = arr.filter((el) => el > 0)

// let integersSum = integers.reduce((acc, el) => acc += el, 0)

// console.log(integers);
// console.log(integersSum);

// ----- HOF5 ----- //

// let str = "George Raymond Richard Martin";

// let arr = str.split(" ");
// let firstLetters = arr.map((el) => {
//   return el[0];
// })

// let newStr = firstLetters.join("");
// console.log(`'${newStr}'`);

// ----- HOF6 ----- //

// let arr = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// arr.sort((a, b) => {
//   return a.age - b.age;
// })

// let dff;

// for (let i in arr) {
//   let max = arr[arr.length - 1].age;
//   let min = arr[0].age;
//   dff = max - min;
// }

// console.log(arr);
// console.log("Max va Min yoshlar orasidagi farq =", dff);

// ----- HOF7 ----- //

// let arr = [4, 5, 6, 19, 3, 21, 5, 2, 1, 14];

// let oddArr = arr.filter((el) => el % 2)
// let evenArr = arr.filter((el) => !(el % 2))

// console.log("Toq Sonlar =", oddArr);
// console.log("Just Sonlar =", evenArr);

// ----- HOF8 ----- //

// let arr = [4, 5, 6, 19, 5, 12, 5, 2, 4, 14];

// let delRepetition = arr.reduce((acc, el) => {
//   if (!(acc[el])) {
//     acc[el] = 1;
//   }
//   return acc;
// }, {})

// console.log(delRepetition);

// ----- HOF9 ----- //

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let sortById = products.sort((a, b) => a.id - b.id);
// console.log(sortById);

// let sortByPrice = products.sort((a, b) => a.price - b.price);
// console.log(sortByPrice);

// let sortByName = products.sort();
// console.log(sortByName);

// let sortByRating = products.sort((a, b) => a.rating - b.rating);
// console.log(sortByRating);

// let sortByDiscount = products.sort((a, b) => a.discount - b.discount);
// console.log(sortByDiscount);

// ----- HOF10 ----- //

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let sortByRating = products.sort((a, b) => b.rating - a.rating)
// console.log("Eng zo'r rating ga ega mahsulot :", sortByRating[0].name);

// ----- HOF11 ----- //

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let cheapestProduct = products.sort((a, b) => a.price - b.price );
// console.log("Eng arzon mahsulot:", cheapestProduct[0].name);

// ----- HOF12 ----- //

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let sumPrice = products.reduce((acc, el) => {
//   return acc += el.price;
// }, 0)

// console.log("Mahsulotlar narxlari yig'indisi:", sumPrice);

// ----- HOF13 ----- //

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let productNames = products.map((el) => el.name);

// console.log(productNames);

// ----- HOF14 ----- //

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let getById = products.find((el) => el.id == 5);
// console.log(getById.name);

//----- HOF15 ----- //

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let deleteById = products.filter((el) => el.id !== 4)
// console.log(deleteById);

//----- HOF16 ----- //

// let str = "Whatever happens happens. This is written on";

// let arr = str.split("");

//----- HOF17 ----- //

// let arr = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];

// let obj = {};

// let checkTruthy = arr.filter((el) => el)
// let checkFalsy = arr.filter((el) => !el);

// obj.truthy = checkTruthy;
// obj.falsy = checkFalsy;

// console.log(obj);

//----- HOF18 ----- //

// let str = "Men Azamat Programmerman";

// let arr = str.split(" ")

// let getLength = arr.map((el) => el.length)

// console.log(getLength);

//----- HOF19 ----- //

// let str = "Men Azamat Programmerman";

// let arr = str.split("");
// console.log(arr);

// let check = arr.some((el) => el === " ")
// console.log(check);

//----- HOF20 ----- //

// let obj = { a: 2, b: 5, c: 7 };

// let arr = Object.entries(obj);

// let joinElements = arr.map((el) => {
//   let res = el.join("")
//   return res;
// })

// console.log(joinElements);

//----- HOF21 ----- //

// function digitSum(n) {
//   let str = String(n);
//   let sum = 0;
//   for (let el of str) {
//     sum += +el;
//   }

//   if (n == sum) {
//     return sum;
//   }
//   console.log("Raqamlar yig'indisi:", sum);
//   return digitSum(sum);
// }

// digitSum(24596)

//----- HOF22 ----- //

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let arr = pupils.reduce((acc, el) => {
//   return acc += el.protcent;
// }, 0)

// let averagePercent = (arr / pupils.length).toFixed(2);
// console.log(averagePercent);

// let addElements = pupils.map((el) => {
//   return el.averagePercent = +averagePercent;
// })

// console.log(pupils);

//----- HOF23 ----- //

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let arr = pupils.map((el) => {
//   if (el.protcent >= 90) {
//     return (el.grade = 5);
//   } else if (el.protcent >= 80) {
//     return (el.grade = 4);
//   } else if (el.protcent >= 70) {
//     return (el.grade = 3);
//   } else {
//     return (el.grade = 2);
//   }
// })

// console.log(pupils);

//----- HOF24 ----- //

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let arr = pupils.map((el) => {
//   if (el.protcent >= 70) {
//     return el.IsPassed = true;
//   } else {
//     return (el.IsPassed = false);
//   }
// })

// console.log(pupils);

//----- HOF25 ----- //

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let arr = pupils.reduce((acc, el) => {
//   if (el.protcent >= 70) {
//     return acc++;
//   }
// }, 0)

// console.log(arr);
