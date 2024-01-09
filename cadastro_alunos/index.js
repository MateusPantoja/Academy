const express = require('express')
const bodyParser = require('body-parser');
const db = require('./db')


const app = express();
const port = 3000;

app.use(bodyParser.json());


//inicair o server
app.listen(port, () => 
{
    console.log(`Serviodor rodando na porta ${port}`);
});

app.post('/alunos', (req, res) => {
    res.send({"Hello" : 'Word'});
})