import React, { useState }  from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import {database, doc, deleteDoc} from '../configs/firebaseConfig';
import { onSnapshot, collection } from 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Pesquisa({ navigation }) {

  const [pesquisa, setPesquisa] = useState([])

  function PesquisaDemanda(){ 
    /* const user = auth.currentUser;
        if (!user) {
            console.error('nenhum user logado');
            return;
        } */

        const demanda = collection(database, "Demanda");
        //const q = query(demanda, where("idUser", "==", user.uid)); 
        const unsubscribe = onSnapshot(demanda,/* q, */ (querySnapshot) => {
            const list = [];
            querySnapshot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setPesquisa(list);
        });

        return () => unsubscribe();
  } 

  function deletePesquisa(id){
        
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
        onChangeText={setPesquisa}
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
        <FlatList
          data={pesquisa}
          renderItem={({item} )=>{
            return(
              <View style={styles.tasks}>
                <Text>
                  <View style={styles.valordemanda}>
                    <View style={styles.valordemandaprodtsegrd}>
                      <Text style={styles.valordemandaprodtsegrdtxt}>{item.carga}</Text>
                    </View>
                    <View style={styles.valor}>
                      <Text style={styles.valortxt}>Destinatario: {item.destinatario}</Text>
                    </View>
                    <View style={styles.valordemandametdpendt}>
                      <View style={styles.valordemandametd}>
                        <Text style={styles.valordemandametdtxt}>Endereço do destinatario: {item.enderecoDestinatario}</Text>
                      </View>
                      <View style={styles.valordemandapendt}>
                        <Text style={styles.valordemandapendttext}>Endereço do remetente: {item.enderecoRemetente}</Text>
                      </View>
                      <View style={styles.valordemandapendt}>
                        <Text style={styles.valordemandapendttext}>Metodo de entrega: {item.metodoEntrega}</Text>
                      </View>
                      <View style={styles.valordemandapendt}>
                        <Text style={styles.valordemandapendttext}>Peso: {item.peso}</Text>
                      </View>
                      <View style={styles.valordemandapendt}>
                        <Text style={styles.valordemandapendttext}>Remetente: {item.remetente}</Text>
                      </View>
                      <View style={styles.valordemandapendt}>
                        <Text style={styles.valordemandapendttext}>Valor: {item.valor}</Text>
                      </View>
                      <View style={styles.valordemandapendt}>
                        <Text style={styles.valordemandapendttext}>Volume: {item.volume}</Text>
                      </View>
                    </View>
                  </View>
                </Text>
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
    textAlign: 'center',
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
