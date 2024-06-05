import React, { useState } from 'react';
import { TextInput, StyleSheet, Image, TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { Feather, Fontisto, MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

export default function Demanda({ navigation }) {
  const [remetente, setRemetente] = useState('');
  const [enderecoRemetente, setEnderecoRemetente] = useState('');
  const [valorCargaSegurada, setValorCargaSegurada] = useState('');
  const [carga, setCarga] = useState('');
  const [pesoCarga, setPesoCarga] = useState('');
  const [volume, setVolume] = useState('');
  const [destinatario, setDestinatario] = useState('');
  const [enderecoDestinatario, setEnderecoDestinatario] = useState('');

  return (
    <ScrollView style={styles.container}>
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

      <View style={styles.square}>
        <View style={styles.inputContainer}>
          <Feather name="user" size={24} color="red" />
          <TextInput
            style={styles.input}
            placeholder="remetente: "
            placeholderTextColor="gray"
            value={remetente}
            onChangeText={setRemetente}
          />
        </View>
        <View style={styles.inputContainer}>
          <Fontisto name="map-marker-alt" size={24} color="red" />
          <TextInput
            style={styles.input}
            placeholder="Endereço do remetente: "
            placeholderTextColor="gray"
            value={enderecoRemetente}
            onChangeText={setEnderecoRemetente}
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="attach-money" size={24} color="red" />
          <TextInput
            style={styles.input}
            placeholder="Valor da carga segurada: "
            placeholderTextColor="gray"
            value={valorCargaSegurada}
            onChangeText={setValorCargaSegurada}
          />
        </View>
        <View style={styles.inputContainer}>
          <Fontisto name="dropbox" size={24} color="red" />
          <TextInput
            style={styles.input}
            placeholder="Carga : "
            placeholderTextColor="gray"
            value={carga}
            onChangeText={setCarga}
          />
        </View>
        <View style={styles.viewPV}>
          <View style={styles.inputContainerPV}>
            <FontAwesome5 name="weight-hanging" size={24} color="red" />
            <TextInput
              style={styles.input}
              placeholder="Peso : "
              placeholderTextColor="gray"
              value={pesoCarga}
              onChangeText={setPesoCarga}
            />
          </View>
          <View style={styles.inputContainerPV}>
            <Entypo name="resize-full-screen" size={24} color="red" />
            <TextInput
              style={styles.input}
              placeholder="Volume : "
              placeholderTextColor="gray"
              value={volume}
              onChangeText={setVolume}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
        <Feather name="user" size={24} color="red" />
          <TextInput
            style={styles.input}
            placeholder="Destinatário : "
            placeholderTextColor="gray"
            value={destinatario}
            onChangeText={setDestinatario}
          />
        </View>
        <View style={styles.minisquare}>

        </View>
          
        <View>
          <TouchableOpacity style={styles.botom} >
            <Text style={styles.txtbotom}>login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    //marginLeft: 15,
    
    
  },
  topo: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewBox: {
    height: '100%',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
  },
  viewTxt1: {
    fontSize: 22,
    height: '80%',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -20,
  },
  txt1: {
    fontSize: 26,
    fontStyle: 'italic'
  },

  square: {
    width: 350,
    height: 900,
    marginLeft: 20,
    borderRadius: 15,
    //marginHorizontal: 5,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 1.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
  minisquare: {
    width: '60%',
    aspectRatio: 0.65,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginTop: 6,
    marginBottom: 6,
    width: '85%',
    height: 45,
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 0.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
  inputContainerPV: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 10,
    margin: 10,
    marginVertical: 5,
    width: '40%',
    height: 45,
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 0.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
  viewPV: {
    flexDirection: 'row',
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

