import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan'; // 우리가 사용자에게 요청을 받을 때 마다 어떤 요청을 받았는지 얼마나 걸렸는지 유용한 정보를 로그로 남긴다.
import helmet from 'helmet'; // 공통적으로 보안에 필요한 Header들을 추가해준다.

// http://expressjs.com/en/resources/middleware/morgan.html
const app = express();

// request의 body부분을 보기 위해서 app.use(express.json)을 사용해서 body 부분을 볼 수 있다.
// console.log(req.body)

// cookie-parser
// morgan
// cors
// helmet

// cookie-parser
// key: Cookie
// value: yummy_cookie=choco; tasty_cookie=strawberry

const corsOptions = {
    origin: ['http://localhost:3000'], // 이 주소에 한해서는 내 서버의 데이터를 보여줘도 돼 (Allow)
    optionsSuccessStatus: 200, // for options request
    credentials: true, // Access-Control-Allow-Credentials: true
};

// 미들웨어이기 때문에 app.use(미들웨어)
app.use(morgan('combined')); // http://expressjs.com/en/resources/middleware/morgan.html
app.use(cors(corsOptions));
app.use(helmet()); // https://github.com/helmetjs/helmet

// Cookie를 보러면 Cookie parser를 설치해야한다.
app.use(cookieParser()); // http://expressjs.com/en/resources/middleware/cookie-parser.html
app.get('/', (req, res) => {
    console.log(req.cookies); // it will be undefined without cookie-parser
    console.log(req.cookies.yummy_cookie); // cookie의 value의 값 출력
    res.send('Welcome!');
});

app.listen(8080);
