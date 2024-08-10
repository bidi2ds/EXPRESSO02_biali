const express = require('express')

const app = express()
app.listen(3000,()=>{
    console.log('servidor em execução')

})

//rotas com parametro

app.get('/',(req,res)=>{
    res.send('ola mundo ')
})

//rota com um parametro
app.get('/ola/:nome', (req,res)=>{
    console.log(req.params.nome)
    res.send('Ola'+req.params.nome)
})

//rota com dois parametros
app.get('/ola/:nome/empresa',(req,res)=>{
    res.send('Olá'+req.params.nome+'da empresa'+req.params.empresa);

})

//rota com soma de dois parametros
app.get('/soma/:a/:b', (req,res)=>{
    res.send('O resultado da soma de '+req.params.a+ ' e ' +req.params.b+' É:'+(parseInt(req.params.a)+(parseInt(req.params.b))))
})