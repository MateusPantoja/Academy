const express = require('express');
const router = express.Router();
const db = require('./db');

//Alunos ======================================================================

//End point de leitura de alunos (read)
router.get ("/alunos", (req, res) => {
    const query = 'SELECT * FROM alunos';

    console.log(query);

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

router.put('/alunos/:id', (req, res)=> {
    const { id } = req.params;
    const { nome , idade } = req.body;

    const query = `UPDATE alunos SET nome='${nome}', idade=${idade} WHERE id_aluno=${id}`;

    console.log(query);

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Error ao atualizar alunos");
        } else {
            res.send('Aluno atualizado com sucesso');
        }
    });
});

router.delete('/alunos/:id', (req, res)=> {
    const { id } = req.params;
    
    const query = `DELETE FROM alunos WHERE id_aluno=${id}`;

    console.log(query);

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Error ao excluir alunos");
        } else {
            res.send('Aluno excluido com sucesso');
        }
    });
});

//Alunos ======================================================================

//Aulas ======================================================================
router.post('/aulas', (req, res) => {
    const { nome_aula, descricao } = req.body;

    const query = `INSERT INTO aulas (nome_aula, descricao) VALUES ('${nome_aula}', '${descricao}')`;
    
    console.log(query);

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send(`Erro ao criar aulas: ${JSON.stringify(err)}`);
        } else {
            res.status(201).send('Aula criada com sucesso');
        }
    });
});

router.get ("/aulas", (req, res) => {
    const query = 'SELECT * FROM aulas';

    console.log(query);

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Erro ao obter aulas");
        } else {
            res.json(result);
        }
    });
});

router.put('/aulas/:id', (req, res)=> {
    const { id } = req.params;
    const { nome_aula , descricao } = req.body;

    const query = `UPDATE aulas SET nome_aula='${nome_aula}', descricao='${descricao}' WHERE id_aula=${id}`;

    console.log(query);

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Error ao atualizar aulas");
        } else {
            res.send('Aula atualizada com sucesso');
        }
    });
});

router.delete('/aulas/:id', (req, res)=> {
    const { id } = req.params;
    
    const query = `DELETE FROM aulas WHERE id_aula=${id}`;

    console.log(query);

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Error ao excluir aula");
        } else {
            res.send('Aula excluida com sucesso');
        }
    });
});

//Aulas ======================================================================
// create e read para aulas

router.get ("/inscricao", (req, res) => {
    const query = 'SELECT * FROM alunos_aulas';

    console.log(query);

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Erro ao obter as Aulas que os Alunos estão incritos");
        } else {
            res.json(result);
        }
    });
});

router.post('/inscricao', (req, res) => {
    const { id_aula, id_aluno } = req.body;

    const query = `INSERT INTO alunos_aulas (id_aula, id_aluno) VALUES ('${id_aula}', ${id_aluno})`;
    console.log(query);

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Erro ao fazer inscrição em aula");
        } else {
            res.status(201).send('Aluno inscrito na Aula com sucesso');
        }
    });
});


router.put('/inscricao/:id', (req, res)=> {
    const { id } = req.params;
    const { id_aula } = req.body;

    const query = `UPDATE alunos_aulas SET id_aula='${id_aula}' WHERE id_aluno=${id}`;

    console.log(query);

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Error ao atualizar aulas");
        } else {
            res.send('Aula atualizada com sucesso');
        }
    });
});


router.get ("/inscricao/:id", (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM alunos_aulas WHERE id_aluno=${id}`;

    console.log(query);

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Erro ao obter as Aulas que os Alunos estão incritos");
        } else {
            res.json(result);
        }
    });
});

module.exports = router;