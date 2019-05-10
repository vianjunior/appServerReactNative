import React from 'react'
import {View, Text, Alert} from 'react-native'

import Header from '../components/Header'

import {buscaUsuario, deletaUsuario} from '../DAO/crudUsuario'
import FlatListUsuarios from '../components/FlatListUsuarios';

export default class ListaRegistros extends React.Component{

    constructor(){
        super()
        this.state = {
            dadosUsuarios : []
        }
    }

    componentDidMount(){
        this.listaRegistros()
    }

    async listaRegistros(){
        let dadosUsuarios = await buscaUsuario()
        this.setState({dadosUsuarios})
        //this.setState({dadosUsusario : dadosUsuario})
    }

    confirmaDeletaUsuario(idUsuario, nomeUsuario){
        Alert.alert('Aviso', `Deseja Realmente deletar o usuário: ${nomeUsuario}`, 
        [
            {
                text : 'Sim',
                onPress : ()=> this.efetivaDeletUsuario(idUsuario)
            },
            {
                text : 'Não'
            }
        ]
        )
    }

    efetivaDeletUsuario(idUsuario){
        deletaUsuario(idUsuario)
        this.listaRegistros()
    }

    render(){
        return(
            <View style = {{flex : 1}}>
                <Header 
                    titulo = 'Lista'
                    voltarPara = 'telaInicial'
                />
                <View style = {{flex : 1}}>
                <FlatListUsuarios 
                    dados = {this.state.dadosUsuarios}
                    deletaUsuario = {(idUsuario, nomeUsuario)=>this.confirmaDeletaUsuario(idUsuario, nomeUsuario)}
                />
                </View>
            </View>
        )
    }
}