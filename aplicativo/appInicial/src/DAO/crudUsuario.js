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

export function buscaUsuario(data) {
    return new Promise(result => {
        db.transaction(tx => {
            tx.executeSql(`
                SELECT 
                    *   
                FROM
                    usuarios
            `, [], (err, data) => {
                console.log(data)
                    result(data.rows._array)
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