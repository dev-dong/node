import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
    // 1.
    // fs.readFile('/file1.txt', (err, data) => {
    //   if (err) {
    //     res.sendStatus(404);
    //   }
    // });

    // 2.
    try {
        const data = fs.readFileSync('/file1.txt');
    } catch (error) {
        res.sendStatus(404);
    }
});

app.get('/file2', (req, res) => {
    // 마지막에 에러 처리했는데 왜 여기서 catch로 따로 처리하나요?
    // promise는 비동기, 미들웨어가 끝나는 순간 promise가 아직 처리되지 않았다. callback 함수가 끝나고 나서 promise가 처리되고 catch가 되기 때문에 마지막에 처리할 수 있는 체이닝이 비동기적으로 되어있기 때문에 마지막에 에러처리가 되지 않는다.
    // promise를 사용할 때는 catch를 사용하는 것이 좋다.
    fsAsync
        .readFile('/file2.txt') //
        .catch((error) => {
            res.sendStatus(404);
        });
});

app.get('/file3', async (req, res) => {
    try {
        const data = await fsAsync.readFile('/file2.txt'); // 파일 다 읽었때까지 기다렸다가 데이터를 전달
    } catch {
        res.sendStatus(404);
    }
});

// 버전 5 이하에서는: npm i express-async-errors, require('express-async-errors');

// Express 5 부터는 이렇게
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({message: 'Something went wrong'});
});

app.listen(8080);