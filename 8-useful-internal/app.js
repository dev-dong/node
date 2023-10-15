import express from 'express';

const app = express();

// express.json -> REST API, body parse
app.use(express.json());

// express.urlencoded -> urlencoded는 동일하게 body를 자동으로 파싱, HTML Form이라는 UI 요소에서 sumit을 하면 request가 자동으로 발생하는데 그때 전달된 HTML에서 만든 데이터를 body 안으로 자동으로 파싱
app.use(express.urlencoded({extended: false}));

// express.static -> 정적인 파일을 서비스할 때 사용
app.use(express.static('public')); // public 안에 있는 리소스를 사용자가 읽어갈 수 있도록 해줌

// static을 사용할 때는 options를 사용할 수 있음
const options = {
    dotfiles: 'ignore',
    etag: false,
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    },
};
app.use(express.static('public', options));

app.post('/posts', (req, res) => {
    console.log(req.body);
    res.status(201).send('Thanks, Created');
});

app.listen(8080);
