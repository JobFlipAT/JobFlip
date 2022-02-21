import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../../../config/colors';

function Profile(props) {
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <View style={styles.textWrapper}>
                    <Text style={styles.userName}>Hello {props.userName}</Text>
                </View>
                <View style={styles.wrapper}>
                    <View style={styles.imageWrapper}>
                        <Image source={require('../../../assets/garden.jpg')} style={styles.image} />
                    </View>
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Name</Text>
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} value={props.userName}/>
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Benutzername</Text>
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} value={props.userName}/>
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>E-Mail</Text>
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} placeholder='E-Mail'/>
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Handynummer</Text>
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} placeholder='Handynummer'/>
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Straße</Text>
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} placeholder='Straße'/>
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Hausnummer</Text>
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} placeholder='Hausnummer'/>
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Ort</Text>
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} placeholder='Ort'/>
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Postleitzahl</Text>
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} placeholder='Postleitzahl'/>
                </View>
            </View>
            <View style={styles.section}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Land</Text>
                </View>
                <View style={styles.wrapper}>
                    <TextInput style={styles.input} placeholder='Land'/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    headerSection: {
        width: '100%',
        flexDirection: 'row', 
        alignItems: 'center',
        margin: 10
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
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingRight: 20
    },
    wrapper: {
        flex: 1
    },
    imageWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: 20
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: 'rgba(' + colors.gray_color + ', 0.5)',
        borderRadius: 5,
        padding: 5
    }
})

export default Profile;