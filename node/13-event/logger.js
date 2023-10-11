const EventEmitter = require('events');

// 듣고 있는 emitter와 외부에서 emit하는 emitter는 다르다. 그래서 이벤트가 발생하고 해당하는 이벤트를 듣기 위해서 동일한 EventEmitter 객체를 사용해야 한다.
// 스스로 EventEmitter가 되면 된다. Logger 자체는 emit 함수를 가지고 있다.
// EventEmitter는 한번 객체를 만들면 그 객체내에서 발생하는 이벤트에 한해서 들을 수(Listen) 있다.
// 여러가지 Emitter 객체를 만들면, 다른 Emitter에서 발생하는 이벤트는 다른 Emitter에서 들을 수 없다.
class Logger extends EventEmitter {
    log(callback) {
        this.emit('log', 'started...'); // log 이벤트를 발생시킨다.
        callback(); // callback 함수를 실행한다.
        this.emit('log', 'ended!'); // log 이벤트를 발생시킨다.
    }
}


module.exports.Logger = Logger; // Logger 객체를 외부에서 사용할 수 있도록 export 한다.