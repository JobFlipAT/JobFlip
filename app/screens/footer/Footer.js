import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../../config/colors';
import { Ionicons } from '@expo/vector-icons';

function Footer(props) {
    return (
        <View style={styles.container}>
            <View style={styles.firstcolumn}>
                <Text style={styles.text}>Contact us other links</Text>
            </View>
            <View style={styles.secondcolumn}>
                <Image source={require('../../assets/Logo.png')} style={{resizeMode: 'center', width: 100, height: 40, }} />
                <View style={styles.socialcontainer}>
                    <Ionicons name={"logo-instagram"} style={styles.icons} size={"150%"} color={colors.white_color} />
                    <Ionicons name={"logo-facebook"} style={styles.icons} size={"150%"} color={colors.white_color} />
                    <Ionicons name={"logo-github"} style={styles.icons} size={"150%"} color={colors.white_color} />
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
        flex: 0.25,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.black_color,
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
        color: colors.white_color,
        paddingHorizontal: 5
    }
})

export default Footer;