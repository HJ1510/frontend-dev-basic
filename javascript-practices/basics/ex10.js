/*
배열(Array)
*/

console.log("==배열 생성1: 내장객체(생성자 함수) 사용==========================")
var a1 = new Array();
console.log(typeof(a1), a1 instanceof(Array), a1.length);

// 생성자 함수의 파라미터가 하나인 경우, 파라미터는 배열의 크기
var a2 = new Array(10);
console.log(typeof(a2), a2 instanceof(Array), a2.length);

// 배열의 크기 지정은 별 의미가 없음: 동적으로 배열은 늘어난다.
a2[0] = 0;
a2[5] = 5;
a2[10] = 10;
console.log(a2, a2.length);

// 배열 요소에 값이나 객체를 대입하지 않으면 undefined 에러 아님
console.log(a2[1], a2[6]); 

// 생성자 함수의 파라미터가 둘 이상인 경우, 파라미터는 초기값
var a3 = new Array(0, 2, 4, 6, 8);
console.log(a3);

console.log("==배열 생성2: 리터럴 사용========================================")
var a4 = [];
console.log(typeof(a4), a4 instanceof(Array), a4.length);

// 배열 요소의 타입은 동일하지 않아도 된다       cf.자바의 배열: 배열 요소의 타입이 같아야 함
var a5 = [10, 'JavaScript', true, undefined, {
    name: '둘리',
    age: 10
}, function() {
    console.log('Hello World');
}];

// 순회
console.log("==배열의 순회=====================")
for(let i =0; i< a5.length; i++) {
    console.log(a5[i]);
}

a5[5]();

console.log("==Array vs Object=================")
a6 = [];
a6[0] = 0;
a6['1'] = 1;
a6.name = '둘리';
a6['age'] = 10;
console.log(a6['0'], a6[1], a6['name'], a6.age, "lenght:" + a6.length);
for(prop in a6) {
    console.log(prop, a6[prop]);
}

o6 = {}; // 유사배열 length 속성 관리를 따로 해야하고 Array 기본 prototype 사용 안됨(사용할 수 있는 메소드 차이 있음..)
o6[0] = 0;
o6['1'] = 1;
o6.name = '둘리';
o6['age'] = 10;
console.log(o6['0'], o6[1], o6['name'], o6.age, "lenght:" + o6.length);
for(prop in o6) {
    console.log(prop, o6[prop]);
}

o7 = {};
o7[0] = 0;
o7.length = 1;
console.log(o7.length);