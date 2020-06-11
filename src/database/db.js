//importar sqlite 3
const sqlite3 = require('sqlite3').verbose()

//criar objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db
// // utilizar objeto de banco de dados para operações
// // db.serialize(() =>{
// //     //Criar tabela
// //     const table = `
// //         CREATE TABLE IF NOT EXISTS places(
// //             id INTEGER PRIMARY KEY AUTOINCREMENT,
// //             nameEntity TEXT,
// //             img TEXT,
// //             address TEXT,
// //             addressTwo TEXT,
// //             state TEXT,
// //             city TEXT,
// //             items TEXT

// //         );
// //     `
// //     db.run(table)
    // Inserir dados na tabela

    // const query = `
    //         INSERT INTO places (
    //             nameEntity,
    //             img,
    //             address,
    //             addressTwo,
    //             state,
    //             city,
    //             items
                
    //             ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "Coleta Consciente",
    //     "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    //     "Rua da coleta",
    //     "Número 260",
    //     "Bahia",
    //     "Ribeira do Pombal",
    //     "Papel e papelão"

    // ]
    // function afterInsertData(err){
    //         if(err){
    //             return console.log(err)
    //         }
    //         console.log('Cadastrado com sucesso')
    //         console.log(this)
    // }
    //     db.run(query, values, afterInsertData)
// //     //Consultar dados na tabela

// //     const data = `SELECT * FROM places`

// //     db.all(data, function (err, rows) {
// //         if(err){
// //             console.log(err)
// //         }
// //         console.log('Seus registros')
// //         console.log(rows)
// //     })

    //Deletar dado na tabela

    // const del = `DELETE FROM places`

    // db.run(del, function(err, rows){
    //     if(err){
    //         console.log(err)
    //     }
    //     console.log('Registro deletado com sucesso')
    //     console.log(rows)
    // })
// }) //end Serialize