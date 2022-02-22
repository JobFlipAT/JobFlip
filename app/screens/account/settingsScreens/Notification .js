import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CheckBox from "expo-checkbox";

import colors from '../../../config/colors';

function Notification(props) {
    const [toggleCBNews, setToggleCBNews] = useState(false);
    const [toggleCBChat, setToggleCBChat] = useState(false);
    const [toggleCBDate, setToggleCBDate] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <View style={styles.wrapper}>
                    <CheckBox
                        value={toggleCBNews}
                        onValueChange={() => setToggleCBNews(!toggleCBNews)}
                        color={toggleCBNews ? 'rgba(' + colors.primary_accent_color + ', 1)' : undefined}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Benachrichtigungen zu neuen Jobs</Text>
                </View>
            </View>
            <Text style={styles.description}>Erhalte Benachrichtigungen über neue interessante Jobs in der Nähe</Text>
            <View style={styles.section}>
                <View style={styles.wrapper}>
                    <CheckBox
                        value={toggleCBChat}
                        onValueChange={() => setToggleCBChat(!toggleCBChat)}
                        color={toggleCBChat ? 'rgba(' + colors.primary_accent_color + ', 1)' : undefined}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Chat-Benachrichtigungen</Text>
                </View>
            </View>
            <Text style={styles.description}>Benachrichtigungen über neue Chat-Nachrichten</Text>
            <View style={styles.section}>
                <View style={styles.wrapper}>
                    <CheckBox
                        value={toggleCBDate}
                        onValueChange={() => setToggleCBDate(!toggleCBDate)}
                        color={toggleCBDate ? 'rgba(' + colors.primary_accent_color + ', 1)' : undefined}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Termin-Benachrichtigungen</Text>
                </View>
            </View>
            <Text style={styles.description}>Benachrichtigungen für den anstehenden Job</Text>
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
        flex: 1
    },
    wrapper: {
        flex: 0.05, 
        alignItems: 'flex-end',
        paddingRight: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        color: 'rgba(' + colors.gray_color + ', 1)'
    }
})

export default Notification;