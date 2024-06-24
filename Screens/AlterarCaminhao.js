import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather, Ionicons, FontAwesome5, FontAwesome6, Entypo } from '@expo/vector-icons';
import {database, doc, updateDoc, collection } from '../configs/firebaseConfig'; 



export default function AlterarCaminhao({ navigation, route }) {
    const [marca, setMarca] = useState(route.params.marca);
    const [kmrodados, setKmrodados] = useState(route.params.kmrodados);
    const [capacidade, setCapacidade] = useState(route.params.capacidade);
    const id = route.params.id

    function edit(id) {
        try{
            const caminhaoRef = doc(database, 'Caminhao', id)
            updateDoc(caminhaoRef, {
                marca: marca,
                kmrodados: kmrodados,
                capacidade: capacidade,
            })
            alert('Editado com sucesso')
            navigation.navigate('Menuadm')
        }
        catch (e) {
            alert((e))
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.txt}>Insira os dados!</Text>
            </View>
            <View style={styles.square}>
                <View style={styles.inputContainer}>
                    <Ionicons name="business" size={24} color="red" />
                    <TextInput
                        style={styles.input}
                        placeholder="Marca: "
                        placeholderTextColor="gray"
                        value={marca}
                        onChangeText={setMarca}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome5 name="truck-monster" size={24} color="red" />
                    <TextInput
                        style={styles.input}
                        placeholder="km rodados: "
                        placeholderTextColor="gray"
                        value={kmrodados}
                        onChangeText={setKmrodados}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome5 name="weight-hanging" size={24} color="red" />
                    <TextInput
                        style={styles.input}
                        placeholder="capacidade: "
                        placeholderTextColor="gray"
                        value={capacidade}
                        onChangeText={setCapacidade}
                    />
                </View>
                <View>
                    <TouchableOpacity 
                        style={styles.botom}
                        onPress={() => edit(id)}
                    >
                        <Text style={styles.txtbotom}>Alterar caminão</Text>
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
        alignItems: "center",
        justifyContent: "center",
    },
    square: {
        width: 370,
        height: 270,
        borderRadius: 15,
        margin: 15,
        alignItems: "center",
        justifyContent: "center",
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
        backgroundColor: 'white',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
    },
    top: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 30,
        fontStyle: 'italic',
    },
    botom: {
        width: 180,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 20,
        backgroundColor: 'red',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.75,
        shadowRadius: 3.84,
        elevation: 5,
    },
    txtbotom: {
        fontSize: 20,
        color: 'white',
    },
});
