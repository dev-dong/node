console.log('code1');
console.time('timeout 0');

// 0초가 보장되지는 않는다. 실제로 callback 함수가 실행되기 위해서는 call stack이 비어있을때까지 기다렸다가 실행된다.
setTimeout(() => {
    console.timeEnd('timeout 0');
    console.log('setTimeout 0');
}, 0);

console.log('code2');
// setImmediate과 setTimeout는 비슷하다.
setImmediate(() => {
    console.log('setImmediate');
});

console.log('code3');
process.nextTick(() => {
    console.log('process.nextTick');
});