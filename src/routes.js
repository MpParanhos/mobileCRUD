import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const appStack = createStackNavigator();

import home from './screens/home/index';
import query from './screens/query/index';
import queryId from './screens/queryId/index';
import put from './screens/put/index';
import delet from './screens/del/index';
import insert from './screens/insert/index'

export default function Routes(){
    return(
        <NavigationContainer>
            <appStack.Navigator>
                <appStack.Screen name='Home' component={ home }/>
                <appStack.Screen name='Consulta' component={ query }/>
                <appStack.Screen name='ConsultaId' component={ queryId }/>
                <appStack.Screen name='Alterar' component={ put }/>
                <appStack.Screen name='Deletar' component={ delet }/>
                <appStack.Screen name='Inserir' component={ insert }/>
            </appStack.Navigator>
        </NavigationContainer>
    );
}