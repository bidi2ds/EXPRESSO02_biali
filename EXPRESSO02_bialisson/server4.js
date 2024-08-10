const express = require('express')
const app= express()

app.listen(3000,()=>{
    console.log('olá povo abençoado,servidor no ar')
})

//dados de clientes
const clientes=[
    {id:1,nome:'Alisson',telefone:'4187104004', email:'alisson.joaquim@gmail.com'},
    {id:2,nome:'Bia',telefone:'4192743613', email:'biakosinski99@gmail.com'},
    {id:3,nome:'Joaquim',telefone:'4198563214', email:'joaquim.alisson@gmail.com'},
    {id:4,nome:'kosinski',telefone:'4126472369', email:'kosinski.bianca@gmail.com'},
    {id:5,nome:'carlesso',telefone:'4110875004', email:'carlesso.joaquim@gmail.com'}
]

//rotas
app.get('/',(req,res)=>{
    res.send('API de clientes');

})

//rota 2- o total de clientes

app.get('/total_clientes',(req,res)=>{
    res.send('Total de clientes:'+clientes.length);
})

//rota 3 - apresentar dados de um cliente especifico
app.get('/clientes/:id',(req,res)=>{
    const cliente = clientes.find(c =>c.id === parseInt(req.params.id));
    
    //se o cliente não existe
    if(!cliente) res.status(404).send('Cliente não encontrado!');

    //se o cliente existe
    res.send(`O cliente é: ${cliente.nome}, telefone: ${cliente.telefone}, email: ${cliente.email} `);

})

