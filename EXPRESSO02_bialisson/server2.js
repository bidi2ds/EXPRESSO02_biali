const express = require('express')
const morgan = require('morgan')

const server2 = express()

server2.listen(3000)

//criando middleware

//server2.use(morgan('tiny'))
//server2.use(morgan(':method :url :status'))
server2.use(morgan('Metodo = :method | Status = :status | Url = :url'))
server2.get("/",(req,res)=>{
    res.send('teste de conexao do server 2')
})
