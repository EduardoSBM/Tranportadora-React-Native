import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';

export default function Configs({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.square1}>
        <View style={styles.topo}>
          <View style={styles.imgusuario}>
            <Image
              style={styles.user}
              source={require('../ft/user.png')}
            />
          </View>
          <View style={styles.textusuario}>
            <Text style={styles.textusuarioT}> Usuário: </Text>
            <Text style={styles.textusuariot}> xxxxxxx</Text>
          </View>
          <View style={styles.textvermais}>
            <Text style={styles.textvermaist}> ver mais* </Text>
          </View>
        </View>
      </View>
      <View style={styles.square2}>
        <View style={styles.apptextgeral}>
          <Text style={styles.apptext}>App</Text>
        </View>
        <View style={styles.notificacaogeral}>
          <View style={styles.textview}>
            <Text style={styles.text}>Notificações</Text>
          </View>
          <View style={styles.noticongeral}>
            <View style={styles.viewnoticon}>
              <Image
                style={styles.noticon}
                source={require('../ft/noti.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.lightmodegeral}>
          <View style={styles.textview}>
            <Text style={styles.text}>modo claro</Text>
          </View>
          <View style={styles.lightmodeicongeral}>
            <View style={styles.viewlightmodeicon}>
              <Image
                style={styles.lightmodeicon}
                source={require('../ft/lightmode.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.idiomageral}>
          <View style={styles.textview}>
            <Text style={styles.text}>Idioma</Text>
          </View>
          <View style={styles.idiomaicongeral}>
            <View style={styles.viewIdiomaicon}>
              <Image
                style={styles.Idiomaicon}
                source={require('../ft/idioma.png')}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.square1}>
        <View style={styles.textgeral}>
          <Text style={styles.apptext}>Acessibilidade</Text>
        </View>
        <View style={styles.geral}>
          <View style={styles.icongeral}>
            <View style={styles.viewicon}>
              <Image
                style={styles.icon}
                source={require('../ft/acessibilidade.png')}
              />
            </View>
          </View>
          <View style={styles.textvermais2}>
            <Text style={styles.textvermaist2}> ver mais* </Text>
          </View>
        </View>
      </View>


      <View style={styles.square1}>
        <View style={styles.textgeral}>
          <Text style={styles.apptext}>Deslogar</Text>
        </View>
        <View style={styles.geral}>
          <View style={styles.icongeral}>
            <View style={styles.viewicon}>
              <Image
                style={styles.icon}
                source={require('../ft/deslogar.png')}
              />
            </View>
          </View>
          <View style={styles.textdeslogar}>
            <Text style={styles.textdeslogart}> Deslogar </Text>
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
  square1: {
    display: 'flex',
    margin: 10,
    width: 370,
    height: 100,
    borderRadius: 15,
    marginHorizontal: 5,
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 1.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
  topo: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  imgusuario: {
    height: '100%',
    width: '25%',
  },
  user: {
    height: '100%',
    width: '100%',
  },
  textusuario: {
    height: '100%',
    width: '50%',
  },
  textusuarioT: {
    fontSize: 22,
    marginTop: 10,
  },
  textusuariot: {
    fontSize: 16,
    marginHorizontal: 2,
    color: 'gray',
  },
  textvermais: {
    height: '100%',
    width: '20%',
    alignItems: 'center',
  },
  textvermaist: {
    marginTop: 70,
    color: 'gray',
  },
  square2: {
    display: 'flex',
    margin: 10,
    width: 370,
    height: 220,
    borderRadius: 15,
    marginHorizontal: 5,
    justifyContent: 'center',
    backgroundColor: 'white', // Para garantir que a sombra seja visível
    shadowColor: 'gray',  // Cor da sombra
    shadowOffset: { width: 0, height: 4 },  // Deslocamento da sombra
    shadowOpacity: 1.25,  // Opacidade da sombra
    shadowRadius: 3.84,  // Raio da sombra
    elevation: 5,  // Para Android, adiciona elevação
  },
  apptextgeral: {
    width: '100%',
    height: '9%',
  },
  apptext: {
    fontSize: 16,
    marginHorizontal: 10,
    color: 'gray',
  },
  lightmodegeral: {
    width: '100%',
    height: '29%',
    flexDirection: 'row',
  },
  textview: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
  },
  lightmodeicongeral: {
    width: '50%',
    height: '100%',
  },
  viewlightmodeicon: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightmodeicon: {
    height: 50,
    width: 100,
  },
  idiomageral: {
    width: '100%',
    height: '29%',
    flexDirection: 'row',
  },
  idiomaicongeral: {
    width: '50%',
    height: '100%',
  },
  viewIdiomaicon: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Idiomaicon: {
    height: 60,
    width: 70,
  },
  notificacaogeral: {
    width: '100%',
    height: '29%',
    flexDirection: 'row',
  },
  noticongeral: {
    width: '50%',
    height: '100%',
  },
  viewnoticon: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noticon: {
    height: 60,
    width: 70,
  },
  geral:{
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  textgeral: {
    width: '100%',
    height: '15%',
    margin: 5,
  },
  icongeral: {
    height: '75%',
    width: '50%',
  },
  viewicon: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  icon: {
    height: 60,
    width: 70,
    marginLeft: 30,
  },
  textvermais2: {
    height: '75%',
    width: '50%',
    alignItems: 'center',
  },
  textvermaist2: {
    marginTop: 45,
    marginLeft: 85,
    color: 'gray',
  },
  textdeslogar: {
    height: '75%',
    width: '50%',
    justifyContent: 'center',

  },
  textdeslogart: {
    fontSize: 22,
    color: 'red',
    marginTop: -10,
    marginLeft: 30,
  },

});
