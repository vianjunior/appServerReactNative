import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import IconeIO from 'react-native-vector-icons/Ionicons'

import ModalAddUsuario from './ModalAddUsuario';
import {enviaUsuariosERP} from '../functions/enviaUsuariosERP' 

import {config} from '../DAO/crudAdmAndroid'

export default class Header extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            mostraModal : false
        }
    }


    render() {
        return (
            <View style={estilo.estiloViewPrincipal}>
            {
                console.log(config)
            }
            <ModalAddUsuario
                mostraModal = {this.state.mostraModal}
                fechar = {()=> this.setState({mostraModal : false})}
                atualizaListaUsuariosApp ={()=> this.props.atualizaListaUsuariosApp()}
            />
                <View style={estilo.estiloAlinhamentoItens}>

                    {
                        this.props.voltarPara ?
                            <View>
                                <TouchableOpacity style={{ padding: 15 }} onPress={() => Actions.replace(this.props.voltarPara)}>
                                    <IconeIO name='md-arrow-back' size={30} color='#fff' />
                                </TouchableOpacity>
                            </View>
                            : null

                    }

                    <View>
                        <Text style={estilo.estiloTextoHeader}>{this.props.titulo}</Text>
                    </View>

                    {
                        config.TPCADCLIENTE == 1 || config.TPCADCLIENTE == 2
                            ?
                            <View style={estilo.alinhaIcones}>
                                <TouchableOpacity onPress = {()=> this.setState({mostraModal : true})}>
                                    <View style={estilo.primeiroIcone}>
                                        <IconeIO name='md-add-circle' size={30} color='#FFF' />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            :
                            null

                    }

                    {
                        this.props.mostraIconeSinc
                            ?
                            <View style={estilo.alinhaIcones}>
                            <TouchableOpacity onPress = {()=> enviaUsuariosERP()}>
                                <View style={estilo.primeiroIcone}>
                                    <IconeIO name='ios-sync' size={30} color='#FFF' />
                                </View>
                            </TouchableOpacity>
                        </View>
                        :
                        null
                    }

                </View>
            </View>
        )
    }
}



const estilo = StyleSheet.create({
    estiloViewPrincipal: {
        width: '100%',
        height: 60,
        backgroundColor: '#353b48',
        borderBottomColor: '#e84118',
        borderBottomWidth: 2
    },

    estiloAlinhamentoItens: {
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        flex: 1
    },

    estiloTextoHeader: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    alinhaIcones: {
        flexDirection: 'row'
    },
    primeiroIcone: {
        marginRight: 10
    }
})