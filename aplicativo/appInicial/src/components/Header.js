import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import IconeIO from 'react-native-vector-icons/Ionicons'
import IconeFW from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'
export default props => (
    <View style={estilo.estiloViewPrincipal}>
        <View style={estilo.estiloAlinhamentoItens}>

            {
                props.voltarPara ?
                    <View>
                        <TouchableOpacity style={{ padding: 15 }} onPress={() => Actions.replace(props.voltarPara)}>
                            <IconeIO name='md-arrow-back' size={30} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    : null

            }

            <View>
                <Text style={estilo.estiloTextoHeader}>{props.titulo}</Text>
            </View>
            <View style={estilo.alinhaIcones}>
                <View style={estilo.primeiroIcone}>
                    <IconeIO name='md-add-circle' size={30} color='#FFF' />
                </View>

                <IconeFW name='retweet' size={30} color='#FFF' />
            </View>
        </View>
    </View>
)

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