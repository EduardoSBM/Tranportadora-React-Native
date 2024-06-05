import React, { useState }  from 'react';
import { View, StyleSheet, Text, TextInput, Image } from 'react-native';

export default function Pesquisa({ navigation }) {

  const [serach, setSerach] = useState('');

  return (

    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder='Pesquise pelo código'
        placeholderTextColor="gray"
        id='serach'
        value={serach}
        onChange={e => setSerach(e.target.value)}
        />
        </View>
        <View style={[styles.square1, styles.red]}>
          <Image
            style={styles.lupa}
            source={require('../ft/lupa.png')}
          />
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
  form: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
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

  lupa: {
    width: "30px",
    height: "30px",
  },

  square1: {
    width: "5%", // Defina o tamanho padrão dos quadrados
    aspectRatio: 1.65, // Mantém a proporção quadrada
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
  red: {
    backgroundColor: 'red',
  },
});
