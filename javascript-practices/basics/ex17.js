/**
 * Function.prototype.apply
 * Function.prototype.call
 * Function.prototype.bind
 * 
 */

var myObject = {
    v: "kickscar",
    f: function(){
        console.log(this.v);
    },
    f1: function(param1, param2){
        console.log(param1 + " " + this.v + " " + (param2 ? param2 : ""));
    }

}
myObject.f();

var yourObject = {
    v: "dooly"
}
myObject.f.apply(yourObject); // apply : this 바뀌고 바로 호출
// myObject.f1.apply(yourObject, "hello"); // apply : this 바뀌고 바로 호출 파라미터를 넣을 수 없음
myObject.f1.call(yourObject, "Hi"); // call : this 바뀌고 바로 호출 파라미터를 넣을 수 있음
myObject.f1.call(yourObject, "Hi", "again");

var f2 = function(){
    console.log(this.v);
}.bind(yourObject); // bind : this 바뀌고 대기 (호출이 따로 될때까지)
f2();