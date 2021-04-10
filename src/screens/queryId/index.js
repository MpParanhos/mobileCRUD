import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import api from '../../services/api';

export default function App() {

  const [cod, setCod] = useState(0);
  const [prodDadosNome, setProdDadosNome] = useState('');
  const [prodDadosDescri, setProdDadosDescri] = useState('');
  const [prodDadosQtda, setProdDadosQtda] = useState('');
  const [prodDadosFabricante, setProdDadosFabricante] = useState('');
  const [prodDadosDataHora, setProdDadosDataHora] = useState('');

  async function consultar(){
    try{
      const response = await api.get('produtos/' + cod);

      if(Object.keys(response.data).length === 0){
        console.log('Registro não encontrado!');
        setProdDadosNome('');
        setProdDadosDescri('');
        setProdDadosQtda('');
        setProdDadosFabricante('');
        setProdDadosDataHora('');
      }else{
        setProdDadosNome(response.data[0].nome);
        setProdDadosDescri(response.data[0].descri);
        setProdDadosQtda(response.data[0].qtda);
        setProdDadosFabricante(response.data[0].fabricante);
        setProdDadosDataHora(response.data[0].datahora);
      }
    }catch(error){
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Consultar produtos por ID</Text>
      <StatusBar style="auto" />

      <View style={styles.containerForm}>
        <Text style={styles.text}> Código: </Text>    
          <TextInput style={styles.box}
          onChangeText={(v)=> setCod(v)} />  

        <Text style={styles.text}> Nome: </Text>
          <Text style={styles.box}> { prodDadosNome } </Text>

        <Text style={styles.text}> Descrição: </Text>
          <Text style={styles.box}> { prodDadosDescri } </Text>

        <Text style={styles.text}> Quantidade: </Text>
          <Text style={styles.box}> { prodDadosQtda } </Text>

        <Text style={styles.text}> Fabricante: </Text>
          <Text style={styles.box}> { prodDadosFabricante } </Text>

        <Text style={styles.text}> Data/Hora: </Text>
          <Text style={styles.box}> { prodDadosDataHora } </Text>

        <TouchableOpacity
          style={styles.buttom}
          onPress={consultar} >
          <Text>Consultar</Text>
        </TouchableOpacity>
      </View>    

    </View>
  );
}

