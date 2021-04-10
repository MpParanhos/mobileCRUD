import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  
        const navi = useNavigation();
        function goToQueryId(){
          navi.navigate('ConsultaId')
        };
        function goToDelete(){
          navi.navigate('Deletar')
        };
        function goToPut(){
          navi.navigate('Inserir')
        };
        

//###########################################################################################################

        const [ prodsDados, setProdDados ] = useState([  ]);

        async function loadDados(){
            const response = await api.get('produtos');
            setProdDados(response.data);
        };

        useEffect(()=>{
            loadDados();
        },[  ]);

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttom} onPress={ goToQueryId }><Text> Consultar por Id</Text></TouchableOpacity>
        <Text style={ styles.title }> Itens em estoque </Text>
        <StatusBar style="auto" />

    <FlatList
      style = { styles.list }
      data = { prodsDados }
      keyExtractor = { prodsDados => String(prodsDados.cod) }
      showsVerticalScrollIndicator = { false }
      renderItem = {({item: prodsDados}) => (
        <View style={ styles.itemList }>

            <TouchableOpacity style={styles.but2}
            onPress={ goToDelete }> 
                <Text style={styles.but1}> <Icon name='delete' size={20} color='#708090'/> </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.but2}
            onPress={ goToPut }> 
                <Text style={styles.but2}> <Icon name='edit' size={20} color='#708090'/> </Text>
            </TouchableOpacity>
            
            <Text style={styles.index}>Código:</Text>
            <Text>{prodsDados.cod}</Text>

            <Text style={styles.index}>Nome:</Text>
            <Text>{prodsDados.nome}</Text>

            <Text style={styles.index}>Descrição:</Text>
            <Text>{prodsDados.descri}</Text>

            <Text style={styles.index}>Quantidade:</Text>
            <Text>{prodsDados.qtda}</Text>

            <Text style={styles.index}>Fabricante:</Text>
            <Text>{prodsDados.fabricante}</Text>

            <Text style={styles.index}>Data/Hora:</Text>
            <Text>{prodsDados.datahora}</Text>
        </View>
      )}
    />


    </View>
  );
}