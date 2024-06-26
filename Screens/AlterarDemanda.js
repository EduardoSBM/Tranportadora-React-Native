import React, { useState } from 'react';
import { TextInput, StyleSheet, Image, TouchableOpacity, Text, View, ScrollView, Alert, Modal, Pressable } from 'react-native';
import { Feather, Fontisto, MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import {database, doc, updateDoc, collection } from '../configs/firebaseConfig'; 

export default function AlterarDemanda({ navigation, route }) {
    const [remetente, setRemetente] = useState(route.params.remetente);
    const [enderecoRemetente, setEnderecoRemetente] = useState(route.params.enderecoRemetente);
    const [valorCargaSegurada, setValorCargaSegurada] = useState(route.params.valor);
    const [carga, setCarga] = useState(route.params.carga);
    const [pesoCarga, setPesoCarga] = useState(route.params.peso);
    const [volume, setVolume] = useState(route.params.volume);
    const [destinatario, setDestinatario] = useState(route.params.destinatario);
    const [enderecoDestinatario, setEnderecoDestinatario] = useState(route.params.enderecoDestinatario);
    const id = route.params.id;
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState(route.params.metodoEntrega);

    const methods = ['A', 'B', 'C', 'D', 'E'];

    function edit(id) {
        try{
          const demandaRef = doc(database, 'Demanda', id)
          updateDoc(demandaRef, {
            carga: carga,
            destinatario: destinatario,
            endereciDestinatario: enderecoDestinatario,
            enderecoRemetente: enderecoRemetente,
            peso: pesoCarga,
            volume: volume,
            remetente: remetente,
            valor: valorCargaSegurada,
            metodoEntrega: selectedMethod,
          })
          alert('Editado com sucesso')
          navigation.navigate('Menuadm')
        } 
        catch (e) {
          alert((e))
        }
      }

    return (
        <ScrollView style={styles.container}>
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
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <View style={styles.textGeral}>

                                        <Text style={styles.modalTextTT}>COLETAS E ENTREGAS!</Text>

                                        <View>
                                            <Text style={styles.modalTextT}>COLETA A :</Text>
                                            <Text style={styles.modalText}>Remetente leva na transportadora</Text>
                                            <Text style={styles.modalTextT}>COLETA B :</Text>
                                            <Text style={styles.modalText}>Transportadora busca no endereço do remetente</Text>
                                            <Text style={styles.modalTextT}>ENTREGA A : </Text>
                                            <Text style={styles.modalText}>Destinatário pega na transportadora</Text>
                                            <Text style={styles.modalTextT}>ENTREGA B : </Text>
                                            <Text style={styles.modalText}>Transportadora leva ao endereço do destinatário</Text>

                                            <View style={styles.modalTextTT}>
                                                <Text style={styles.modalTextTT}>MÉTODOS</Text>
                                            </View>

                                            <Text style={styles.modalTextT2}>A :</Text>
                                            <Text style={styles.modalText}>Coleta B e Entrega B</Text>
                                            <Text style={styles.modalTextT2}>B :</Text>
                                            <Text style={styles.modalText}>Coleta B e Entrega A</Text>
                                            <Text style={styles.modalTextT2}>C :</Text>
                                            <Text style={styles.modalText}>Coleta A e Entrega B</Text>
                                            <Text style={styles.modalTextT2}>D :</Text>
                                            <Text style={styles.modalText}>Coleta A e Entrega A</Text>
                                            <Text style={styles.modalTextT2}>E :</Text>
                                            <Text style={styles.modalText}>Coleta B e Entrega B</Text>
                                            <Text style={styles.modalText2}>*O método "E" não passa pela transportadora e para ser realizado deve gerar o documento de expedição.</Text>
                                        </View>
                                    </View>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Voltar para o pedido</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => setModalVisible(true)}>
                            <Text style={styles.textStyle}>Ver métodos de transporte</Text>
                        </Pressable>
                        {methods.map((method, index) => (
                            <View key={index} style={[styles.checkBox, index === 0 && styles.checkBoxI]}>
                                <CheckBox style={styles.checkBox}
                                    title={`Método "${method}"`}
                                    checked={selectedMethod === method}
                                    onPress={() => setSelectedMethod(method)}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    checkedColor="red"
                                    containerStyle={styles.checkBox}
                                    textStyle={styles.checkBoxText}
                                />
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Fontisto name="map-marker-alt" size={24} color="red" />
                    <TextInput
                        style={styles.input}
                        placeholder="Endereço do destinatário: "
                        placeholderTextColor="gray"
                        value={enderecoDestinatario}
                        onChangeText={setEnderecoDestinatario}
                    />
                </View>
                <View>
                    <TouchableOpacity 
                        style={styles.botom}
                        onPress={() => edit(id)}
                    >
                        <Text style={styles.txtbotom}>Alterar demanda</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.fim}>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    square: {
        width: 350,
        height: 900,
        marginLeft: 20,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    minisquare: {
        margin: 5,
        alignContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 420,
        aspectRatio: 0.65,
        borderRadius: 15,
        marginHorizontal: 5,
        backgroundColor: 'white',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1.25,
        shadowRadius: 3.84,
        elevation: 5,
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
    inputContainerPV: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        paddingHorizontal: 10,
        margin: 10,
        marginVertical: 5,
        width: '40%',
        height: 45,
        backgroundColor: 'white',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
    centeredView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 3,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        marginTop: 20,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: 'red',
    },
    buttonClose: {
        backgroundColor: 'red',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 5,
    },
    checkBoxI: {
        marginTop: 9,
    },
    checkBox: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 5,
      },
      checkBoxText: {
        color: 'black',
        marginLeft: 5,
      },
    modalTextTT: {
        alignItems: 'center',
        fontSize: 20,
        margin: 6,
    },
    modalTextT: {
        marginTop: 2,
        marginBottom: 3,
        alignItems: 'left',
        fontSize: 16,
        fontStyle: 'italic',
    },
    textGeral: {
        alignItems: 'center',

    },
    modalTextColEnt: {
    },
    modalTextMet: {
        fontSize: 25,
        margin: 10,
    },
    modalTextT2: {
        marginTop: 2,
        marginBottom: 3,
        alignItems: 'left',
        fontSize: 20,
        fontStyle: 'italic',
    },
    modalText2: {
        marginTop: 2,
        fontSize: 10,
        color: 'red',
    },
    fim: {
        height: 200,
    }
});
