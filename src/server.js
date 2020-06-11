const express = require('express')
const app = express()

//pegar banco de dados
const db = require('./database/db')

app.use(express.static('public'))

//habilitar req.body
app.use(express.urlencoded({extended: true}))

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: app,
    noCache: true
})

app.get("/", (req, res) =>{
    return res.render('index.html')
})

app.get("/createrPointer", (req, res) =>{
    return res.render('createrPointer.html')
})

app.post("/savedPointer", (req, res) =>{
    console.log(req.body)
    // Inserir dados na tabela
    const query = `
            INSERT INTO places (
                nameEntity,
                img,
                address,
                addressTwo,
                state,
                city,
                items
                
                ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.nameEntity,
        req.body.urlImage,
        req.body.address,
        req.body.numberAndComplement,
        req.body.states,
        req.body.city,
        req.body.items

    ]
    function afterInsertData(err){
            if(err){
                return console.log(err)
            }
            console.log('Cadastrado com sucesso')
            return res.render('createrPointer.html', {saved: true})
    }
        db.run(query, values, afterInsertData)

 })

app.get("/searchResults", (req, res) =>{

    const search = req.query.searchcity

    if(search == ''){
        return res.render('searchResults.html', {total: 0})
    }
    
    const data = `SELECT * FROM places WHERE city LIKE '%${search}%'`

    db.all(data, function (err, rows) {
        if(err){
            console.log(err)
        }
        const total = rows.length
        //retorna pagina html com os dados do banco de dados
        return res.render('searchResults.html', {places: rows, total: total})
    })

})
app.listen(3000)