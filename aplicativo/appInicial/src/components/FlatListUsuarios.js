import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import IconIO from 'react-native-vector-icons/Ionicons'
import IconFW from 'react-native-vector-icons/FontAwesome'

export default props => {
    itensLista = ({ item }) => (
        <Card
            containerStyle={estilos.conteinerCard}
            title={item.deLogin}
        >
            <View style={estilos.linhasCard}>
                <Text>Cód. Usuário: </Text>
                <Text>{item.cdUsuario}</Text>
            </View>
            <View style={estilos.linhasCard}>
                <Text>Senha: </Text>
                <Text>{item.cdSenha}</Text>
            </View>
            <View style={estilos.linhasCard}>
                <Text>CNPJ: </Text>
                <Text>{item.cnpjUsuario}</Text>
            </View>
            <View style={estilos.linhasCard}>
                <Text>Nome Usuário: </Text>
                <Text>{item.nmUsuario}</Text>
            </View>
            <View style={estilos.alinhamentoIconesCard}>
                <TouchableOpacity style = {estilos.toucheableIconesCard}>
                    <IconFW name='pencil' size={30} color={'#dcdde1'} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {estilos.toucheableIconesCard}
                    onPress = {()=> props.deletaUsuario(item.cdUsuario, item.nmUsuario)}
                >
                    <IconIO name='md-trash' size={30} color={'#dcdde1'} />
                </TouchableOpacity>
            </View>

        </Card>
    )
    return (
        <View style = {{flex : 1}}> 
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
        marginBottom : 15,
        marginTop: 2
    },

    linhasCard: {
        flexDirection: 'row'
    },

    alinhamentoIconesCard: {
        flexDirection: 'row',
        backgroundColor: '#0097e6',
        borderRadius: 25,
        justifyContent: 'space-around'
    },

    toucheableIconesCard:{
        paddingHorizontal: 15
    }
})