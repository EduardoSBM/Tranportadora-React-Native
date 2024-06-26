import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { database, doc, deleteDoc } from '../configs/firebaseConfig';
import { onSnapshot, collection } from 'firebase/firestore';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function PesquisaouDeletaDemanda({ navigation }) {

  const [pesquisa, setPesquisa] = useState([])

  function Search() {
    const PesquisaDemanda = collection(database, 'Demanda')
    const listen = onSnapshot(PesquisaDemanda, (query) => {
      const list = []
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id })
      })
      setPesquisa(list)
    })
  }

  function deleteDemanda(id) {

    const taskDocRef = doc(database, "Demanda", id);
    deleteDoc(taskDocRef)
  }


  return (

    <View style={styles.container}>
      <View style={styles.campoPesquisa}>
        <TextInput
          style={styles.inputContainer}
          placeholder='Pesquise a demanda pelo código:'
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
        <FlatList
          data={pesquisa}
          renderItem={({ item }) => {
            return (
              <View style={styles.itensgeral}>
                <TouchableOpacity onPress={() => {
                  navigation.navigate('AlterarDemanda', {
                    id: item.id,
                    carga: item.carga,
                    destinatario: item.destinatario,
                    enderecoDestinatario: item.endereciDestinatario,
                    remetente: item.remetente,
                    enderecoRemetente: item.enderecoRemetente,
                    metodoEntrega: item.metodoEntrega,
                    peso: item.peso,
                    valor: item.valor,
                    volume: item.volume,
                  })
                }}>
                  <View >
                    <View style={styles.itemcarga}>
                      <Text style={styles.itemcargatxt}>{item.carga}</Text>
                    </View>
                    <View style={styles.itemdestinatario}>
                      <Text style={styles.itemdestinatariotxt}>Destinatario: {item.destinatario}</Text>
                      <Text style={styles.itemEnderecodestinatariotxt}>Endereço D: {item.enderecoDestinatario}</Text>
                    </View>
                    <View style={styles.itemRemetente}>
                      <Text style={styles.itemremetentetxt}>Remetente: {item.remetente}</Text>
                      <Text style={styles.itemEnderecoRemetentetxt}>Endereço R: {item.enderecoRemetente}</Text>
                    </View>
                    <View style={styles.VlPsVm}>
                      <Text style={styles.Vltxt}>Peso: {item.peso}</Text>
                      <Text style={styles.Pstxt}>Valor: {item.valor}</Text>
                      <Text style={styles.Vmtxt}>Volume: {item.volume}</Text>
                    </View>
                    <View style={styles.Mtd}>
                      <Text style={styles.Mtdtxt}>Método: {item.metodoEntrega}</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    deleteDemanda(item.id)
                  }}>
                  <AntDesign name="delete" size={24} color="#373D20" />
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
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
  },
  itensgeral: {
    margin: 40,
    width: 320,
    height: 260,
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
  itemcarga: {
    width: '100%',
    height: '10%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemcargatxt: {
    fontSize: 20,
    fontStyle: 'italic',
  },
  itemdestinatario: {
    margin: 10,
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemdestinatariotxt: {
    fontSize: 10,
    marginLeft: -10,
  },
  itemEnderecodestinatariotxt: {
    fontSize: 10,
    marginLeft: 50,
  },
  itemRemetente: {
    margin: 10,
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemremetentetxt: {
    fontSize: 10,
  },
  itemEnderecoRemetentetxt: {
    fontSize: 10,
    marginLeft: 12,
  },
  VlPsVm: {
    margin: 10,
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Vltxt: {
    fontSize: 10,
    marginLeft: 12,
  },
  Pstxt: {
    fontSize: 10,
    marginLeft: 12,
  },
  Vmtxt: {
    fontSize: 10,
    marginLeft: 12,
  },
  Mtd: {
    margin: 10,
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Mtdtxt: {
    fontSize: 10,
  },
});

