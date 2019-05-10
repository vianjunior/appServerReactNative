import { SQLite } from 'expo'

const db = SQLite.openDatabase('bancoUsuario')

export function criaTabelaUsuario() {
    db.transaction(tx => {
        tx.executeSql(
            `
            CREATE TABLE IF NOT EXISTS usuarios(
            cdUsuario INTEGER,
            nmUsuario TEXT,
            deLogin TEXT,
            cdSenha TEXT,
            cnpjUsuario TEXT,
            statusUsuario INTEGER
            )`
        )
    })
}


export {db}