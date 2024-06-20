import React, { useState }  from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import {database, doc, deleteDoc} from '../configs/firebaseConfig';
import { onSnapshot, collection } from 'firebase/firestore';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Pesquisa({ navigation }) {

  const [pesquisa, setPesquisa, deletePesquisa] = useState([])

  function PesquisaDemanda(){ 
    const user = auth.currentUser;
        if (!user) {
            console.error('nenhum user logado');
            return;
        }

        const tasksCollection = collection(database, "Transportadora");
        const q = query(tasksCollection, where("idUser", "==", user.uid)); //ta filtrando por user id e n ta monstrando os valor
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
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
        <ScrollView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={pesquisa}
          renderItem={({item} )=>{
            return(
            <View style={styles.tasks}>
                <TouchableOpacity
                    style={styles.btnDeletePesquisa}
                    onPress={()=>{
                        deletePesquisa(item.id)
                    }}>
                    <AntDesign name="delete" size={24} color="#373D20" />
                </TouchableOpacity>
                <Text>
                <View style={styles.valordemanda}>
                  <View style={styles.valordemandacod}>
                    <Text style={styles.valordemandacodtxt}>{item.codigo}</Text>
                  </View>
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
