import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { auth, onAuthStateChanged} from '../configs/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('')
 
  async function Submit() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      navigation.navigate('Home_tela', { idUser: userCredential.user.uid }); 

    } catch (error) {
      console.error('Error logging in:', error);
      //Alert.alert('Error', error.message);
      setError(true)
    }
  };
  useEffect(() => {
    const statusAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home_tela", { idUser: user.uid });
      }
    });

    return () => statusAuth();

  },[])

  {error === true
    ?
  <View style={styles.alert}>
    <Ionicons name="alert-circle" size={24} color="red" />
    <Text style={styles.txtalert}>email ou senha inválidos</Text>
  </View>
    :
  <View/>
  }
  {email === '' || password == ''
  ?
  <TouchableOpacity style={styles.btnLogin} disabled={true}>
    <Text style={styles.txtbtnLogin}>Login</Text>
  </TouchableOpacity>
  :
  <TouchableOpacity style={styles.btnLogin} onPress={Submit}>
    <Text style={styles.txtbtnLogin}>Login</Text>
  </TouchableOpacity> 
  
  }

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          style={styles.imagem}
          source={require('../ft/MAVERIK.png')}
        />
      </View>
      <Text style={styles.txt}>Faça seu login na</Text>
      <Text style={styles.txt1}>transportadora Maverik!</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Feather name="user" size={24} color="red" />
          <TextInput
            style={styles.input}
            placeholder="email: "
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
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
        <TouchableOpacity style={styles.botom} onPress={Submit}>
          <Text style={styles.txtbotom}>login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.cadstreaqdiv} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.cadastreaq} >Sing up!</Text>
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
  },
  txt1: {
    fontSize: 30,
    color: 'black',
    fontStyle: 'italic',
    marginBottom: 35,
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
    shadowOpacity: 0.25,  // Opacidade da sombra
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
    marginTop: 10,
    fontSize: 15,
    color: 'blue',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  
});
