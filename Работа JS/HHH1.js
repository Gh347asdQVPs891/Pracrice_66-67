// let sym1 = Symbol('da');
// let sym2 = Symbol('da1');
// let sym3 = Symbol('privet');

// let obj = {da:1, b:2, privet:3}

// let sym = Symbol();
// obj[sym] = 'text';

// for (let key in obj) {
// 	console.log(obj[key]);
// }

// let sym = Symbol;

// let obj = {
//     a: 12,
//     b: 23,
//     [sym]: () => console.log(new Date())
// }
// obj[sym]()

// const s = Symbol("sum");

// function objSum() {
//     let sum = 0;
//     for(let i in this){
//         sum += this[i]
//     }
//     return sum;
// }

// const obj1 = {
//     a:1,
//     [s]: objSum
// }
// const obj2 = {
//     a:2,
//     b:125,
//     [s]: objSum
// }

// console.log(obj1[s]());
// console.log(obj2[s]());

// let sym1 = Symbol.for('test1');
// let sym2 = Symbol.for('test2');

// console.log(Symbol.keyFor(sym1))
// console.log(Symbol.keyFor(sym2))

//1
// const m = new Map();
// console.log(m[Symbol.iterator])

//2 
// const s = new Set();
// console.log(s[Symbol.iterator]);

//1
// let json = '[1,2,3,4,5]';
// const arrSum = JSON.parse(json).reduce((sum, item) => sum+= item);

// console.log(arrSum);

//2
// let json = `{
// 	"data1": [1,2,3],
// 	"data2": [4,5,6],
// 	"data3": [7,8,9]
// }`;

// const obj = JSON.parse(json);
// let sum = 0;

// for (let i in obj) {
//     sum += obj[i].reduce((sum, item) => sum+= item);
// }
// console.log(sum);

//3
// let json = '["user1","user2","user3","user4","user5"]';

// const ul = document.createElement("ul");

// for (let i of JSON.parse(json)) {
//     const li = `<li>${i}</li>`;
//     ul.innerHTML += li;
// }

//4

// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;

// const table = document.createElement(table);

// for (let i in JSON.parse(json)) {
//     const tr = `
//         <tr>
//             <td>${i.name}</td>
//             <td>${i.age}</td>
//             <td>${i.salary}</td>
//         </tr>
//     `
// }
//1 
// let json = '["user1","user2","user3","user4","user5"]';

// const arr = JSON.parse(json);
// arr.push("user6");
// const newJson = JSON.parse(arr);


//2
// let json = '["user1","user2","user3","user4","user5"]';
// const arr = JSON.parse(json);
// arr[1] = 'user2New';
// const newJson = JSON.parse(arr);

//3
// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;
// const arr = JSON.parse(json);
// arr.push({name:"Oleg", age: 18, salary:5000})
// const newJson = JSON.parse(arr);