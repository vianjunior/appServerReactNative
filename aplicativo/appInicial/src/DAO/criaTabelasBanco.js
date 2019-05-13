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

export function criaTabelaUsuarioAPP(){
    db.transaction(tx => {
        // tx.executeSql('DROP TABLE usuariosAPP')
        tx.executeSql(
            `
            CREATE TABLE IF NOT EXISTS usuariosAPP(
                cdUsusarioApp TEXT,
                nmUsuarioApp TEXT,
                deLoginApp TEXT,
                cdSenhaApp TEXT,
                cnpjUsuarioApp TEXT,
                statusUsuarioApp INTEGER
            )`
        )
    })
}


export {db}