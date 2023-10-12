const http = require('http');
// const http2 = require('http2'); // https, 배포할 때 http2로 변경

const server = http.createServer((req, res) => {
    console.log('incoming...');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    res.write('Welcome');
    res.end();
});

server.listen(8080); // 8080 포트로 서버를 열어준다.