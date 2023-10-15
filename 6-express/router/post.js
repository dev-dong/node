import express from 'express';

const router = express.Router();

router.use(express.json());

router.post('/', (req, res) => {
    res.status(201).send('POST: /');
});

router.put('/:id', (req, res) => {
    res.status(201).send('PUT: /posts/:id');
});

router.delete('/:id', (req, res) => {
    res.status(201).send('DELETE: /posts/:id');
});

export default router;