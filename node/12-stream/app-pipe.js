const fs = require('fs');
const zlib = require('zlib'); // node.js에서 제공하는 압축 할 수 있는 모듈

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip(); // 압축하는 스트림
const writeStream = fs.createWriteStream('./file4.zip');

// readStream의 데이터를 읽으면서 압축하는 스트림과 piping해서 연결하고, writeStream으로 연결한다.
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish', () => {
    console.log('done!');
});

const http = require('http');

// Stream을 이용해서 Stream 자체를 response에 piping해서 연결해주면 좋다.
const server = http.createServer((req, res) => {
    const stream = fs.createReadStream('./file.txt');
    stream.pipe(res);
});
server.listen(3000);