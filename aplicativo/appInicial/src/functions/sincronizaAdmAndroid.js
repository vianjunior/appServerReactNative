import { Alert } from 'react-native'
import axios from 'axios'
import { insereDadosAdmAndroidApp, buscaRegistrosAdmAndroid } from '../DAO/crudAdmAndroid'

export function sincronizaAdmAndroid() {
    axios.get('http://10.1.1.154:12000/buscaParamAdmAndroid')
        .then(resp => {
            if (resp.data == 'Erro ao buscar parâmetros (SQL) nas Configurações Mobile em /buscaParamAdmAndroid') {
                Alert.alert('Aviso', resp.data)
            } else {

                insereDadosAdmAndroidApp(resp.data)
                setTimeout(() => {
                    buscaRegistrosAdmAndroid()
                    alert('executou')
                }, 2000);


            }
        })
}