// let map = new Map;

// let arr = [1,2,3];
// let arr1 = [4,5,6];
// let arr2 = [7,8,9];

// map.set(arr,'data');
// map.set(arr1,'data1');
// map.set(arr2,'data2');

// console.log(map.get(arr),map.get(arr1),map.get(arr2) );

// let arr = [1,2,3];
// let arr1 = [4,5,6];
// let arr2 = [7,8,9];

// let obj = {'data':arr};
// let obj1 = {'data1':arr1};
// let obj2 = {'data2':arr2};

// map.set(obj,arr);
// map.set(obj1,arr1);
// map.set(obj2,arr2);

// console.log(map.get(obj),map.get(obj1),map.get(obj2) );

// map.set("адин", "первый элемент");
// map.set("два", "второй элемент");
// map.set(3, "тритий элимент");

// for (let [key, value] of map) {
//     console.log(key + " = " + value);
// }

// let inputs = document.querySelectorAll('input');
// let inputMap = new Map();

// inputs.forEach((input, index) => {
//     inputMap.set(input, index);

//     input.addEventListener('click', function() {
//         input.value = index;
//     });
// });

// const numbers = [];

// document.querySelectorAll('input').forEach(input => {
//     input.addEventListener('keypress', function(event) {
//         if (event.key === 'Enter') {
//             const number = parseFloat(input.value);
//             if (number) {
//                 numbers.push(number);
//                 input.value = '';
//             }
//         }
//     });

//     input.addEventListener('blur', function() {
//         console.log(numbers);
//     });
// });


// let set = new Set;

// set.add(1);
// set.add(2);
// set.add(3);
// let arr = [1, 2, 3, 1, 3, 4];
// let set = new Set(arr); 
// console.log(set);

// let set = new Set([1,2,3]);
// set.add(2);
// console.log(set.size);
// console.log(set.has(3));
// console.log(set.has(4));

// let set = new Set;

// set.add(1);
// set.add(2);
// set.add(3);
// let sum = 0;
// for (let elem of set) {
//     sum += elem;
// }
// console.log(sum);

// let set = new Set([1, 2, 3]);
// let arr = [...set];
// let arr = Array.from(set);

// let arr = [1, 2, 3];
// let set = new Set(arr);

// const arr1 = [1,2,2,1,5,6]

// function miss(arr) {
//     let res = [...new Set(arr)]
//     console.log(res);
// };

// miss(arr1);
