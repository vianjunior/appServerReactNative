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

export function criaTabelaAdmAndroid(){
    db.transaction(tx => {
        tx.executeSql(`
            CREATE TABLE IF NOT EXISTS
                admandroid(
                    CDCONFIG TEXT,
                    CDEST TEXT,
                    CDFIL TEXT,
                    CDFILEST TEXT,
                    CDFILFIN TEXT,
                    CDPRAZO TEXT,
                    CDPRECO TEXT,
                    CDSYSLOG TEXT,
                    CDUSUAALT TEXT,
                    CDUSUAINC TEXT,
                    DTINCALTREG TEXT,
                    DTINSERT TEXT,
                    DTSYNC TEXT,
                    IDBLOQVLVENDA TEXT,
                    IDENVIAEMAILSINC TEXT,
                    IDGERACOMIS TEXT,
                    IDGERAORC TEXT,
                    IDLIMITADESCVALMIN TEXT,
                    IDMOSTRAESTOQUE TEXT,
                    IDPRAZOPORCLIENTE TEXT,
                    IDPRAZOPORPRECO TEXT,
                    IDSYNCCLIFOR INTEGER,
                    IDUSACDLISTAPRECO TEXT,
                    IDUSADESCFAT TEXT,
                    IDUSAMOTIVOTROCA TEXT,
                    IDUSAOBSITEM TEXT,
                    IDUSARKIT TEXT,
                    IDUSARPACOTE TEXT,
                    IDVALIDAATRASOFIN TEXT,
                    IDVALIDASALDODISP TEXT,
                    NUPAGESIZE INTEGER,
                    PECOMISPROG INTEGER,
                    PEDESCCOMIS INTEGER,
                    PEDESCMAX INTEGER,
                    SYNCINTERVAL INTEGER,
                    TPCADCLIENTE INTEGER
                )
        `)
        console.log(tx)
    })
}


export {db}