//importação de módulos para dentro de uma const
//Todos os recursos do módulo são atribuídos à const
const express = require("express")
const bodyParser = require("body-parser")
const Firebird = require("node-firebird")

//atribui-se à app a função express()
const app = express()
const porta = 12000

// configuração de conexão com o DB Firebird
var options = {}; 
options.host = '10.1.1.154';
options.port = 3050;
options.database = 'C:\\Users\\Public\\Bkp\\Metasis Testes Mobile\\Agro Gatti\\DB\\INDUSTRIAL.FDB';
options.user = 'sysmts';
options.password = 'mts';
options.lowercase_keys = false; // set to true to lowercase keys
options.role = null;            // default
options.pageSize = 4096;        // default when creating database

app.use(bodyParser.urlencoded({extended:true, limit: "50mb"}))
app.use(bodyParser.json({limit: "50mb"}))


// rotas get
app.get("/respostaGetString", (request, response)=>{
    response.send("Teste String")
})

app.get("/respostaGetJson", (resquest, response)=>{
    response.json({
        nome:"Junior",
        idade: 24
    })
})

app.get("/respostaGetInt", (request, response)=>{
    response.send([100])
})

// rotas post
app.post("/envioPostString", (request, response)=>{
    let parametros = request.body
    //console.log("-", parametros.Nome, " ", parametros.Idade, " ", parametros.Funcao)
    if (parametros.Idade > 10 && parametros.Idade < 18){
        response.send("Adolescente")
    } else {
        response.send("Adulto")
    }
})

app.get("/buscaUsuariosAPP", (request, response)=>{
    console.log(request.body)
    Firebird.attach(options, (err, db)=>{
        if (err)
            throw console.log("Erro ao conectar com o banco de dados", err)
        
        db.query(`
            SELECT
                *
            FROM
                SYNUSUARIO
        
        `, [], (err, result)=>{
            if (err){
                console.log("Erro ao efetuar SELECT /buscaUsuariosAPP", err)
                return // esse return faz o papel do break
            } else{
                response.send(result)
            }
        })
    })
})


// obrigatório para o servidor saber em que porta deve escutar.
app.listen(porta, ()=>{
    console.log(`Servidor Rodando na porta ${porta}`)
})