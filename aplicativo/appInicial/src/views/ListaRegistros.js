import React from 'react'
import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native'
import { Input } from 'react-native-elements'
import IconIO from 'react-native-vector-icons/Ionicons'

import Header from '../components/Header'
import ModalAddUsuario from '../components/ModalAddUsuario'

import { buscaUsuario, deletaUsuario } from '../DAO/crudUsuario'
import FlatListUsuarios from '../components/FlatListUsuarios';
import NadaEncontrado from '../components/NadaEncontrado';

export default class ListaRegistros extends React.Component {

    constructor() {
        super()
        this.state = {
            dadosUsuarios: [],
            textoPesquisaUsuario: '',
            dadosEditar:false,
            abrirModal:false,
            tipoModal:null
        }
    }

    componentDidMount() {
        this.listaRegistros('')
    }

    async listaRegistros(nomeUsuario) {
        this.setState({ textoPesquisaUsuario: nomeUsuario })
        let dadosUsuarios = await buscaUsuario(nomeUsuario)
        this.setState({ dadosUsuarios })
        //this.setState({dadosUsusario : dadosUsuario})
    }

    confirmaDeletaUsuario(idUsuario, nomeUsuario) {
        Alert.alert('Aviso', `Deseja Realmente deletar o usuário: ${nomeUsuario}`,
            [
                {
                    text: 'Sim',
                    onPress: () => this.efetivaDeletUsuario(idUsuario)
                },
                {
                    text: 'Não'
                }
            ]
        )
    }

    efetivaDeletUsuario(idUsuario) {
        deletaUsuario(idUsuario)
        this.listaRegistros('')
    }

    limpaCampoPesquisa() {
        this.setState({ textoPesquisaUsuario: '' })
        this.listaRegistros('')
    }

    editarUsuario(dados){
        this.setState({dadosEditar:dados,tipoModal:'editar', abrirModal:true, })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    titulo='Lista'
                    voltarPara='telaInicial'
                    mostraIconeAdd={false}
                />
                <View style={{ flex: 1 }}>
                    <View style={estilo.viewInput}>
                        <Input
                            autoFocus={true}
                            placeholder='Pesquise pelo nome aqui!'
                            value={this.state.textoPesquisaUsuario}
                            onChangeText={(textoPesquisaUsuario) => this.listaRegistros(textoPesquisaUsuario)}
                            rightIcon={
                                this.state.textoPesquisaUsuario.length > 0 ?
                                    <TouchableOpacity onPress={() => this.limpaCampoPesquisa()}>
                                        <IconIO name='md-close' size={30} color='red' />
                                    </TouchableOpacity>
                                    : null
                            }
                        />
                    </View>

                    {
                        this.state.dadosUsuarios
                            ?
                            <View style={{ flex: 1 }}>
                            <ModalAddUsuario
                                fechar = {()=> this.setState({abrirModal: false})}
                                mostraModal = {this.state.abrirModal}
                                tipoModal = {this.state.tipoModal}
                                dadosUsuario ={this.state.dadosEditar}
                                atualizaLista = {()=> this.listaRegistros('')}
                            />
                                <FlatListUsuarios
                                    dados={this.state.dadosUsuarios}
                                    deletaUsuario={(idUsuario, nomeUsuario) => this.confirmaDeletaUsuario(idUsuario, nomeUsuario)}
                                    editarUsuario ={(resultado)=>this.editarUsuario(resultado)}

                                />
                            </View>

                            :
                            <NadaEncontrado />
                    }

                </View>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    viewInput :{
        margin:10,
        borderWidth:2,
        borderColor:'#333',
        borderRadius:10
    }
})