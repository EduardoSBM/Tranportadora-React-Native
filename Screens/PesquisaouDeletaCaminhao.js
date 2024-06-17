import React, { useState }  from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import {database, doc, deleteDoc} from '../configs/firebaseConfig';
import { onSnapshot, collection } from 'firebase/firestore';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default function PesquisaouDeletaCaminhao({ navigation }) {

  const [pesquisa, setPesquisa] = useState([])

  function PesquisaDemanda(){
    const PesquisaDemanda = collection(database, 'Tasks') 
    const listen = onSnapshot(PesquisaDemanda, (query) => { 
      const list = [] 
      query.forEach((doc) => {
        list.push({...doc.data(), id: doc.id}) 
      })
      setPesquisa(list) 
    })
    return () => listen();
  } 


  return (

    <View style={styles.container}>
      <View style={styles.campoPesquisa}>
        <TextInput
        style={styles.inputContainer}
        placeholder='Pesquise o motorista pelo código:'
        placeholderTextColor="gray"
        id='serach'
        value={pesquisa}
        onChange={e => setSerach(e.target.value)}
        />
        <View style={styles.square1}>
          <TouchableOpacity onPress={PesquisaDemanda}>
          <Image
            style={styles.lupa}
            source={require('../ft/lupa.png')}
          />
          </TouchableOpacity>
        </View>
      </View> 
      <View style={styles.resultadoPesquisa}>
        <ScrollView>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          <Text>faz com que a demanda apareça aqui</Text>
          

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10
  },
  campoPesquisa: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },

  inputContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    margin: 5,
    width: 20,
    height: 45,
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 0.75,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },

  lupa: {
    width: 30,
    height: 30,
  },

  square1: {
    width: 70, 
    height: 40, // Mantém a proporção quadrada
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 1.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
  resultadoPesquisa: {
    width: 370, 
    height: 600,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 1.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
});
