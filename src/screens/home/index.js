import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function App() {
  
  const navi = useNavigation();
  function goToQuery(){
    navi.navigate('Consulta')
  };
  function goToDelete(){
    navi.navigate('Deletar')
  };
  function goToPut(){
    navi.navigate('Alterar')
  };
  function goToInsert(){
    navi.navigate('Inserir')
  };


  return (
      <View style={styles.container}>
        <Text style={styles.title}> Controle de estoque </Text>
        <Image style={styles.logo} source = {require('../../images/database.png')}/>
        <StatusBar style="auto" />
        <View style={styles.float}>
          <TouchableOpacity style={styles.but1}
          onPress={ goToQuery }> 
            <Text style={styles.text}>
              Consultar
            </Text>
            <Text> <Icon name='search1' size={20} color='#708090'/> </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.but2}
          onPress={ goToDelete }> 
            <Text style={styles.text}>
              Deletar
            </Text>
            <Text> <Icon name='delete' size={20} color='#708090'/> </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.but3}
          onPress={ goToInsert }> 
            <Text style={styles.text}>
              Inserir
            </Text>
            <Text> <Icon name='addfile' size={20} color='#708090'/> </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.but4}
          onPress={ goToPut }> 
            <Text style={styles.text}>
              Alterar
            </Text>
            <Text> <Icon name='edit' size={20} color='#708090'/> </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
