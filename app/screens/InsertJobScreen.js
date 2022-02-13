import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import colors from '../config/colors';
import Footer from './footer/Footer';

function InsertJobScreen( {navigation} ) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Job erstellen!</Text>
            </View>
            <View style={styles.body}>
                <TextInput placeholder='Drop Pictures here!' />
                <TextInput placeholder='Title' />
                <TextInput placeholder='Description' />
                <TextInput placeholder='Price/hour' />
                <TextInput placeholder='Adresse' />
                <TextInput placeholder='Hausnummer' />
                <TextInput placeholder='PLZ' />
                <TextInput placeholder='Ort' />
                <TextInput placeholder='Land' />
            </View>
            <Footer navigation={navigation} />  
        </ScrollView>
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
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
    },
    body: {
        width: '100%',
        flexDirection: 'row',
    },
})

export default InsertJobScreen;