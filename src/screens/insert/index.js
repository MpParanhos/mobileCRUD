import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import style from '../home/style';

import styles from './styles';

export default function App() {

  const [nome, setNome] = useState();
  const [descri, setDesc] = useState();
  const [qtda, setQtda] = useState();
  const [fabricante, setFabric] = useState();

  async function cadastrar(){
    try{
      await api.post('produtos',
        {nome: nome,
        descri: descri,
        qtda: qtda,
        fabricante: fabricante})
    }catch(error){
      console.log('error: ',error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Dados</Text>
      <StatusBar style="auto" />
      <View>
        <Text style={ styles.text }>Nome:</Text>
        <TextInput
        style={ styles.textInput }
        placeholder={'Insira o nome'}
        onChangeText={(value)=> setNome(value)}/>

        <Text style={ styles.text }>Descrição:</Text>
        <TextInput
        style={ styles.textInput }
        placeholder={'Insira a descrição'}
        onChangeText={(value)=> setDesc(value)}/>

        <Text style={ styles.text }>Quantidade:</Text>
        <TextInput
        style={ styles.textInput }
        placeholder={'Insira a quantidade'}
        onChangeText={(value)=> setQtda(value)}/>

        <Text style={ styles.text }>Fabricante:</Text>
        <TextInput
        style={ styles.textInput }
        placeholder={'Insira o Fabricante'}
        onChangeText={(value)=> setFabric(value)}/>

        <TouchableOpacity style={ styles.buttom }
        onPress={cadastrar}>
          <Text>Cadastrar</Text> 
        </TouchableOpacity>        

      </View>
    </View>
  );
}