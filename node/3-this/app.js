function hello() {
    console.log(this);
    console.log(this === global);
}

hello();

class A {
    constructor(num) {
        this.num = num;
    }

    memberFunction() {
        console.log('-----class-----');
        console.log(this); // class 안에 있는 this는 class 자체를 가리킨다.
        console.log(this === global); // false
    }
}

const a = new A(1);
a.memberFunction();

console.log('-----global scope-----');
console.log(this);
console.log(this === module.exports); // Node.js의 this는 module.exports를 가리킨다.
