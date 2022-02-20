import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../../config/colors';

function General(props) {
    return (
        <View style={styles.container}>
            <Text>Hello {props.userName}</Text>
            <Image />
            <Text>Avatar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        shadowColor: 'rgba(' + colors.black_color + ', 1)',
        shadowOpacity: 0.15,
        shadowRadius: 15,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default General;