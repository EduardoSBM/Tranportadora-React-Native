import React, { useState } from 'react';
import { TextInput, StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { database, collection, addDoc } from '../configs/firebaseConfig';


export default function Cadastro({ navigation }) {
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  /* function postUsuario(){
    try{
      const userdocRef = collection(database, 'Usuario')
      addDoc(userdocRef, {
        nome: name,
        login: username,
        senha: password,
      })
      alert('usuario cadastrada')
      navigation.navigate('Login')
    }
    catch (e) {
      alert((e))
    }
  } */

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          style={styles.imagem}
          source={require('../ft/MAVERIK.png')}
        />
      </View>
      <Text style={styles.txt}>Realize seu cadastro!</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Feather name="user" size={24} color="red" />
          <TextInput
            style={styles.input}
            placeholder="Nome: "
            placeholderTextColor="gray"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Entypo name="login" size={22} color="red" />
          <TextInput
            style={styles.input}
            placeholder="Login: "
            placeholderTextColor="gray"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="red" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Senha: "
            placeholderTextColor="gray"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.botom} /* onPress={() => postUsuario()} */>
          <Text style={styles.txtbotom}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewCadastro}>
        <Image
          style={styles.iconCadastro}
          source={require('../ft/google.png')}
        />
        <Image
          style={styles.iconCadastro}
          source={require('../ft/apple.png')}
        />
      </View>

      <TouchableOpacity style={styles.cadstreaqdiv} 
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.cadastreaq} >Sign in!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  imagem: {
    height: 200,
    width: 200,
    marginBottom: 10,
  },
  txt: {
    fontSize: 30,
    color: 'black',
    fontStyle: 'italic',
    marginBottom: "8%",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 5,
    width: '70%',
    height: 45,
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 0.75,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
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
  cadstreaqdiv: {
    alignItems: "center",
  },
  cadastreaq: {
    marginTop: '6%',
    fontSize: 15,
    color: 'blue',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  viewCadastro: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "10%",
    marginBottom: "15px",
    marginTop: "15px",
  },
  iconCadastro: {
    height: "100%",
    width: "35%",
    
  },
});
