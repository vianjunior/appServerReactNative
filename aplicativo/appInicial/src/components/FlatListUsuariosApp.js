import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'

export default props => {
    itensLista = ({ item }) => (
        <View style={{ marginBottom: 15, marginTop: 0 }}>

            <Card
                containerStyle={estilos.conteinerCard}
                title={item.deLoginApp}
            >
                <View style={estilos.linhasCard}>
                    <Text>Cód. Usuário: </Text>
                    <Text>{item.cdUsuarioApp}</Text>
                </View>
                <View style={estilos.linhasCard}>
                    <Text>Senha: </Text>
                    <Text>{item.cdSenhaApp}</Text>
                </View>
                <View style={estilos.linhasCard}>
                    <Text>CNPJ: </Text>
                    <Text>{item.cnpjUsuarioApp}</Text>
                </View>
                <View style={estilos.linhasCard}>
                    <Text>Nome Usuário: </Text>
                    <Text>{item.nmUsuarioApp}</Text>
                </View>
                <View style={estilos.linhasCard}>
                    <Text>Status: </Text>
                    <Text style={
                        item.statusUsuarioApp == 1
                            ?
                            estilos.labelUsuarioAtivo
                            :
                            item.statusUsuarioApp == 2
                                ?
                                estilos.labelUsuarioNaoSincronizado
                                :
                                item.statusUsuarioApp == 3
                                    ?
                                    estilos.labelUsuarioSincronizado
                                    :
                                    estilos.labelUsuarioInativo
                    }>
                        {
                            item.statusUsuarioApp == 2
                                ?
                                'Não Sincronizado'
                                :
                                item.statusUsuarioApp == 1
                                    ?
                                    'Ativo'
                                    :
                                    item.statusUsuarioApp == 3
                                        ?
                                        'Sincronizado'
                                        :
                                        'Inativo'
                        }
                    </Text>
                </View>

            </Card>
        </View>
    )
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={props.dados}
                renderItem={this.itensLista}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    conteinerCard: {
        borderRadius: 15,
        marginTop: 2
    },

    linhasCard: {
        flexDirection: 'row'
    },

    labelUsuarioNaoSincronizado: {
        fontWeight: 'bold',
        color: '#f1c40f'
    },

    labelUsuarioSincronizado: {
        fontWeight: 'bold',
        color: '#2980b9'
    },

    labelUsuarioInativo: {
        fontWeight: 'bold',
        color: 'tomato'
    },

    labelUsuarioAtivo: {
        fontWeight: 'bold',
        color: '#27ae60'
    }
})