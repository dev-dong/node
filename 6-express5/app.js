import express from 'express';
import fsAsync from 'fs/promises';

const app = express();

// promise에서 catch를 하지 않을때 마지막에 안전망을 추가할 수 있는 방법, express 5
// express에게 promise를 return 할껀데 안에서 promise를 return 하던지 아니면 async 키워드를 사용해서 promise를 return 되도록 나타내면된다. -> express에서 자동으로 에러가 발생하면 에러를 던져주면서 최종적으로 등록한 미들웨어에 들어간다.
// promise를 return 해도, 비동기적인 함수다 나타낼때 async 키워드를 붙인다.
// 최고의 case는 미들웨어에서 에러를 적절히 처리하는게 좋다.
app.get('/file2', async (req, res) => {
    return fsAsync
        .readFile('/file2.txt')
        .then(data => res.send(data));
});

app.get('/file3', async (req, res) => {
    const data = await fsAsync.readFile('/file2.txt'); // 파일 다 읽었때까지 기다렸다가 데이터를 전달
    res.sendStatus(404);
});

//github.com/expressjs/express/issues/2259#issuecomment-433586394
//github.com/blakeembrey/async-middleware

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({message: 'Something went wrong'});
});

app.listen(8080);
