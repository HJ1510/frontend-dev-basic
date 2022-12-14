/*
string primitive type과 String 객체 함수(String.prototype.*)
*/

// 배열처럼 접근이 가능하다
var str1 = "Hello World";
for (let i = 0; i<str1.length; i++){
    console.log(str1[i]);
}

// 문자열 합치기
var str2 = "hello";
var str3 = "world";
var str4 = str2 + " " + str3;
console.log(str4);

// 캐스팅
var str5 = 5 + "5";
console.log(str5);

var str6 = "boolean" + true ;
console.log(str6);

// 객체 함수
var str7 = "string1 string2 string3";

var index = str7.indexOf("string2"); // 8
console.log(index);

var index = str7.indexOf("string4"); // 찾으려는 값이 없을때 -1
console.log(index);

var str8 = str7.substring(10, 13/* last index -1 */);
console.log(str8);

var a = str7.split(" ");
console.log(a);

var str9 = "abcdef";
var a = str9.split(":"); // split 할게 없으면 자르지 않고 통째로 반환
console.log(a);
