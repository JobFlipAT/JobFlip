import React from 'react';
import { View, Text, StyleSheet, Modal, Image } from 'react-native';
import { PrimaryButton, SecondaryButton, TertiaryButton } from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../config/colors';

function JobDetailCard(props) {
    const DescriptionSection = () => {
        if (props.userName !== '') {
            return (
                <View style={styles.sectionDescription}>
                    <Text style={styles.infoText}>Was: Auto waschen</Text>
                    <Text style={styles.infoText}>Ort: Österreich, Dornbirn 6850, Hinterhof 8</Text>
                    <Text style={styles.infoText}>Wann: Vom 01.03-10.03, Von 8-18 Uhr</Text>
                </View>
            )
        }else {
            return (
                <View style={styles.sectionDescription}>
                    <Text style={styles.infoText}>Was: Auto waschen</Text>
                    <Text style={styles.infoText}>Für mehr Details</Text>
                    <TertiaryButton onPress={() => {props.navigation.navigate('Sign In / Sign up'); props.setModalVisible(!props.modalVisible)}} text={'melde'} />
                    <Text style={styles.infoText}>dich an</Text>
                </View>
            )
        }
    }

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
                        <SecondaryButton onPress={() => props.setModalVisible(!props.modalVisible)} text={'X'}/>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.infosection}>
                            <Image style={styles.image} source={props.img} />
                        </View>
                        <View style={styles.infosection}>
                            <Text style={styles.title}>{props.title}</Text>
                            <View style={styles.section}>
                                <Text style={styles.infoText}>Arbeitgeber </Text>
                                {props.calculateStars(props.rating, props.comments, styles.infoText)}
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.infoText}>{props.pricing}</Text>
                            </View>
                            {DescriptionSection()}
                            <View style={styles.reportJob}>
                                <PrimaryButton text={'Job annehmen'} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonClose}>
                        <TertiaryButton text={'Job melden'} style={{paddingRight: 25}} />
                        <SecondaryButton onPress={() => props.setModalVisible(!props.modalVisible)} text={'Schließen'} />
                    </View>
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
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
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
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    info: {
        flex: 1,
        flexDirection: 'row'
    },
    infosection:{
        flex: 0.5,
        marginHorizontal: 20,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15
    },
    section: {
        flexDirection: 'row',
        borderTopWidth: 1
    },
    text: {
      marginBottom: 15
    },
    infoText: {
        padding: 5
    },
    image: {
        width: '100%',
        height: '100%'
    },
    reportJob: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
    },
    sectionDescription: {
        borderTopWidth: 1
    }
})

export default JobDetailCard;