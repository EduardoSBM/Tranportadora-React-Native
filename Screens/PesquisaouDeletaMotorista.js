import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { database, doc, deleteDoc } from '../configs/firebaseConfig';
import { onSnapshot, collection } from 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function PesquisaouDeletaMotorista({ navigation }) {

  const [pesquisa, setPesquisa] = useState([])

  function Search() {
    const PesquisaMotorista = collection(database, 'Motorista')
    const listen = onSnapshot(PesquisaMotorista, (query) => {
      const list = []
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id })
      })
      setPesquisa(list)
    })
  }

  function deleteMotorista(id) {

    const taskDocRef = doc(database, "Motorista", id);
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
        <FlatList
          data={pesquisa}
          renderItem={({ item }) => {
            return (

              <View style={styles.itensgeral}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AlterarMotorista', {
                      id: item.id,
                      nome: item.nome,
                      cpf: item.cpf,
                      cargahoraria: item.cargahoraria,
                    })
                  }}>

                  <View style={styles.nome}>
                    <Text style={styles.nometxt}>{item.nome}</Text>
                    <Text style={styles.cpftxt}>CPF: {item.cpf}</Text>
                    <Text style={styles.horariotxt}>Carga Horária: {item.cargahoraria}</Text>
                  </View>

                </TouchableOpacity>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      deleteMotorista(item.id)
                    }}>
                    <AntDesign name="delete" size={24} color="#373D20" />
                  </TouchableOpacity>
                </View>
              </View>
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
  },
  itensgeral: {
    margin: 40,
    width: 320,
    height: 180,
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
  nome: {
    width: 320,
    height: 135,
    alignItems: 'center',
  },
  nometxt: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 20,
  },
  cpftxt: {
    color: 'gray',
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 25,
  },
  horariotxt: {
    fontSize: 16,

  },
});