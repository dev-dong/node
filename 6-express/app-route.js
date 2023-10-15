import express from 'express';

const app = express();

app.use(express.json());

// HTTP Method가 반복되는 느낌을 줄이기 위해 app.route()를 사용할 수 있다.
app.route('/posts')
    .get((req, res, next) => {
        res.status(201).send('GET: /posts');
    }).post((req, res) => {
        res.status(201).send('POST: /posts');
    }
);

app.route('/posts/:id')
    .get((req, res, next) => {
        res.status(201).send('GET: /posts');
    }).post((req, res) => {
        res.status(201).send('POST: /posts');
    }
);

// app.get('/posts', (req, res) => {
//     res.status(201).send('GET: /posts');
// });

// app.post('/posts', (req, res) => {
//     res.status(201).send('POST: /posts');
// });

// app.put('/posts/:id', (req, res) => {
//     res.status(201).send('PUT: /posts/:id');
// });

// app.delete('/posts/:id', (req, res) => {
//     res.status(201).send('DELETE: /posts/:id');
// });

app.listen(8080);
