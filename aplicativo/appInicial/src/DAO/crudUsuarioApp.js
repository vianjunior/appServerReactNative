import { db } from './criaTabelasBanco'

import UUID from 'uuid/v1'
import {Alert} from 'react-native'

export function insereUsuarioApp(data) {
    return new Promise(result => {
        db.transaction(tx => {
            tx.executeSql(
                `
            INSERT INTO usuariosAPP(
                    cdUsusarioApp ,
                    nmUsuarioApp ,
                    deLoginApp ,
                    cdSenhaApp ,
                    cnpjUsuarioApp ,
                    statusUsuarioApp
                )
                VALUES (?,?,?,?,?, ?)`, [
                    UUID().replace(/-/g, ''),
                    data.nmUsuario,
                    data.deLogin,
                    data.cdSenha,
                    data.cnpjUsuario,
                    2],
                (err, data) => {
                    result(true)
                }
            )
        })
    })
}

export function listaUsuariosApp(filtro) {

    return new Promise(result => {
        db.transaction(tx => {
            tx.executeSql(`
            SELECT 
                * 
            FROM 
                usuariosApp
            WHERE
                nmUsuarioApp 
            LIKE ?
            `,
                ['%' + filtro + '%'], (err, data) => {
                    if (data.rows.length > 0) {
                        result(data.rows._array)
                    } else {
                        result(false)
                    }
                }
            )
        })
    })
}

export function buscaRegistrosSinc() {
    return new Promise(result => {
        db.transaction(tx => {
            tx.executeSql(`
                SELECT
                    *
                FROM
                    usuariosApp
                WHERE 
                    statusUsuarioApp = ?
            `, [2], (err, data) => {
                    if (data.rows.length > 0) {
                        result(data.rows._array)
                    } else {
                        result(false)
                    }
                })
        })
    })

}

export function atualizaStatusUsuariosApp() {
    db.transaction(tx => {
        tx.executeSql(`
            UPDATE
                usuariosApp
            SET
                statusUsuarioApp = ?
        `, [3], (err, data) => {
            Alert.alert('Aviso', 'Dados sincronizados com sucesso!')
            }
        )
    })
}