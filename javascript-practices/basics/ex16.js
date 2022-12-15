/**
 * 함수: function 타입의 객체
 */

// 함수 생성 1: 함수 리터럴
console.log("==함수 생성 1====================")

function f1(a, b) {
    return a+b;
}

console.log(typeof(f1), f1 instanceof Function, f1(10, 20));

// 함수 생성 2: 함수 리터럴 (추천***)
console.log("==함수 생성 2====================")
var f2 = function f1(a, b) {
    return a+b;
}

console.log(typeof(f2), f2 instanceof Function, f2(10, 20));

// 함수 생성 3: new 연산자와 함께 Function 내장객체(생성자 함수)를 사용하는 방법
console.log("==함수 생성 3====================")
var f3 = new Function("a", "b", "return a+b;")
console.log(typeof(f3), f3 instanceof Function, f3(10, 20));

// 함수 생성 4: 익명(anonymous)함수 : callback
console.log("==익명함수 callback====================")

setTimeout(function() {
    console.log('time out!');
}, 1000);

var f4 = function(p) {
    p();
}

var myf = function() {
    console.log("!!!");
}
f4(myf);

// 위와 동일
f4(function() {             // 이때 function은 익명함수
    console.log("!!!");
})

// 함수 생성 4: 익명(anonymous)함수 : 한번만/즉시 실행하는 함수
console.log("==익명함수 다른 예====================")

var s = (function (a, b) {  // m은 이 함수가 실행되고 사라짐
    var m = 10;
    return a/m + b/m;
})(10, 20);
console.log(s);

var m = 10;                 // 익명함수 사용 안할 경우 m은 계속 남아있음(전역변수)
var s = 10/m+20/m;
console.log(s);

// 가변 파라미터

// 1.자바스크립트의 함수는 기본적으로 가변 파라미터를 지원
//  파라미터는 고정되어있지 않음
//  함수 실행코드 작성시 함수 생성때 작성된 파라미터와 달라도 오류가 나지 않음
var f4 = function(a, b, c) {
    console.log(a, b, c);
}

f4(10, 20, 30, 40, 50, 60);
f4(10);

// 2.
console.log("==가변 파라미터 함수 sum====================")
var sum = function() {
    var s = 0;

    console.log(arguments instanceof Object, arguments instanceof Array, arguments.length)
    // Error
    // arguments 유사배열임. 배열 아님!
    // argumentsdml __proto__는 Object prototype에 chain이 되어있기때문에 (forEach 없다) 오류
    // arguments.forEach(function(e) {
    //     s += e;
    // })
    Array.prototype.forEach.call(arguments, function(e){ // .call ex17 예제 참고
        s += e;
    })

    // for(let i = 0; i <arguments.length; i++){    // react에선 안됨 다른 곳에서도 현장에선 잘 안쓰임
    //     s += arguments[i];
    // }

    return s;
}

console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6));
