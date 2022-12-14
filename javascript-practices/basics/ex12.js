/**
 * Array 확장 (prototype 기반의 확장)
 * List 함수 사용하기
 */

Array.prototype.remove = function(index) {
    this.splice(index, 1);
}

Array.prototype.insert = function(index, value) {
    if(value instanceof Array) {
        // for (let i = 0; i < value.length; i++){
        //     this.splice(index+i, 0, value[i]);
        // }
        
        // 오류!!
        // 콜백 함수 안의 this는 어휘상의 this와 일치하지 않는다.
        // value.forEach(function(e){
        //     console.log("this:" + this);
        //     this.splice(index++, 0, e);
        // });

        // 해결 방법 1
        // var _this = this;
        // value.forEach(function(e){
        //     console.log("this:" + _this);
        //     _this.splice(index++, 0, e);
        // });

        // 해결 방법 2
        // Function.prototype.bind() 함수를 사용
        // 함수 실행 블록 안의 this를 세팅할 수 있다
        value.forEach(function(e){
            this.splice(index++, 0, e); // <= 여기서 this는 아랫줄에서 바인딩 된 this
        }.bind(this)); // <== this는 array
        // 같은 구조임
        // f = function(){
        // }
        // f.bind();
        
    } else {
        this.splice(index, 0, value);
    }
}

// List 함수 사용하기
var a = [1, 2, 4];
console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(2);
console.log(a);

a.insert(2, ['a', 'b', 'c']);
console.log(a);