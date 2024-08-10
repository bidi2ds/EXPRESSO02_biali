//incorporar respostas a partir de outros arquivos

const express = require('express')
const app= express()

app.listen(3000, ()=>{
    console.log('servidor no ar');
})

//criar arquivos functions

//importar as funçoes

const funcoes =require('./functions')

app.get('/', (req,res)=>{
    res.send('teste com arquivos externos')
})

//rota para a função add
app.get('/add/:a/:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const resultados= funcoes.add(a,b);
    res.send(`A soma de ${a} com ${b} é ${resultados}`);
})

//criar a rota para sub (com hifen)
app.get('/sub/:a-:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const resultado = funcoes.sub(a,b);
    res.send(`A subtração entre ${a} e ${b} é ${resultado}`);

})

//criar rota para multi
app.get('/multi/:a-:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const resultado = funcoes.multi(a,b);
    res.send(`A multiplicação entre ${a} e ${b} é ${resultado}`);
})

//criar rota para div
app.get('/div/:a-:b',(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const resultado = funcoes.div(a,b);
    res.send(`A divisão entre ${a} e ${b} é ${resultado}`)
})