/*
자바스크립트 객체 4: prototype 기반의 상속과 오버라이딩: 자바스크립트 객체지향 프로그램
*/

var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
}

MyObject.prototype.school = 'bitacademy';
MyObject.prototype.course = 'Web Dev & AI';
MyObject.prototype.info = function() {
    console.log(this.name+":"+this.age+":"+this.school+":"+this.course);
}

// 객체 속성에서 먼저 호출하고 해당 값이 없을 경우 prototype으로 지정된 값을 가져온다. 최상위 객체까지... (프로토타입 체인)
// 모든 객체는 __proto__가 존재함

// MyObject 객체생성
var o1 = new MyObject('마이콜', 30);
o1.info();

// MyObject 객체생성2
var o2 = new MyObject('둘리', 10);
o2.info = function() {
    console.log('비밀!')
}

o2.info()