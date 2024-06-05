import React, { useState } from 'react';
import { TextInput, StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Demanda({ navigation }) {
  const [remetente, setRemetente] = useState('');
  const [enderecoRemetente, setEnderecoRemetente] = useState('');
  const [enderecoDestinatario, setEnderecoDestinatario] = useState('');
  const [destinatario, setDestinatario] = useState('');
  const [valor, setValor] = useState('');
  const [carga, setCarga] = useState('');
  const [pesoCarga, setPesoCarga] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <View style={styles.viewBox}> 
          <Image
          style={styles.box}
              source={require('../ft/box.png')}>
          </Image>
        </View>
        <View style={styles.viewTxt1}>
          <Text style={styles.txt1}> Crie sua demanda!</Text>
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Feather name="remetente" size={24} color="red" />
          <TextInput
            style={styles.input}
            placeholder="remetente: "
            placeholderTextColor="gray"
            value={remetente}
            onChangeText={setRemetente}
          />
        </View>

      </View>
      <View>
        <TouchableOpacity style={styles.botom} >
          <Text style={styles.txtbotom}>login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  topo: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    marginBottom: 200,
  },
  viewBox: {
    height: '100%',
    width: '40%',
  },
  box: {
    height: '100%',
    width: '100%',
  },
  viewTxt1: {
    fontSize: 22,
    height: '80%',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt1: {
    fontSize:26,
    fontStyle: 'italic'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 5,
    width: '70%',
    height: 45,
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 0.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  botom: {
    width: 160,
    height: 43,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: 'red',
    backgroundColor: 'red', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 6 },  // Deslocamento da sombra
    shadowOpacity: 0.75,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,
    marginBottom: "8%",
    marginTop: "6%",
  },
  txtbotom: {
    fontSize: 20,
    color: 'white',
  },
  
});

