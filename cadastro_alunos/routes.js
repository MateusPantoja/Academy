const express = require('express');
const router = express.Router();
const db = require('./db');


//End point de leitura de alunos (read)
router.get ("/alunos", (req, res) => {
    const query = 'SELECT * FROM alunos';

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Erro ao obter alunos");
        } else {
            res.json(result);
        }
    });
});

router.post('/alunos', (req, res) => {
    const { nome, idade } = req.body;

    const query = `INSERT INTO alunos (nome, idade) VALUES ('${nome}', ${idade})`;
    console.log(query);

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Erro ao criar aluno");
        } else {
            res.status(201).send('Aluno criado com sucesso');
        }
    });
});

module.exports = router;