const EventEmitter = require('events');
const emitter = new EventEmitter();
const callback1 = (args) => {
    console.log('first callback - ', args);
};

// ellie라는 이벤트가 발생하면, 어떤 일들을 할 것인지 정의할 수 있다.
// EventEmitter를 만들어서, 이벤트에 관심있는 callback 함수를 등록해놓고 특정한 이벤트를 발생할 수 있다.
// 이벤트 이름과 전달하고자 하는 데이터를 명시해주면 callback 함수에서 데이터를 접근할 수 있다.
emitter.on('ellie', callback1);

emitter.on('ellie', (args) => {
    console.log('second callback - ', args);
});

// 이벤트 발생
emitter.emit('ellie', {message: 1});
emitter.emit('ellie', {message: 2});
emitter.removeListener('ellie', callback1); // ellie 이벤트에 등록된 callback1 함수를 제거한다.
emitter.emit('ellie', {message: 3});