/*
변수와 자료형(DataType)

[기본타입(Premitive Type)]
- number
- string
- boolean
- undefined

[객체]
- object
    1. new  생성자 함수() 사용해서 생성
        Number() => object 타입 객체
        String() => object 타입 객체
        Boolean() => object 타입 객체
        Object() => object 타입 객체
        Array() => object 타입 객체
        Date() => object 타입 객체
        RegExp() => object 타입 객체
        Function() => function 타입의 객체*****

    2. {} 객체 리터럴을 사용해서 생성 JavaScript Object Notation (JSON)
    3. [] 배열 리터럴을 사용해서 생성
    4. null

- function
    1. function f() {...}
    2. var f = function() {...}
    3. var f = new Function(...)
*/

/**
자바스크립트 객체를 분류하는 또 다른 방법
1. 내장 객체 : javaScript Engine에 내장 되어있는 객체
	-Number, String, Boolean, Object ... : 생성자 함수
	-parseInt, setTimeout, setInterval ... : 일반 함수
2. 호스트 객체 : javaScript Engine embeded되어있는 환경(Engine 외부)에 있는 객체
	-1) browser가 호스트인 경우 : screen, localtion*, navigator*, DOM***, XmlHttpRequest*** ...
	-2) Node가 호스트인 경우 : http, os, fs, path process ...
3. 사용자 객체 : javaScript Engine이 (사용자가 작성한 코드)실행 되면서 생성되는 객체
 */
console.log("==기본타입=======================================");

var i = 10;
var s = "Hello World";
var b = true;
var u = undefined; // var u; 동일함. 변수의 선언과 변수의 정의 구분이 없다.

console.log(i + " : " + typeof(i));
console.log(s + " : " + typeof(s));
console.log(b + " : " + typeof(b));
console.log(u + " : " + typeof(u));


console.log("==객체타입(object)===============================");
var i2 = new Number(10);
var s2 = new String("Hello World");
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();
var o2 = {};
var a2 = [10, 20, 30];
var n = null;

console.log(i2 + " : " + typeof(i2));
console.log(s2 + " : " + typeof(s2));
console.log(b2 + " : " + typeof(b2));
console.log(o + " : " + typeof(o));
console.log(a + " : " + typeof(a) + " : " + (a instanceof(Array))); // instanceof 생성자 함수 확인
console.log(d + " : " + typeof(d));
console.log(o2 + " : " + typeof(o2));
console.log(a2 + " : " + typeof(a2) + " : " + (a2 instanceof(Array)));
console.log(n + " : " + typeof(n) + " : " + (a instanceof(Object)));

console.log("==객체타입(function)=============================");

function f1(a, b) {
    return a + b;
}

var f2 = function(a, b) {   // 추천
    return a + b;
}

var f3 = new Function("a", "b", "return a + b;");

console.log(f1(10,20), f2(10,20), f3(10,20))

console.log("f1 : " + typeof(f1) + " : " + (f1 instanceof(Function)));
console.log("f2 : " + typeof(f2) + " : " + (f2 instanceof(Function)));
console.log("f3 : " + typeof(f3) + " : " + (f3 instanceof(Function)));

// 원시타입에 메소드가 호출될 때
// 임시 Wrapper 객체가 만들어져서 메소드 호출이 일어난 뒤 사라진다 : 유사객체
console.log("==원시 타입도 메소드 호출이 가능하다================")
console.log(b.valueOf()); // new Boolean(b).valueof()
console.log(b2.valueOf());