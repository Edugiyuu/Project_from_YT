const express = require('express');
const router = express.Router();

var numeroId = 1

// Define routes
const ceps = [
  {
    id: numeroId++,
    cep:'',
    nome:'',
    idade:0,
    email:'',
    cidade: 'São Paulo'
  },
  {
    id: numeroId++,
    cep:'01001000',
    nome:'Lucas',
    idade:19,
    email:'Lucas@gmail.com',
    cidade: 'São Paulo'
  },
  {
    id: numeroId++,
    cep:'55555555',
    nome:'Pedro',
    idade:14,
    email:'Pedro@gmail.com',
    cidade: 'São Paulo'
  },

]


router.get('/ceps', (req, res) => {
  res.json(ceps);
});

router.get('/ceps/:cep', (req, res) => {
  const userCep = req.params.cep;
  const acharCep = ceps.find(cep => cep.cep === userCep);
  res.json(acharCep);

});

router.post('/ceps', (req, res) => {
  const novoUsuario = {
    id: numeroId++,
    ...req.body
  };
  ceps.push(novoUsuario);
  res.send(ceps);
});

router.put('/ceps/:id', (req, res) => {
  const userId = req.params.id;
  for (let i = 0; i < ceps.length; i++) {
    if (userId === ceps[i]) {
      
    }
    
  }
  res.send();
});

router.delete('/ceps/:cep', (req, res) => {
  const userCep = req.params.cep;
  const posiçãoDoCep = ceps.findIndex(cep => cep.cep === userCep);

  console.log(ceps[posiçãoDoCep]);
  console.log(posiçãoDoCep);

  if (posiçãoDoCep === -1) {
    res.status(404).send('Esse CEP não existe');
  } else {
    ceps.splice(posiçãoDoCep, 1);
    res.json({ message: 'CEP deletado com sucesso' });
  }
});
module.exports = router;