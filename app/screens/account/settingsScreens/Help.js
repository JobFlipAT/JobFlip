import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Help(props) {
    return (
        <View style={styles.container}>
            <Text>Hilfebereich</Text>
            <Text>Support Kontaktieren</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
})

export default Help;