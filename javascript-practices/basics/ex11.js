/*
Array 객체 함수: Array.prototype.*
 */

var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'mango', 'banana'];

// concat
console.log("==concat====================")
var a1 = fruits.concat(colors);
console.log(a1);

// pop, push: stack 지원 함수
console.log("==stack 지원================");
var color = colors.pop();
console.log(color, colors);

colors.push('red');
console.log(colors);

// join
console.log("==join======================");
var str = fruits.join(":");
console.log(str);

// reverse
console.log("==reverse===================");
console.log(fruits);
fruits.reverse();
console.log(fruits);

// shift
console.log("==shift======================");
var numbers1 = [1000, 2000, 5, 500, 3444];
var number = numbers1.shift();
console.log(number, numbers1);

// slice
console.log("==slice======================");
var numbers2 = numbers1.slice(1, 3);
console.log(numbers1, numbers2);

// splice 1. index에서 count개를 삭제하고 삭제된 요소를 배열에 담아 반환
console.log("==splice(index, count)=========");
console.log(fruits);
var fruits2 = fruits.splice(0, 2);
console.log(fruits2, fruits);

// splice 2. index에서 count개를 삭제하고 replace 배열로 교체
console.log("==splice(index, count, replace)=");
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a2, a1);

// splice 3. removeAt() 처럼 작동
console.log("==removeAt()처럼 작동============");
var a1 = [0, 1, 2, 3, 4];
a1.splice(2, 1);  // a1.removeAt(2) 
console.log(a1);

// splice 4. insertAt() 처럼 작동
console.log("==insertAt()처럼 작동============");
var a1 = [0, 1, 2, 3, 4];
a1.splice(1, 0, 10); // a1.insertAt(1, 10) 
console.log(a1);

