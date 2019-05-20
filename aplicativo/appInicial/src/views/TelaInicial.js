import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Card} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'

import Header from '../components/Header'

import {buscaUsusarios} from '../functions/buscaUsuarios'
import {criaTabelaUsuario, criaTabelaUsuarioAPP, criaTabelaAdmAndroid} from '../DAO/criaTabelasBanco'
import {sincronizaAdmAndroid} from '../functions/sincronizaAdmAndroid'

import {buscaRegistrosAdmAndroid } from '../DAO/crudAdmAndroid'

export default class TelaIncial extends React.Component{

    componentDidMount(){
        criaTabelaUsuario()
        criaTabelaUsuarioAPP()
        criaTabelaAdmAndroid()
        buscaRegistrosAdmAndroid()
    }

    render(){
        return(
            <View>
                <Header
                    titulo = "Tela Inicial"
                    voltarPara = {false}
                    mostraIconeAdd = {false}
                />
                <View>
                <TouchableOpacity onPress ={()=> Actions.replace('listaRegistros')}>
                    <Card containerStyle={estilos.conteinerCard}>
                        <View>
                            <Text>Lista Registros</Text>
                        </View>  
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress ={()=> buscaUsusarios()}>
                    <Card containerStyle={estilos.conteinerCard} sty>
                        <View>
                            <Text>Sincronizar Registros</Text>
                        </View>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress ={()=> Actions.replace('listaUsuariosApp')}>
                    <Card containerStyle={estilos.conteinerCard}>
                        <View>
                            <Text>Lista Usuarios APP</Text>
                        </View>  
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity onPress ={()=> sincronizaAdmAndroid()}>
                    <Card containerStyle={estilos.conteinerCard}>
                        <View>
                            <Text>Sincronizar Config Mobile</Text>
                        </View>  
                    </Card>
                </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    conteinerCard : {
        borderRadius : 10,
        borderWidth : 2,
        borderColor : '#273c75'
    }
})