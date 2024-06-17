import {  StyleSheet, TouchableOpacity, Text, View, } from 'react-native';

export default function CrudDemanda({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.viewtext}>
                <Text style={styles.text}>Escolha a ação desejada!</Text>
            </View>
            <View style={styles.escolhageral}>
                <View style={styles.view}>
                    <TouchableOpacity style={styles.botom} onPress={() => navigation.navigate('AlterarDemanda')}>
                        <Text style={styles.txt}>Alterar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                <TouchableOpacity style={styles.botom} onPress={() => navigation.navigate('PesquisaouDeletaDemanda')}>
                        <Text style={styles.txt}>Pesquisar ou deletar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    viewtext: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 26,
        fontStyle: 'italic',
    },
    escolhageral: {
        width: 370,
        height: 400,
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
    view: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botom: {
        width: 240,
        height: 70,
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.75,
        shadowRadius: 3.84,
        elevation: 5,
      },
      txt: {
        color: 'white',
        fontSize: 22,
        fontStyle: 'italic',
      },
});