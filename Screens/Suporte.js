import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Suporte({ navigation }) {
  return (

    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder='Tem algum problema? Procure aqui'
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

      <View style={[styles.square2, styles.white]}>
          <Text style={styles.Text2}>Problemas comuns:</Text>
          <Text style={styles.Text4}>
          -- Tenho problemas com o cadastro da minha demanda

          -- Tenho problemas com a entrega da demanda

          --  Tenho problemas com o pagamento da demanda

          --  Preciso falar com um atendente

          --  Minha demanda está atrasada

          --  Minha demanda chegou danificada

          --  Minha demanda foi trocada

          --  Minha demanda chegou com erro?
          </Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  TextTop1: {
    color: 'black',
    textAlign: "center",
    fontSize: 30,
    marginTop: -10,
    marginLeft: -30,
  },
  TextTop2: {
    color: 'black',
    textAlign: "center",
    fontSize: 30,
    marginLeft: 25,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  square1: {
    width: "45%", // Defina o tamanho padrão dos quadrados
    aspectRatio: 0.65, // Mantém a proporção quadrada
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
  square2: {
    width: "90%", // Defina o tamanho padrão dos quadrados
    aspectRatio: 0.65, // Mantém a proporção quadrada
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
  square3: {
    width: "45%", // Defina o tamanho padrão dos quadrados
    aspectRatio: 0.65, // Mantém a proporção quadrada
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
  square4: {
    width: "45%", // Defina o tamanho padrão dos quadrados
    aspectRatio: 0.65, // Mantém a proporção quadrada
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 2.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
  Text1: {
    color: 'white',
    fontSize: 26,
    marginTop: 12,
    textAlign: "center",
    marginBottom: 20,
  },
  Text2: {
    color: 'black',
    fontSize: 22,
    marginTop: 32,
    textAlign: "center",
    marginBottom: 30,
  },
  Text3: {
    color: 'black',
    textAlign: "center",
    fontSize: 34,
    marginTop: 20,
    marginBottom: 55,
  },
  Text4: {
    color: 'blue',
    fontSize: 15,
    marginTop: 30,
    marginBottom: 30,

  },
  red: {
    backgroundColor: 'red',
  },
  white: {
    backgroundColor: 'white',
  },
  gray: {
    backgroundColor: '#607274',
  },
  viewBox: {
    width: "80%",
    height: "55%",
  },
  viewLupa: {
    width: "77.5%",
    height: "50%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSuport: {
    width: "77.5%",
    height: "50%",
  },
  viewSettings: {
    width: "77.5%",
    height: "50%",
  },
  box: {
    width: 150,
    height: 150,
  },
  lupa: {
    width: 150,
    height: 150,
  },
  Suport: {
    width: 150,
    height: 150,
  },
  Settings: {
    width: 150,
    height: 150,
  },
});