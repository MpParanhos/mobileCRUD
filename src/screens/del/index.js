import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import api from '../../services/api';


export default function App() {

  const [cod, setCod] = useState([]);
  
  async function deletar(){
    try{        
        await api.delete('produtos/'+ cod)
    }catch(error){
        console.log('Unexpect error:' + error)
    }
  }

  return (
    <View style={styles.container}>
        <Text
        style={styles.title}>
            Deletar Dado
        </Text>
        <StatusBar style="auto" />
            <View>
                <Text style={styles.text}>Código:</Text>
                    <TextInput 
                        style={styles.textInput}
                        onChangeText={(value)=>setCod(value)}
                    />
                
                <TouchableOpacity style={styles.buttom}
                    onPress={deletar}>
                        <Text>Deletar</Text>
                </TouchableOpacity>     
            </View>
        </View>
  );
}