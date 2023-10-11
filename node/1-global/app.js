// global이 브라우저용인지 노드용인지 모르므로, 노드모듈을 import
const fs = require('fs');

console.log(global);

global.hello = () => {
    global.console.log('hello');
}

global.hello();
hello();