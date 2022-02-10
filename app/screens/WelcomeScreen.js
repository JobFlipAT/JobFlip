import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import colors from '../config/colors';

function WelcomeScreen(navigation) {
    return (
        <View style={styles.contianer}>
            <View style={styles.landingPage}>
                <Text>Jobs annehmen oder Jobs online stellen</Text>
                <TextInput placeholder='Was suchen Sie heute?' style={styles.input} />
            </View>
            <View style={styles.choose}>
                <Text>Job annehmen / job inserieren</Text>
            </View>
            <Text>Die neusten Jobs:</Text>
            <View style={styles.newJobs}>
                <View style={{borderWidth: 1, margin: 5, height: 200, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 200, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 200, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 200, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 200, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 200, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 200, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 200, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 200, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 200, width: 150}}>
                    <Text>Job 1</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: colors.white_color
    },
    landingPage: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        width: '100%',
        backgroundColor: colors.primary_color,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    choose: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        width: '100%',
        backgroundColor: colors.primary_accent_color,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    newJobs: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        width: '100%',
        backgroundColor: colors.secondary_accent_color,
        flexDirection: 'row',
        // justifyContent: 'center', 
        // alignItems: 'center',
    }
})

export default WelcomeScreen;