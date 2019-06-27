import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Input, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

import Header from '../components/Header'

import { buscaUsusarios } from '../functions/buscaUsuarios'
import { criaTabelaUsuario, criaTabelaUsuarioAPP, criaTabelaAdmAndroid } from '../DAO/criaTabelasBanco'
import { sincronizaAdmAndroid } from '../functions/sincronizaAdmAndroid'

import { buscaRegistrosAdmAndroid } from '../DAO/crudAdmAndroid'


export default class TelaIncial extends React.Component {

    constructor() {
        super()
        this.state = {
            tempo: 0,
            min: 0,
            seg: 0
        }
    }

    componentDidMount() {
        criaTabelaUsuario()
        criaTabelaUsuarioAPP()
        criaTabelaAdmAndroid()
        buscaRegistrosAdmAndroid()
    }

    setaValores(tempo) {
        let min
        let seg
        if (tempo >= 60) {
            min = Math.floor(tempo / 60)
            seg = tempo % 60
        } else {
            min = 0
            seg = tempo
        }
        this.iniciaCronometro(min, seg)
    }

    iniciaCronometro(min, seg) {
        if (min == 0) {
            for (let s = seg; s >= 0; s--) {
                setTimeout(() => this.atualizaEstado(min, s), 1000)
            }
        } else {
            for (let m = min; m >= 0; m--) {
                for (let s = seg; s >= 0; s--) {
                    setTimeout(() => this.atualizaEstado(m, s), 1000)
                }
                seg = 59
            }
        }

    }

    atualizaEstado(m, s) {
        this.setState({ min: m })
        this.setState({ seg: s })
    }


    render() {
        return (
            <View>
                <Header
                    titulo="Tela Inicial"
                    voltarPara={false}
                    mostraIconeAdd={false}
                />
                <View>
                    <TouchableOpacity onPress={() => Actions.replace('listaRegistros')}>
                        <Card containerStyle={estilos.conteinerCard}>
                            <View>
                                <Text>Lista Registros</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => buscaUsusarios()}>
                        <Card containerStyle={estilos.conteinerCard} sty>
                            <View>
                                <Text>Sincronizar Registros</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.replace('listaUsuariosApp')}>
                        <Card containerStyle={estilos.conteinerCard}>
                            <View>
                                <Text>Lista Usuarios APP</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => sincronizaAdmAndroid()}>
                        <Card containerStyle={estilos.conteinerCard}>
                            <View>
                                <Text>Sincronizar Config Mobile</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <View style={estilos.ViewContador}>
                        <Input
                            placeholder={'Insira o tempo, em Segundos'}
                            onChangeText={(tempo) => this.setState({ tempo })}
                        />
                        <Button
                            buttonStyle={estilos.btnIniciar}
                            title='Iniciar'
                            onPress={() => this.setaValores(this.state.tempo)}
                        />
                        <View style={estilos.ViewTempo}>
                            {
                                this.state.min < 10
                                    ?
                                    <Text style={estilos.tempo}>0{this.state.min}</Text>
                                    :
                                    <Text style={estilos.tempo}>{this.state.min}</Text>
                            }
                            <Text style={estilos.tempo}>:</Text>
                            {
                                this.state.seg < 10
                                    ?
                                    <Text style={estilos.tempo}>0{this.state.seg}</Text>
                                    :
                                    <Text style={estilos.tempo}>{this.state.seg}</Text>
                            }
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    conteinerCard: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#273c75'
    },
    ViewContador: {
        backgroundColor: '#FFF',
        marginTop: 50,
        marginBottom: 20,
        height: 140,
        borderRadius: 10,
        marginHorizontal: 20
    },
    ViewTempo: {
        flexDirection: 'row',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnIniciar: {
        marginHorizontal: 35,
        marginTop: 10
    },
    tempo: {
        fontSize: 20
    }
})