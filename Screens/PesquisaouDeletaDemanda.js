import React, { useState }  from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import {database, doc, deleteDoc} from '../configs/firebaseConfig';
import { onSnapshot, collection } from 'firebase/firestore';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function PesquisaouDeletaDemanda({ navigation }) {

  const [pesquisa, setPesquisa] = useState([])

  function Search(){
    const PesquisaDemanda = collection(database, 'Demanda')   
    const listen = onSnapshot(PesquisaDemanda, (query) => { 
      const list = [] 
      query.forEach((doc) => {
        list.push({...doc.data(), id: doc.id}) 
      })
      setPesquisa(list) 
    })
  } 

  function deleteDemanda(id){

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
        <ScrollView>
        <FlatList
            data = {pesquisa}
            renderItem={({item})=> {
              return(
                <View style={styles.valordemanda}>
                  <View style={styles.valordemandacod}>
                    <Text style={styles.valordemandacodtxt}>{item.destinatario}</Text>
                  </View>
                  <View style={styles.valordemandaprodtsegrd}>
                    <Text style={styles.valordemandaprodtsegrdtxt}>{item.carga}</Text>
                  </View>
                  <View style={styles.valor}>
                    <Text style={styles.valortxt}>Endereço do destinatario: {item.enderecoDestinatario}</Text>
                  </View>
                  <View style={styles.valordemandametdpendt}>
                    <View style={styles.valordemandametd}>
                      <Text style={styles.valordemandametdtxt}>EndereçoRemetente: {item.enderecoRemetente}</Text>
                    </View>
                    <View style={styles.valordemandapendt}>
                      <Text style={styles.valordemandapendttext}>Método: {item.metodoEntrega}</Text>
                    </View>
                    <View style={styles.valordemandabancoendereco}>
                      <Text style={styles.valordemandabancoenderecotxt}>Peso: {item.peso}</Text>
                    </View>
                    <View style={styles.valordemandabanco}>
                      <Text style={styles.valordemandabancotxt}>Remetente: {item.remetente}</Text>
                    </View>
                    <View style={styles.valordemandaendereco}>
                      <Text style={styles.valordemandaenderecotxt}>Valor: {item.valor}</Text>
                    </View>
                    <View style={styles.valordemandavol}>
                      <Text style={styles.valordemandavoltxt}>Volume: {item.volume}</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.btnDeleteTask}
                    onPress={()=>{
                      deleteDemanda(item.id)
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
  valordemanda: {
    margin: 40,
    width: 320,
    height: 240,
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
    backgroundColor: 'red',
  },
  valordemandacodtxt: {
    margin: 5,
    color: 'red',
    marginLeft: 270,
    fontSize: 10,
  },
  valordemandaprodtsegrd: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  valordemandaprodtsegrdtxt: {
    fontSize: 20,
  },
  valor: {
    width: '100%',
    height: '10%',
    backgroundColor: 'green',
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
    height: '60%',
    flexDirection: 'row',
  },
  valordemandametd: {
    backgroundColor: 'purple',
    width: '16,66666666666667%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandametdtxt: {
    fontSize: 16,
  },
  valordemandapendt: {
    width: '16,66666666666667%',
    height: '60%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandapendttext: {
    fontSize: 12,
  },
  valordemandabancoendereco: {
    width: '16,66666666666667%',
    backgroundColor: 'yellow',
    height: '60%',
    flexDirection: 'row',
  },
  valordemandabancoenderecotxt: {
    fontSize: 12,
  },
  valordemandabanco: {
    width: '16,66666666666667%',
    backgroundColor: 'gray',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandabancotxt: {
    fontSize: 16,
  },
  valordemandaendereco: {
    width: '16,66666666666667%',
    height: '60%',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandaenderecotxt: {
    fontSize: 15,
  },
  valordemandavol: {
    width: '16,66666666666667%',
    height: '60%',
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valordemandavoltxt: {
    fontSize: 15,
  },
});

