const http = require('http');

const courses = [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'JS'},
    {name: 'Node'}
];

const server = http.createServer((req, res) => {
    const url = req.url; // what?
    const method = req.method; // how?, action?
    if (url === '/courses') {
        if (method === 'GET') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(courses));
        } else if (method === 'POST') {
            const body = [];
            req.on('data', chunk => {
                console.log(chunk);
                body.push(chunk);
                console.log('body', body);
            });

            req.on('end', () => {
                const course = JSON.parse(Buffer.concat(body).toString());
                courses.push(course);
                console.log(course);
                res.writeHead(201);
                res.end();
            });
        }
    }
});

server.listen(8080); // 8080 포트로 서버를 열어준다.