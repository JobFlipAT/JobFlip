import React from 'react';
import { View, Text, StyleSheet, Modal, Pressable, Image } from 'react-native';

function JobDetailCard(props) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                console.log("Modal has been closed.");
                props.setModalVisible(!props.modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.buttonClose}>
                        <Pressable
                            style={styles.button}
                            onPress={() => props.setModalVisible(!props.modalVisible)}
                        >
                            <Text style={styles.textStyle}>X</Text>
                        </Pressable>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.infosection}>
                            <Image style={styles.image} source={props.img} />
                        </View>
                        <View style={styles.infosection}>
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.text}>{props.pricing}</Text>
                            <Text style={styles.text}>{props.rating}</Text>
                        </View>
                    </View>
                    <Pressable
                        style={styles.button}
                        onPress={() => props.setModalVisible(!props.modalVisible)}
                    >
                        <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginTop: 22
    },
    modalView: {
        flex: 1,
        margin: 150,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonClose: {
        flex: 0.1,
        alignItems: 'flex-end'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "#F194FF"
    },
    info: {
        flex: 1,
        flexDirection: 'row'
    },
    infosection:{
        flex: 0.5,
        margin: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15
    },
    text: {
      marginBottom: 15
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default JobDetailCard;