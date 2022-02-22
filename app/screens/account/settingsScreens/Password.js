import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../../../config/colors';

function Password(props) {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Altes Passwort</Text>
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} />
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Neues Passwort</Text>
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} />
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Neues Passwort bestätigen</Text>
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} />
                </View>
            </View>
                <View style={styles.buttonWrapper}>
                    <View style={{flex: 1, paddingRight: 20}}></View>
                    <Pressable style={styles.button}>
                        <Text>Passwort ändern</Text>
                    </Pressable>
                </View>
                <View style={styles.buttonWrapper}>
                    <View style={{flex: 1, paddingRight: 20}}></View>
                    <Pressable>
                        <Text style={styles.link}>Passwort vergessen?</Text>
                    </Pressable>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    section: {
        width: '100%',
        flexDirection: 'row', 
        alignItems: 'center',
        margin: 5
    },
    textWrapper: {
        flex: 1, 
        alignItems: 'flex-end'
    },
    wrapper: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: 20
    },
    input: {
        width: 216,
        borderWidth: 1,
        borderColor: 'rgba(' + colors.gray_color + ', 0.5)',
        borderRadius: 5,
        padding: 5
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 5
    },
    button: {
        flex: 1,
        backgroundColor: 'rgba(' + colors.primary_accent_color + ', 1)',
        borderColor: 'rgba(' + colors.primary_accent_color + ', 1)',
        borderWidth: 1,
        padding: 5,
        borderRadius: 5
    },
    link: {
        color: 'rgba(' + colors.primary_accent_color + ', 1)'
    }
})

export default Password;