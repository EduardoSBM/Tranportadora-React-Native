import React, { useState }  from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { onSnapshot } from 'firebase/firestore';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { database,doc,deleteDoc,collection } from '../configs/firebaseConfig';
import Pesquisa from './PesquisaDemanda';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function PesquisaouDeletaCaminhao({ navigation }) {

  const [pesquisa, setPesquisa] = useState(null)

  function PesquisaDemanda(){
    const PesquisaDemanda = collection(database, 'Caminhao') 
    const listen = onSnapshot(PesquisaDemanda, (query) => { 
      const list = [] 
      query.forEach((doc) => {
        list.push({...doc.data(), id: doc.id}) 
      })
      setPesquisa(list) 
    })
  }

  function deleteCaminhao(id){
        
    const taskDocRef = doc(database, "Caminhao", id);
    deleteDoc(taskDocRef)
    
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
          <FlatList
            data = {pesquisa}
            renderItem={({item})=> {
              return(
                <View>
                  <Text>
                    {item.capacidade}
                    {item.codmotorista}
                    {item.kmrodados}
                    {item.marca}
                  </Text>
                  <TouchableOpacity
                    style={styles.btnDeleteTask}
                    onPress={()=>{
                      deleteCaminhao(item.id)
                    }}>
                    <AntDesign name="delete" size={24} color="#373D20" />
                </TouchableOpacity>
                </View>
              )
            }}
          />
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
