import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express();

app.use(express.json());

app.use('/posts', postRouter); // 제일 상위에 있는 root를 설정한 다음에 router를 연결하면 /posts로 들어오는 요청은 postRouter로 처리하겠다.
app.use('/users', userRouter); // /users로 들어오는 요청은 userRouter로 처리하겠다.

app.listen(8080);
