import axios from 'axios'
import {Alert} from 'react-native'
import {insereUsuario} from '../DAO/crudUsuario'

export function buscaUsusarios(){
    axios.get('http://10.1.1.154:12000/buscaUsuariosAPP')
    .then(resp=>{
        insereUsuario(resp.data)
    })
    .catch(err=>{
        Alert.alert('Erro', 'Erro ao buscar usuários')
    })
}