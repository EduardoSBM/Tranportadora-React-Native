import React, { useState }  from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { onSnapshot } from 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import { database,doc,deleteDoc,collection } from '../configs/firebaseConfig';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function PesquisaouDeletaCaminhao({ navigation }) {

  const [pesquisa, setPesquisa] = useState(null)


  function Search(){
    const caminhao = collection(database, 'Caminhao') 
    const listen = onSnapshot(caminhao, (query) => { 
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
          <TouchableOpacity onPress={Search}>
          <Image
            style={styles.lupa}
            source={require('../ft/lupa.png')}
          />
          </TouchableOpacity>
        </View>  
      </View> 

      
      <View style={styles.resultadoPesquisa}>
        <Text>Clique no caminhão para alterar</Text>
        <FlatList
          data = {pesquisa}
          renderItem={({item})=> {
            return(
              <TouchableOpacity
              onPress={() => {
                navigation.navigate('AlterarCaminhao', {
                  id: item.id,
                  marca: item.marca,
                  kmrodados: item.kmrodados,
                  capacidade: item.capacidade,
                })
              }}>
                <View style={styles.valordemanda}>
                  <View style={styles.valordemandacod}>
                    <Text style={styles.valordemandacodtxt}>{item.codigo}</Text>
                  </View>
                  <View style={styles.valordemandaprodtsegrd}>
                    <Text style={styles.valordemandaprodtsegrdtxt}>{item.marca}</Text>
                  </View>
                  <View style={styles.valor}>
                    <Text style={styles.valortxt}>Quilometragem: {item.kmrodados}</Text>
                  </View>
                  <View style={styles.valordemandametdpendt}>
                    <View style={styles.valordemandametd}>
                      <Text style={styles.valordemandametdtxt}>Motorista: {item.codmotorista}</Text>
                    </View>
                    <View style={styles.valordemandapendt}>
                      <Text style={styles.valordemandapendttext}>Capacidade: {item.capacidade}</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.btnDeleteTask}
                    onPress={()=>{
                      deleteCaminhao(item.id)
                    }}>
                    <AntDesign name="delete" size={24} color="#373D20" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )
          }}
        />
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

  valordemanda: {
    margin: 20,
    width: 320,
    height: 190,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 1.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
  valordemandacod: {
    width: '100%',
    height: '10%',
  },
  valordemandacodtxt: {
    margin: 5,
    color: 'red',
    marginLeft: 270,
    fontSize: 10,
  },
  valordemandaprodtsegrd: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandaprodtsegrdtxt: {
    fontSize: 20,
  },
  valor: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valortxt: {
    color: 'gray',
    fontSize: 16,
    fontStyle: 'italic',
  },
  valordemandametdpendt: {
    width: '100%',
    height: '22.5%',
    flexDirection: 'row',
  },
  valordemandametd: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandametdtxt: {
    fontSize: 16,
  },
  valordemandapendt: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandapendttext: {
    fontSize: 12,
  },
  valordemandabancoendereco: {
    width: '100%',
    height: '22.5%',
    flexDirection: 'row',
  },
  valordemandabanco: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandabancotxt: {
    fontSize: 16,
  },
  valordemandaendereco: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandaenderecotxt: {
    fontSize: 15,
  },
});
