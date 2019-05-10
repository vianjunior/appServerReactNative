import React from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Button } from 'native-base';
import {Input} from 'react-native-elements'

export default class ModalAddUsuario extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nmUsuario : '',
            deLogin : '',
            cdSenha : '',
            confirmaSenha : '',
            cnpjUsuario : ''
        }
    }

    render() {
        return (
            <Modal onRequestClose={this.props.fechar} visible={this.props.mostraModal} transparent animationType='fade'>
                <TouchableWithoutFeedback onPress={this.props.fechar}>
                    <View style={estilos.offSet} />
                </TouchableWithoutFeedback>

                <View style={estilos.viewPrincipal}>
                    <View style={estilos.viewComponentes}>

                        <View>
                            <View style={estilos.headerModal}>
                                <Text style={estilos.textoHeader}>Adiconar Usuário</Text>
                            </View>
                        </View>

                        <View style={{ flex: 1 }}>
                            <Input
                                autoFocus = {true}
                                placeholder = 'Nome Usuário'
                                onChangeText = {(nmUsuario)=> this.setState({nmUsuario})}
                                value = {this.state.nmUsuario}
                                onSubmitEditing = {()=> this.inputEmail.focus()}
                            />
                            <Input
                                placeholder = 'E-mail'
                                onChangeText = {(deLogin)=> this.setState({deLogin})}
                                value = {this.state.deLogin}
                                ref = {ref=> this.inputEmail = ref}
                                onSubmitEditing = {()=> this.inputSenha.focus()}
                            />
                            <Input
                                placeholder = 'Senha'
                                onChangeText = {(cdSenha)=> this.setState({cdSenha})}
                                value = {this.state.cdSenha}
                                secureTextEntry = {true}
                                ref = {ref=> this.inputSenha = ref}
                                onSubmitEditing = {()=> this.inputRepeteSenha.focus()}
                            />
                            <Input
                                placeholder = 'Repita a Senha'
                                onChangeText = {(confirmaSenha)=> this.setState({confirmaSenha})}
                                value = {this.state.confirmaSenha}
                                secureTextEntry = {true}
                                ref = {ref=> this.inputRepeteSenha = ref}
                                onSubmitEditing = {()=> this.inputCnpjUsuario.focus()}
                            />
                            <Input
                                placeholder = "CNPJ"
                                onChangeText = {(cnpjUsuario)=> this.setState({cnpjUsuario})}
                                value = {this.state.cnpjUsuario}
                                ref = {ref => this.inputCnpjUsuario = ref}
                            />
                        </View>

                        <View style={estilos.alinhaBtns}>
                            <Button 
                                style={estilos.btnFechar} 
                                rounded onPress={this.props.fechar}
                                ref = {ref => this.salvarDados = ref}
                                onPress={()=>console.log('Teste')}
                            >
                                <Text>Salvar</Text>
                            </Button>
                            <Button style={estilos.btnSalvar} rounded onPress={this.props.fechar}>
                                <Text>Fechar</Text>
                            </Button>
                        </View>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.fechar}>
                    <View style={estilos.offSet} />
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const estilos = StyleSheet.create({
    offSet: {
        flex: 1,
        backgroundColor: 'rgba(47, 54, 64,0.5)'
    },

    viewPrincipal: {
        backgroundColor: 'rgba(47, 54, 64,0.5)',
        flex: 2,
    },

    viewComponentes: {
        marginHorizontal: 15,
        flex: 1,
        backgroundColor: '#fff'
    },
    headerModal: {
        height: 40,
        backgroundColor: 'rgba(39, 60, 117,1.0)',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    },
    btnFechar: {
        paddingHorizontal: 30,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    btnSalvar: {
        paddingHorizontal: 30,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    alinhaBtns: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }

})