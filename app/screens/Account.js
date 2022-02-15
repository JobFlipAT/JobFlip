import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import Footer from './footer/Footer';

function Settings( {navigation} ) {

    return (
        <>
            <ScrollView style={styles.container}>
                <Test />
            </ScrollView>
            <Footer navigation={navigation} />  
        </>
    );
}

const Test = () => {
    const [signIn, setSignIn] = useState(true);

    if (signIn === true) {
        return (
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={styles.title1}>Sign In </Text>
                    <Text style={styles.title2}>or </Text>
                    <Text style={styles.title3} onPress={() => setSignIn(!signIn)}>Sign Up</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.signIn}>
                        <TextInput style={styles.input} placeholder='E-Mail' />
                        <TextInput style={styles.input} placeholder='Password' />
                        <TouchableOpacity onPress={() => console.log('login')} style={styles.button}>
                            <Text>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.news}>
                        <Text>News other Stuff.</Text>
                    </View>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={styles.title1}>Sign Up </Text>
                    <Text style={styles.title2}>or </Text>
                    <Text style={styles.title3} onPress={() => setSignIn(!signIn)}>Sign In</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.signIn}>
                        <TextInput style={styles.input} placeholder='E-Mail' />
                        <TextInput style={styles.input} placeholder='Password' />
                        <TextInput style={styles.input} placeholder='Password erneut eingeben' />
                        <TouchableOpacity onPress={() => console.log('signup')} style={styles.button}>
                            <Text>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.news}>
                        <Text>News other Stuff.</Text>
                    </View>
                </View>
                <Text style={styles.text}>I'd like to receive special email offers and discounts</Text>
                <Text style={styles.text}>I agree to the terms ...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white_color,
    },
    header: {
        height: 280,
        margin: 5,
        borderRadius: 10,
        marginLeft: '20%',
        width: '60%',
        backgroundColor: colors.white_color,
        shadowColor: colors.black_color,
        shadowOpacity: 0.15,
        shadowRadius: 15,
    },
    title: {
        flexDirection: 'row',
        marginLeft: '40%',
    },
    title1: {
        fontSize: 30,
    },
    title2: {
        fontSize: 20,
    },
    title3: {
        fontSize: 20,
        color: colors.primary_accent_color,
    },
    body: {
        flexDirection: 'row',
        marginTop: 20,
    },
    signIn: {
        marginLeft: '5%',
        margin: 5,
    },
    input: {
        width: 300,
        borderColor: colors.black_color,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    button: {
        width: 300,
        backgroundColor: colors.primary_accent_color,
        borderColor: colors.primary_accent_color,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    news: {
        marginLeft: '5%',
        margin: 5,
        // borderColor: colors.black_color,
        // borderLeftWidth: 1,
        paddingLeft: '5%',
    },
    text: {
        marginLeft: '5%',
    }
})

export default Settings;