let num = 1;

// 일정한 간격별로 작업을 수행하고 싶을 때, 1초 단위로 num이 증가한다.
const interval = setInterval(() => {
    console.log(num++);
}, 1000);

setTimeout(() => {
    console.log('Timeout!');
    clearInterval(interval); // interval을 멈춘다.
}, 6000);