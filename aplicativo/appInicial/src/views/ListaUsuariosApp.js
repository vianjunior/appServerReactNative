import React from 'react'
import Header from '../components/Header'
import {View} from 'react-native'
import {listaUsuariosApp} from '../DAO/crudUsuarioApp'
import FlatListUsuariosApp from '../components/FlatListUsuariosApp'

export default class ListaUsuariosApp extends React.Component{

    constructor(){
        super()
        this.state = {
            registros : []
        }
    }

    componentDidMount(){
        this.buscaRegistros('')

    }

    async buscaRegistros(filtro){
        let resultado = await listaUsuariosApp(filtro)
        this.setState({registros : resultado})
    }

    render(){
        return(
            <View style = {{flex : 1}}>
                <Header
                    titulo = 'Usuários Cadastrados no App'
                    voltarPara = {'telaInicial'}
                    mostraIconeAdd = {true}
                    mostraIconeSinc = {true}
                    atualizaListaUsuariosApp ={()=> this.buscaRegistros('')}
                />

                <View style = {{flex : 1}}>
                    <FlatListUsuariosApp
                        dados = {this.state.registros}
                    />
                </View>

            </View>
        )
    }
}