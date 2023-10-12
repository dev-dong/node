const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const name = 'Ellie';
const courses = [{name: 'HTML'}, {name: 'CSS'}, {name: 'JS'}, {name: 'Node'}];
const server = http.createServer((req, res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        console.log('incoming...');
        ejs.renderFile('./template/index.ejs', {name: name}) // key와 value의 이름이 같다면 생략가능
            .then(data => res.end(data)); // end를 하면서 원하는 data를 전달할 수 있다.
    } else if (url === '/courses') {
        ejs.renderFile('./template/courses.ejs', {courses}) // key와 value의 이름이 같다면 생략가능
            .then(data => res.end(data));
    } else {
        ejs.renderFile('./template/not-found.ejs', {name})
            .then(data => res.end(data));
    }

    res.end();
});

server.listen(8080); // 8080 포트로 서버를 열어준다.