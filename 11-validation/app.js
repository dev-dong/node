import express from 'express';
import {body, param, validationResult} from "express-validator";

const app = express();
app.use(express.json());

// 중복되는 error 발생 부분을 처리하는 함수
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    return res.status(400).json({message: errors.array()});
};

// handler는 배열 형태로 여러가지를 등록할 수 있다.
// body()는 express-validator에서 제공하는 함수로, body에 대한 검증을 수행한다.
app.post('/users',
    [
        body('name').trim().isLength({min: 2}).withMessage('이름은 두 글자 이상이어야 합니다.'),
        body('age').isInt().withMessage('숫자를 입력하세요'),
        body('email').isEmail().withMessage('이메일을 입력하세요').normalizeEmail(), // normalizeEmail()은 이메일을 소문자로 바꿔준다.
        body('job.name').notEmpty().withMessage('직업 이름을 입력하세요'), // object안에 있는것 들중에 검증하고 싶다면 .으로 접근하면 된다.
        validate
    ],
    (req, res, next) => {
        console.log(req.body);
        res.sendStatus(201);
    }
);

app.get('/:email',
    [
        param('email').trim().isEmail().withMessage('이메일 입력해요.'),
        validate
    ],
    (req, res, next) => {
        res.send('✉️');
    }
);

app.listen(8080);
