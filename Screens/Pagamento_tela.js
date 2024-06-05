import {View, Text, StyleSheet, Image} from 'react-native';

export default function Pagamentos({navigation}) {
  return (
    <View style = {styles.container} >
      <View>
      <Text> tipos de pagamentos: boletos, pix ou cartões </Text>
      </View>
      <View style={styles.img}>
          <Image 
            style={styles.imagem}
            source={require('../ft/urubu.jpg')} 
          />      
      </View>
    </View>
  );
}
const styles = StyleSheet.create({ 
  container:{
    justifyContent:'center',
    alignItems:'center',
    flex: 1,
    paddingBottom: -5,
  },
   img:{
    justifyContent:'center',
    alignItems: 'flex-start',
  },

  imagem: {
    height: 160,
    width: 160,
    
  },
});