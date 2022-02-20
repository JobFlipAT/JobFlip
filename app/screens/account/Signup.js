import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import colors from '../../config/colors';

function Signup(props) {
    return (
        <View style={styles.header}>
            <View style={styles.title}>
                <Text style={styles.title1}>Sign Up </Text>
                <Text style={styles.title2}>or </Text>
                <Text style={styles.title3} onPress={() => props.toggleSignIn()}>Sign In</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.signIn}>
                    <TextInput style={styles.input} placeholder='E-Mail' />
                    <TextInput style={styles.input} placeholder='Password' />
                    <TextInput style={styles.input} placeholder='Password erneut eingeben' />
                    <Pressable onPress={() => console.log('signup')} style={styles.button}>
                        <Text>Sign Up</Text>
                    </Pressable>
                </View>
                <View style={styles.news}>
                    <Text>News other Stuff.</Text>
                </View>
            </View>
            <Text style={styles.text}>I'd like to receive special email offers and discounts</Text>
            <Text style={styles.text}>I agree to the terms ...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 280,
        margin: 5,
        borderRadius: 10,
        marginLeft: '20%',
        width: '60%',
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        shadowColor: 'rgba(' + colors.black_color + ', 1)',
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
        color: 'rgba(' + colors.primary_accent_color + ', 1)',
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
        borderColor: 'rgba(' + colors.black_color + ', 1)',
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    button: {
        width: 300,
        backgroundColor: 'rgba(' + colors.primary_accent_color + ', 1)',
        borderColor: 'rgba(' + colors.primary_accent_color + ', 1)',
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    news: {
        marginLeft: '5%',
        margin: 5,
        // borderColor: 'rgba(' + colors.black_color + ', 1)',
        // borderLeftWidth: 1,
        paddingLeft: '5%',
    },
    text: {
        marginLeft: '5%',
    }
})

export default Signup;