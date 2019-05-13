import React from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native'
import { Button } from 'native-base';
import { Input, Card } from 'react-native-elements'
import { insereUsuarioApp } from '../DAO/crudUsuarioApp'

export default class ModalAddUsuario extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nmUsuario: '',
            deLogin: '',
            cdSenha: '',
            confirmaSenha: '',
            cnpjUsuario: ''
        }
    }

    insererirUsuario(dados) {
        if (
            dados.nmUsuario.trim().length == 0 ||
            dados.deLogin.trim().length == 0 ||
            dados.cdSenha.trim().length == 0 ||
            dados.confirmaSenha.trim().length == 0 ||
            dados.cnpjUsuario.trim().length == 0) {
            Alert.alert('Aviso!', 'Existem campos obrigatórios não preenchidos!')
        } else {
            if (this.state.cdSenha != this.state.confirmaSenha) {
                Alert.alert('Aviso!', 'As senhas não conferem')
            } else {
                let resultado = insereUsuarioApp(dados)
                if (resultado) {
                    this.props.atualizaListaUsuariosApp()
                    Alert.alert('Aviso', 'Dados inseridos com sucesso!',
                        [
                            {
                                text: 'Ok', onPress: () => this.props.fechar()
                            }
                        ]
                    )
                }
                
                this.setaEstadoInicial()
            }

        }
    }

    setaEstadoInicial(){
        this.setState({
            nmUsuario: '',
            deLogin: '',
            cdSenha: '',
            confirmaSenha: '',
            cnpjUsuario: ''
        })
    }

    render() {
        return (
            <Modal onRequestClose={this.props.fechar} visible={this.props.mostraModal} transparent animationType='fade'>
                <TouchableWithoutFeedback onPress={this.props.fechar}>
                    <View style={estilos.offSet} />
                </TouchableWithoutFeedback>
                <View style={{ backgroundColor: 'rgba(47, 54, 64,0.5)' }}>


                    <Card title={'Adicionar Registros'} containerStyle={estilos.containerCard}>

                        <View >
                            <Input
                                autoFocus={true}
                                placeholder='Nome Usuário'
                                onChangeText={(nmUsuario) => this.setState({ nmUsuario })}
                                value={this.state.nmUsuario}
                                onSubmitEditing={() => this.inputEmail.focus()}
                                errorMessage={this.state.nmUsuario.trim().length <= 0 ? 'Campo obrigatório' : null}
                            />
                            <Input
                                placeholder='E-mail'
                                onChangeText={(deLogin) => this.setState({ deLogin })}
                                value={this.state.deLogin}
                                ref={ref => this.inputEmail = ref}
                                onSubmitEditing={() => this.inputSenha.focus()}
                                errorMessage={this.state.deLogin.trim().length <= 0 ? 'Campo obrigatório' : null}
                            />
                            <Input
                                placeholder='Senha'
                                onChangeText={(cdSenha) => this.setState({ cdSenha })}
                                value={this.state.cdSenha}
                                secureTextEntry={true}
                                ref={ref => this.inputSenha = ref}
                                onSubmitEditing={() => this.inputRepeteSenha.focus()}
                                errorMessage={this.state.cdSenha.trim().length <= 0 ? 'Campo obrigatório' : null}
                            />
                            <Input
                                placeholder='Repita a Senha'
                                onChangeText={(confirmaSenha) => this.setState({ confirmaSenha })}
                                value={this.state.confirmaSenha}
                                secureTextEntry={true}
                                ref={ref => this.inputRepeteSenha = ref}
                                onSubmitEditing={() => this.inputCnpjUsuario.focus()}
                                errorMessage={
                                    this.state.confirmaSenha.trim().length <= 0
                                        ?
                                        'Campo obrigatório'
                                        :
                                        this.state.cdSenha != this.state.confirmaSenha
                                            ?
                                            'Senhas incompatíveis'
                                            :
                                            null
                                }
                            />
                            <Input
                                placeholder="CNPJ"
                                onChangeText={(cnpjUsuario) => this.setState({ cnpjUsuario })}
                                value={this.state.cnpjUsuario}
                                ref={ref => this.inputCnpjUsuario = ref}
                                errorMessage={this.state.cnpjUsuario.trim().length <= 0 ? 'Campo obrigatório' : null}
                                maxLength={14}
                            />
                        </View>

                        <View style={estilos.alinhaBtns}>
                            <Button
                                style={estilos.btnSalvar}
                                rounded onPress={this.props.fechar}
                                ref={ref => this.salvarDados = ref}
                                onPress={() => this.insererirUsuario(this.state)}
                            >
                                <Text>Salvar</Text>
                            </Button>
                            <Button style={estilos.btnFechar} rounded onPress={this.props.fechar}>
                                <Text>Fechar</Text>
                            </Button>
                        </View>

                    </Card>
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
        justifyContent: 'space-around',
        marginTop: 15
    },
    containerCard: {
        marginTop: 0,
        marginHorizontal: 10,
        borderRadius: 10,

    }

})