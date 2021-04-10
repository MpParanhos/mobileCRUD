import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import api from '../../services/api';


export default function App() {

  const [cod, setCod] = useState([]);
  const [nome, setNome] = useState([]);
  const [descri, setDescri] = useState([]);
  const [qtda, setQtda] = useState([]);
  const [fabricante, setFabricante] = useState([]);

  async function alterar(){
    try{
        await api.put('produtos/' + cod,{
        nome: nome,
        descri: descri,
        qtda: qtda,
        fabricante: fabricante,
      })
    }catch(error){
      console.log('Unexpect error:' + error)
    }
  }


  return (
    <View style={styles.container}>
        <Text
          style={styles.title}
        >Alterar dados</Text>
        <StatusBar style="auto" />
        
        <View>
          <Text style={styles.text}>Código:</Text>
            <TextInput 
                style={styles.textInput}
                placeholder={'Código'}
                onChangeText={(value)=>setCod(value)}
            />

          <Text style={styles.text}>Nome:</Text>
            <TextInput 
                style={styles.textInput}
                placeholder={'nome'}
                onChangeText={(value)=>setNome(value)}
            />
              
          <Text style={styles.text}>Descrição:</Text>
            <TextInput 
                style={styles.textInput}
                placeholder={'Descrição'}
                onChangeText={(value)=>setDescri(value)}
            />

          <Text style={styles.text}>Quantidade:</Text>
            <TextInput 
                style={styles.textInput}
                placeholder={'Quantidade'}
                onChangeText={(value)=>setQtda(value)}
            />

          <Text style={styles.text}>Fabricante:</Text>
            <TextInput 
                style={styles.textInput}
                placeholder={'Fabricante'}
                onChangeText={(value)=>setFabricante(value)}
            />

          <TouchableOpacity style={styles.buttom}
            onPress={alterar}
          >
            <Text>Alterar</Text>
          </TouchableOpacity>     
        </View>
      </View>
  );
}