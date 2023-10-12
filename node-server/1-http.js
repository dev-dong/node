const http = require('http');
const fs = require('fs');
// const http2 = require('http2'); // https, 배포할 때 http2로 변경

const server = http.createServer((req, res) => {
    console.log('incoming...');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        const read = fs.createReadStream('./html/index.ejs');
        read.pipe(res);
    } else if (url === '/courses') {
        res.setHeader('Content-Type', 'text/html');
        const read = fs.createReadStream('./html/courses.ejs');
        read.pipe(res);
    } else {
        res.setHeader('Content-Type', 'text/html');
        const read = fs.createReadStream('./html/not-found.ejs');
        read.pipe(res);
    }

    res.end();
});

server.listen(8080); // 8080 포트로 서버를 열어준다.