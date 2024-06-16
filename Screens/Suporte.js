import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { database, doc, deleteDoc } from '../configs/firebaseConfig';
import { onSnapshot, collection } from 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';

export default function Suporte({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.campoPesquisa}>
        <TextInput
          style={styles.inputContainer}
          placeholder='Pesquise a demanda pelo código:'
          placeholderTextColor="gray"
        />
        <View style={styles.square1}>
          <TouchableOpacity >
            <Image
              style={styles.lupa}
              source={require('../ft/lupa.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewTextProblema}>
        <Text style={styles.TextProblema}> Problemas comuns:</Text>
      </View>
      <View style={styles.square}>
        <View style={styles.textgeral}>
          <Text style={styles.text}>* Tenho problemas com o cadastro da minha demanda</Text>
          <Text style={styles.text}>* Tenho problemas com a entrega da demanda</Text>
          <Text style={styles.text}>* Tenho problemas com o pagamento da demanda</Text>
          <Text style={styles.text}>* Preciso falar com um humano</Text>
          <Text style={styles.text}>* Minha demanda está atrasada</Text>
          <Text style={styles.text}>* Minha demanda chegou danificada</Text>
          <Text style={styles.text}>* Minha demanda chegou errada</Text>
        </View>
        <View style={styles.naoresolveu}>
          <Text style={styles.textT}>Não conseguiu resolver seu problema ?</Text>
          <Text style={styles.textTt}>Entre em contato conosco:</Text>
        </View>
        <View style={styles.viewcntt}>
          <View style={styles.cntt}>
            <View style={styles.viewmail}>
              <Image
                style={styles.imgmail}
                source={require('../ft/mail.png')}
              />
            </View>
            <View style={styles.viewTxt1}>
              <Text style={styles.txt1}>Maverik@gmail.com</Text>
            </View>
          </View>
          <View style={styles.cntt}>
            <View style={styles.viewphone}>
              <Image
                style={styles.imgphone}
                source={require('../ft/phone.png')}
              />
            </View>
            <View style={styles.viewTxt1}>
              <Text style={styles.txt1}>(48) 2732-3174</Text>
            </View>
          </View>
          <View style={styles.cntt}>
            <View style={styles.viewzapzap}>
              <Image
                style={styles.imgzapzap}
                source={require('../ft/zapzap.png')}
              />
            </View>
            <View style={styles.viewTxt1}>
              <Text style={styles.txt1}>(48) 93842-7473</Text>
            </View>
          </View>
        </View>
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
  viewTextProblema: {
    width: '92%',
    height: '5%',
    justifyContent: 'center',
    margin: 15,
  },
  TextProblema: {
    fontSize: 25,
    fontStyle: 'italic',
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
  square: {
    width: 370,
    height: 500,
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
  textgeral: {
    margin: 10,
    width: '95%',
    height: '40%',
  },
  text: {
    fontSize: 15,
    margin: 5,
    color: 'blue',
  },
  naoresolveu: {
    width: '95%',
    height: '20%',
    marginTop: 20,
  },
  textT: {
    marginHorizontal: 5,
    fontSize: 18,
    marginTop: 10,
    color: 'red',
  },
  textTt: {
    marginHorizontal: 5,
    fontSize: 14,
    color: 'gray',
  },
  viewcntt:{
    width: '100%',
    height: '80%',
    marginTop: -20,
  },
  cntt: {
    width: '100%',
    height: '10%',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewmail: {
    height: '100%',
    width: '20%',
    alignItems: "center",
    justifyContent: 'center',
    marginLeft: 18,
  },
  imgmail: {
    height: 50,
    width: 50,
  },
  viewphone: {
    height: '100%',
    width: '20%',
    alignItems: "center",
    justifyContent: 'center',
    marginLeft: 18,
  },
  imgphone: {
    height: 40,
    width: 40,
  },
  viewzapzap: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: "center",
    marginLeft: 18,
  },
  imgzapzap: {
    height: 40,
    width: 40,
  },
  viewTxt1: {
    height: '80%',
    width: '60%',
    justifyContent: 'center',
    marginLeft: 120,
  },
  txt1: {
    fontSize: 14,
    color: 'gray',
    fontStyle: 'italic'
  },
});
