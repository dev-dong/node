const fs = require('fs');

// stream은 이벤트 기반으로 동작한다.
const readStream = fs.createReadStream('./file.txt', {
    // highWaterMark: 8, // 버퍼 사이즈를 결정한다. 기본값은 64KB
    // encoding: 'utf-8',
});

const data = [];

// on은 이벤트 리스너를 등록하는 메서드이다.
// on을 이용해서 data가 오면, chunk를 출력한다.
readStream.on('data', (chunk) => {
    // console.log(chunk);
    data.push(chunk);
    console.count('data');
});

readStream.on('end', () => {
    console.log(data.join(''));
});

readStream.on('error', (error) => {
    console.log(error);
});

// 체이닝
fs.createReadStream('./file.txt', {})
    .once('data', (chunk) => { // 한번만 실행한다.
    }).on('end', () => {
}).on('error', (error) => {
});