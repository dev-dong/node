let count = 0; // private

function increase() {
    count++;
}

function getCount() {
    return count;
}

// counter.js에서 getCount, increase 함수를 외부에서 사용할 수 있도록 exports
module.exports.getCount = getCount;
// module.exports.increase = increase;
console.log(module.exports === exports); // true

// exports는 Module exports를 참고하는 참조값을 가지고 있는 아이이다. 참조값을 이용해서 increase를 등록할 수 있다.
// exports = {}; // exports에 다른 객체를 할당하면, 다른 객체를 참조하게 된다.
console.log(module.exports === exports); // false
exports.increase = increase; // module 생략 가능 (exports는 module.exports를 참조하고 있기 때문에)
console.log(module);