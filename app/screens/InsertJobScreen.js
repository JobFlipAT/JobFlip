import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import colors from '../config/colors';
import Footer from './footer/Footer';

function InsertJobScreen( {navigation} ) {
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}> Kostenlos und einfach einen Job insereiren!</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.picture}>
                        <TextInput style={styles.picturetext} placeholder='Drop or Upload Pictures here!' />
                    </View>
                    <View style={styles.infos}>
                        <Text style={styles.infotext}>Title</Text>
                        <TextInput placeholder='Title' style={styles.input} />
                        <Text style={styles.infotext}>Beschreibung</Text>
                        <TextInput placeholder='Description' style={styles.input} />
                        <Text style={styles.infotext}>Lohn per Stunden</Text>
                        <TextInput placeholder='Price/hour' style={styles.input} />
                        <View style={styles.address}>
                            <Text style={styles.infotext}>Adresse</Text>
                            <Text style={styles.infotext}>Hausnummer</Text>
                        </View>
                        <View style={styles.address}>
                            <TextInput placeholder='Adresse' style={styles.input} />
                            <TextInput placeholder='Hausnummer' style={styles.input} />
                        </View>
                        <View style={styles.address}>
                            <Text style={styles.infotext}>Postleitzahl</Text>
                            <Text style={styles.infotext}>Ort</Text>
                            <Text style={styles.infotext}>Land</Text>
                        </View>
                        <View style={styles.address}>
                            <TextInput placeholder='PLZ' style={styles.input} />
                            <TextInput placeholder='Ort' style={styles.input} />
                            <TextInput placeholder='Land' style={styles.input} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Footer navigation={navigation} />  
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white_color
    },
    header: {
        height: 100,
        margin: 5,
        borderRadius: 10,
        width: '100%',
        backgroundColor: colors.white_color,
        shadowColor: colors.black_color,
        shadowOpacity: 0.15,
        shadowRadius: 15,
        justifyContent: 'center'
    },
    title: {
        fontSize: 50,
        alignSelf: 'center'
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        borderRadius: 10,
        backgroundColor: colors.white_color,
        shadowColor: colors.black_color,
        shadowOpacity: 0.15,
        shadowRadius: 15
    },
    picture: {
        flex: 0.5,
        marginVertical: 40,
        marginLeft: 40,
        marginRight: 20,
        padding: 40,
        borderRadius: 10,
        borderWidth: 1
    },
    picturetext: {
        fontSize: 60,
        borderWidth: 2,
        borderColor: colors.primary_accent_color,
        borderRadius: 10,
        opacity: 0.3
    },
    infos: {
        flex: 0.5,
        marginVertical: 40,
        marginLeft: 20,
        marginRight: 40,
        padding: 40,
        borderRadius: 10,
        borderWidth: 1
    },
    address: {
        flex: 1,
        flexDirection: 'row'
    },
    infotext: {
        flex: 0.3333,
        fontSize: 20,
        marginRight: 15,
        paddingTop: 5,
        paddingBottom: 5
    },
    input: {
        flex: 0.3333,
        fontSize: 20,
        marginRight: 10,
        marginBottom: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: colors.primary_accent_color,
        borderRadius: 5
    }
})

export default InsertJobScreen;