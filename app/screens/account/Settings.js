import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import colors from '../../config/colors';
import EMail from './settingsScreens/EMail';
import Password from './settingsScreens/Password';
import Profile from './settingsScreens/Profile';
import Help from './settingsScreens/Help';

function Settings(props) {
    const [settingsPage, setSettingsPage] = useState('Profile')

    function toggleSettings (page) {
        setSettingsPage(page);
    }

    function DisplaySettings () {
        if (settingsPage === 'Profile') {
            return ( <Profile userName={props.userName} /> );
        } else if (settingsPage === 'Password') {
            return ( <Password /> );
        } else if (settingsPage === 'EMail') {
            return ( <EMail /> );
        } else {
            return ( <Help /> );
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabbar}>
                <Text style={styles.tabbartitle}>Settings</Text>
                <Pressable style={[styles.tabbarbutton, {borderLeftWidth: settingsPage === 'Profile' ? 1 : 0}]} onPress={() => toggleSettings('Profile')}>
                    <Text style={styles.tabbartext}>Profil bearbeiten</Text>
                </Pressable>
                <Pressable style={[styles.tabbarbutton, {borderLeftWidth: settingsPage === 'Password' ? 1 : 0}]} onPress={() => toggleSettings('Password')}>
                    <Text style={styles.tabbartext}>Passwort ändern</Text>
                </Pressable>
                <Pressable style={[styles.tabbarbutton, {borderLeftWidth: settingsPage === 'EMail' ? 1 : 0}]} onPress={() => toggleSettings('EMail')}>
                    <Text style={styles.tabbartext}>E-Mail</Text>
                </Pressable>
                <Pressable style={[styles.tabbarbutton, {borderBottomWidth: 0, borderLeftWidth: settingsPage === 'Help' ? 1 : 0}]} onPress={() => toggleSettings('Help')}>
                    <Text style={styles.tabbartext}>Hilfe</Text>
                </Pressable>
            </View>
            <View style={styles.settings}>
                <DisplaySettings />
            </View>
            {/* Logout Button */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    tabbar: {
        flex: 0.2,
        margin: 5,
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        shadowColor: 'rgba(' + colors.black_color + ', 1)',
        shadowOpacity: 0.15,
        shadowRadius: 15
    },
    tabbartitle: {
        fontSize: 22,
        padding: 10,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    tabbarbutton: {
        marginHorizontal: 15,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderColor: 'rgba(' + colors.gray_color + ', 0.5)'
    },
    tabbartext: {
        fontSize: 16,
    }, 
    settings: {
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

export default Settings;