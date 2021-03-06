import { db, criaTabelaUsuario } from './criaTabelasBanco'


export function insereUsuario(data) {
    db.transaction(tx => {
        tx.executeSql('DROP TABLE USUARIOS')
        criaTabelaUsuario()
        db.transaction(tx => {
            data.forEach(dado => {
                tx.executeSql(`
                INSERT INTO 
                    usuarios(
                    cdUsuario,
                    nmUsuario,
                    deLogin,
                    cdSenha,
                    cnpjUsuario,
                    statusUsuario
                    )
                VALUES(?, ?, ?, ?, ?, ?)`,
                    [dado.CDUSUARIO, dado.NMUSUARIO, dado.DELOGIN, dado.CDSENHA, dado.CNPJUSUARIO, dado.IDATIVO], (err, data) => {

                    })
            })
        })
    })
}

export function atualizaUsuario(dado){
    console.log("dado ", dado)
    db.transaction(tx => {
        tx.executeSql(`
            UPDATE
                usuarios
            SET
                nmUsuario = ?,
                deLogin = ?,
                cdSenha = ?,
                cnpjUsuario = ?
            WHERE
                cdUsuario = ?            
        `, [dado.nmUsuario, dado.deLogin, dado.cdSenha, dado.cnpjUsuario, dado.cdUsuario], (err, data)=>{

        })
        console.log(tx)
    })
}

export function buscaUsuario(nomeUsuario) {
    
    return new Promise(result => {
        db.transaction(tx => {
            tx.executeSql(`
                SELECT 
                    *   
                FROM
                    usuarios
                WHERE
                    nmUsuario LIKE ? 
            `, ['%'+nomeUsuario+'%'], (err, data) => {
                if (data.rows.length > 0){
                    console.log(data.rows._array)
                    result(data.rows._array)
                } else {
                    result(false)
                }
                })

        })
    })

}

export function deletaUsuario(idUsuario) {
    db.transaction(tx => {
        tx.executeSql(`
            DELETE FROM
                usuarios    
            WHERE
                cdUsuario = ?
        `,
            [idUsuario], (err, data) => {

            })
        console.log(tx)
    })
}