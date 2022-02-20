import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import colors from '../../config/colors';
import { Ionicons } from '@expo/vector-icons';

function Footer( {navigation} ) {
    return (
        <View style={styles.container}>
            <View style={styles.firstcolumn}>
                <Text style={styles.text}>Contact us other links</Text>
            </View>
            <View style={styles.secondcolumn}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../../assets/Logo.png')} style={{resizeMode: 'center', width: 100, height: 40, }} />
                </Pressable>
                <View style={styles.socialcontainer}>
                    <Ionicons name={"logo-instagram"} style={styles.icons} size={30} color={'rgba(' + colors.white_color + ', 1)'} />
                    <Ionicons name={"logo-facebook"} style={styles.icons} size={30} color={'rgba(' + colors.white_color + ', 1)'} />
                    <Ionicons name={"logo-github"} style={styles.icons} size={30} color={'rgba(' + colors.white_color + ', 1)'} />
                </View>
                <View style={styles.legalcontainer}>
                    <Text style={styles.text}>Imprint</Text>
                    <Text style={styles.text}>Privacy</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(' + colors.black_color + ', 1)',
        height: 200
    },
    firstcolumn: {
        flex: 1,
        alignItems: 'center'
    },
    secondcolumn: {
        flex: 1,
        alignItems: 'center'
    },
    socialcontainer: {
        flexDirection: 'row',
        margin: 5
    },
    legalcontainer: {
        flexDirection: 'row'
    },
    icons: {
        paddingHorizontal: 5
    },
    text: {
        color: 'rgba(' + colors.white_color + ', 1)',
        paddingHorizontal: 5
    }
})

export default Footer;