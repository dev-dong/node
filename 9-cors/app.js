import express from 'express';
import cors from 'cors';

const app = express();

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
//     next();
// });

// npm i cors를 설치하면 위 코드처럼하지 않아도 된다.
app.use(
    cors({ // 추가하면 Access-Control-Allow-Origin: *가 자동으로 추가된다.
        origin: ['http://127.0.0.1:5500'], // 허용할 도메인
        optionsSuccessStatus: 200, // 응답 상태 200으로 설정
        credentials: true, // Access-Control-Allow-Credentials: true가 자동으로 추가된다.
    })
);

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.listen(8080);
