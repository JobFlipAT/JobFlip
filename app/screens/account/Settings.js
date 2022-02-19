import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Settings(props) {
    console.log(props)
    return (
        <View>
            <Text>Hello {props.userName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default Settings;