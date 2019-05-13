import React from 'react'
import {Router, Stack, Scene} from 'react-native-router-flux'
import TelaInicial from './views/TelaInicial'
import ListaRegistros from './views/ListaRegistros'
import ListaUsuariosApp from './views/ListaUsuariosApp'

export default ()=>(
    <Router>
        <Stack hideNavBar = {true}>
            <Scene key='telaInicial' component={TelaInicial} initial/>
            <Scene key='listaRegistros' component={ListaRegistros}/>
            <Scene key='listaUsuariosApp' component={ListaUsuariosApp}/>
        </Stack>
    </Router>
)