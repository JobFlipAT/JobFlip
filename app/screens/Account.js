import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import colors from '../config/colors';
import Login from './account/Login';
import Settings from './account/Settings';
import Signup from './account/Signup';
import Footer from './footer/Footer';

function Account( {navigation, route} ) {
    return (
        <>
            <ScrollView style={styles.container}>
                {(() => {
                    if(route.params.userName !== '') {
                        return (
                            <Settings userName={route.params.userName} />
                        )
                    } else {
                        return (
                            <ToggleSignInSignUp setUserNameValue={route.params.setUserNameValue} />
                        )
                }})()}
            </ScrollView>
            <Footer navigation={navigation} />  
        </>
    );
}

const ToggleSignInSignUp = (props) => {
    const [signIn, setSignIn] = useState(true);

    const toggleSignIn = () => {
        setSignIn(!signIn);
    }

    if (signIn === true) {
        return (
            <Login toggleSignIn={toggleSignIn} setUserNameValue={props.setUserNameValue} />
        )
    } else {
        return (
            <Signup toggleSignIn={toggleSignIn} setUserNameValue={props.setUserNameValue} />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
    }
})

export default Account;