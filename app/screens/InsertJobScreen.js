import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

function InsertJobScreen(navigation) {
    return (
        <View style={styles.container}>
          <Text>Job Erstellen!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: colors.white_color
    }
})

export default InsertJobScreen;