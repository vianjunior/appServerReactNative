import axios from 'axios'
import {Alert} from 'react-native'

import {buscaRegistrosSinc, atualizaStatusUsuariosApp} from '../DAO/crudUsuarioApp'

export async function enviaUsuariosERP(){
    let resultados = await buscaRegistrosSinc()

    if(resultados.length > 0 ){
        axios.post('http://10.1.1.154:12000/enviaUsuariosParaERP', data = {usuario:resultados})
    .then(resp =>{ 
        console.log('resp.data ', resp.data)
        if(resp.data != 'Erro ao insereir usuário'){
            // atualiza status usuario
            atualizaStatusUsuariosApp()
        } else{
            Alert.alert('Aviso', 'Falha ao sincronizar registros')
        }
    })
    }else{
        Alert.alert('Aviso!','Não existem registros para serem sincronizados')
    }

    
}