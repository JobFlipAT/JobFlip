import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';
import General from './settingsScreens/General';
import Location from './settingsScreens/Location';
import Profile from './settingsScreens/Profile';

function Settings(props) {
    const [settingsPage, setSettingsPage] = useState('General')

    function toggleSettings (page) {
        setSettingsPage(page);
    }

    function DisplaySettings () {
        if (settingsPage === 'General') {
            return ( <General userName={props.userName} /> );
        } else if (settingsPage === 'Location') {
            return ( <Location /> );
        } else if (settingsPage === 'Profile') {
            return ( <Profile /> );
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabbar}>
                <Text style={styles.tabbartitle}>Settings</Text>
                <Pressable style={styles.tabbarbutton} onPress={() => toggleSettings('General')}>
                    <Text style={styles.tabbartext}>General</Text>
                </Pressable>
                <Pressable style={styles.tabbarbutton} onPress={() => toggleSettings('Location')}>
                    <Text style={styles.tabbartext}>Location</Text>
                </Pressable>
                <Pressable style={styles.tabbarbutton} onPress={() => toggleSettings('Profile')}>
                    <Text style={styles.tabbartext}>Profile</Text>
                </Pressable>
                <Pressable style={[styles.tabbarbutton, {borderBottomWidth: 0}]} onPress={() => toggleSettings('General')}>
                    <Text style={styles.tabbartext}>Bankdata</Text>
                </Pressable>
            </View>
            <DisplaySettings />
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
        shadowRadius: 15,
        justifyContent: 'center'
    },
    tabbartitle: {
        fontSize: 22,
        padding: 10,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    tabbarbutton: {
        flex: 1,
        marginHorizontal: 15,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderColor: 'rgba(' + colors.gray_color + ', 0.5)'
    },
    tabbartext: {
        fontSize: 16,
    }
})

export default Settings;