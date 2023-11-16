//Comparing a object

// let obj = { name: "Siraj" };
// let obj2 = { name: "Siraj" };

// let arr = ["Sami", "Rohit", "Sami", "Virat", obj];
// let arr2 = ["Hardik", "Rohit", "Sami", "Kohli", obj2];

// const checkObj = (arr) => {
//   return arr.map((elem) => {
//     if (typeof elem == "object" || elem !== null) {
//       return JSON.stringify(elem);
//     }
//     return elem;
//   });
// };

// let newArr = [...checkObj(arr), ...checkObj(arr2)];

// console.log(new Set([...newArr]));

// Sorting array of objects

// let obj = [
//   {
//     name: "Rohit",
//   },
//   {
//     name: "Siraj",
//   },
//   {
//     name: "Virat",
//   },
//   {
//     name: "Ayer",
//   },
// ];

// let sorting = obj.sort((a, b) => {
//   if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//   else return -1;
// });

// console.log("sorting", sorting);

// let obj = {
//   name1: "Rohit",
//   name2: "Virat",
// };

// let objArr = Object.entries(obj);
// console.log("objArr", objArr);

// let start = [
//   {
//     id: 1,
//     status: "completed",
//     name: "The Lord of the Rings",
//   },
//   {
//     id: 2,
//     status: "in-progress",
//     name: "The Lord of the Flies",
//   },
//   {
//     id: 3,
//     status: "not-started",
//     name: "Dune",
//   },
//   {
//     id: 4,
//     status: "not-started",
//     name: "American Gods",
//   },
//   {
//     id: 5,
//     status: "completed",
//     name: "Enders Game",
//   },
//   {
//     id: 6,
//     status: "in-progress",
//     name: "Brave new world",
//   },
//   {
//     id: 7,
//     status: "completed",
//     name: "1984",
//   },
// ];

// let begin = start.reduce(
//   (acc, elem) => {
//     if (elem.status == "completed") {
//       acc[0].books = [...acc[0].books, { id: elem.id, name: elem.name }];
//       return acc;
//     } else if (elem.status == "in-progress") {
//       acc[1].books = [...acc[1].books, { id: elem.id, name: elem.name }];
//       return acc;
//     } else if (elem.status == "not-started")
//       acc[2].books = [...acc[2].books, { id: elem.id, name: elem.name }];
//     return acc;
//   },
//   [
//     { status: "completed", books: [] },
//     { status: "in-progress", books: [] },
//     { status: "not-started", books: [] },
//   ]
// );

// begin.map((elem) =>
//   elem.books.sort((a, b) => {
//     return a.name.toString().toLowerCase() > b.name.toString().toLowerCase()
//       ? 1
//       : -1;
//   })
// );
// console.log("begin", begin);

let obj = {
  a: 2,
  b: 3,
  c: 4,
};
let sum = 0;

for (i in obj) {
  if (obj[i] > 2) console.log(i);

  //   console.log("i", i);
  //   obj[i] = obj[i] * 2;
  //   sum = sum + obj[i]; //it gets updated value for adding
}
// console.log("obj", obj, sum);

// let valueSum = Object.values(obj).reduce((acc, elem) => (acc = acc + elem), 0);
// console.log("valueSum", valueSum);

//Object.freeze({})

// function show(val) {
//   ++val;
//   console.log("val", val); // 5
// }

// let val = 4;
// show(val);
// console.log("val2", val); // 4

// function show2(arr) {
//   arr.push(7); // array is an object so it mutates the value
//   console.log("val", arr);
// }

// let arr = [1, 2, 3];
// show2(arr);
// console.log("val2", arr);

// function show2(arr1, arr2) {
//   arr1 = arr2; //here array is not mutated, it is assigned a new value
//   console.log("arr1", arr1);
// }

// let arr1 = [1, 2, 3];
// let arr2 = [7, 8, 9];
// show2(arr1, arr2);
// console.log("val2", arr1);
// console.log(show2.name);
// console.log(show2.length);

// const getMaxChar = (str) => {
//   let strArr = str.split('')
//   let obj = {}
//   strArr.forEach((elem) => obj[elem] = obj[elem] ? obj[elem]+ 1 : 1)
// console.log(obj)
// let max = 0
// let char = ''
// for(let i in obj){
//   if(obj[i] > max){
//       max = obj[i]
//       char = i
//   }
// }
// console.log(char,max)
// }

// getMaxChar("Hello World")
