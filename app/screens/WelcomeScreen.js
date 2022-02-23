import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Pressable, Animated, Platform } from 'react-native';
import colors from '../config/colors';
import JobCards from './cards/JobCards';
import Footer from './footer/Footer';

import { Ionicons } from '@expo/vector-icons';

function WelcomeScreen( {navigation} ) {
    return (
        <>
            <ScrollView style={styles.contianer}>
                <View style={styles.landingPage}>
                    <Text style={styles.title}>Jobs annehmen oder Jobs online stellen mit Jobflip</Text>
                    <TextInput placeholder='Was suchen Sie heute?' style={styles.input} />
                {/* </View>
                <View style={styles.choose}> */}
                    {/* <View style={styles.choose}>
                        <View>
                            <Text>Job annehmen</Text>
                        </View>
                        <View>
                            <Text>job inserieren</Text>
                        </View>
                    </View> */}
                </View>
                <Text style={styles.title}>Die neusten Jobs:</Text>
                <HorizontalScroll />
                <Footer navigation={navigation} />  
            </ScrollView>
        </>
    );
}

const HorizontalScroll = () => {
    const scroll = new Animated.Value(0);

    const scrollRight = () => {
        let tempscroll;
        if (scroll._value <= -240*4) {
            tempscroll = -240*4;
        } else {
            tempscroll = scroll._value-240;
        }
        Animated.timing(scroll, {
            toValue: tempscroll,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };
  
    const scrollLeft = () => {
        let tempscroll;
        if (scroll._value >= 0) {
            tempscroll = 0;
        } else {
            tempscroll = scroll._value+240;
        }
        Animated.timing(scroll, {
            toValue: tempscroll,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

    if (Platform.OS === 'web') {
        return (
            <View style={styles.newJobs}>
                <Animated.View style={{transform: [{ translateX: scroll}], flexDirection: 'row'}}>
                    <JobCards img={require('../assets/garden.jpg')} pricing='200€/h' title='This is the Title' rating='5 (5)' />
                    <JobCards img={require('../assets/city.jpg')} pricing='100€/h' title='This is another Title' rating='4.3 (12K)'  />
                    <JobCards img={require('../assets/kitten.jpg')} pricing='2200€/h' title='The same' rating='1.2 (4.5K)'  />
                    <JobCards img={require('../assets/opel-gt.jpg')} pricing='45€/h' title='Auto Waschen' rating='5 (5)'  />
                    <JobCards img={require('../assets/playground.jpg')} pricing='30€/h' title='This is the Title' rating='5 (5)'  />
                    <JobCards img={require('../assets/garden.jpg')} pricing='220€/h' title='This is the Title' rating='5 (5)'  />
                    <JobCards img={require('../assets/city.jpg')} pricing='150€/h' title='This is the Title' rating='5 (5)'  />
                    <JobCards img={require('../assets/kitten.jpg')} pricing='340€/h' title='This is the Title' rating='5 (5)'  />
                    <JobCards img={require('../assets/opel-gt.jpg')} pricing='200€/h' title='This is the Title' rating='5 (5)'  />
                    <JobCards img={require('../assets/playground.jpg')} pricing='120€/h' title='This is the Title' rating='5 (5)'  />
                </Animated.View>
                <Pressable onPress={scrollRight} style={[styles.scrollButton, styles.scrollButtonRight]}>
                    <Ionicons name="chevron-forward-outline" size={80}></Ionicons>
                </Pressable>
                <Pressable onPress={scrollLeft}style={[styles.scrollButton, styles.scrollButtonLeft]}>
                    <Ionicons name="chevron-back-outline" size={80}></Ionicons>
                </Pressable>
            </View>
        )
    } else {
        return (
            <ScrollView style={styles.newJobs} horizontal={true}>
                <JobCards img={require('../assets/garden.jpg')} pricing='200€/h' title='This is the Title' rating='5 (5)' />
                <JobCards img={require('../assets/city.jpg')} pricing='100€/h' title='This is another Title' rating='4.3 (12K)'  />
                <JobCards img={require('../assets/kitten.jpg')} pricing='2200€/h' title='The same' rating='1.2 (4.5K)'  />
                <JobCards img={require('../assets/opel-gt.jpg')} pricing='45€/h' title='Auto Waschen' rating='5 (5)'  />
                <JobCards img={require('../assets/playground.jpg')} pricing='30€/h' title='This is the Title' rating='5 (5)'  />
                <JobCards img={require('../assets/garden.jpg')} pricing='220€/h' title='This is the Title' rating='5 (5)'  />
                <JobCards img={require('../assets/city.jpg')} pricing='150€/h' title='This is the Title' rating='5 (5)'  />
                <JobCards img={require('../assets/kitten.jpg')} pricing='340€/h' title='This is the Title' rating='5 (5)'  />
                <JobCards img={require('../assets/opel-gt.jpg')} pricing='200€/h' title='This is the Title' rating='5 (5)'  />
                <JobCards img={require('../assets/playground.jpg')} pricing='120€/h' title='This is the Title' rating='5 (5)'  />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contianer: {
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
    },
    landingPage: {
        height: 200,
        margin: 5,
        borderRadius: 10,
        width: '100%',
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        shadowColor: 'rgba(' + colors.black_color + ', 1)',
        shadowOpacity: 0.15,
        shadowRadius: 15,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },
    input: {
        height: 40,
        margin: 40,
        borderColor: 'rgba(' + colors.primary_accent_color + ', 1)',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    backgroundVideo: {
        height: 100,
        width: 100,
    },
    choose: {
        flexDirection: 'row',
        height: 40,
        borderRadius: 10,
        width: '100%',
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        shadowColor: 'rgba(' + colors.black_color + ', 1)',
        shadowOpacity: 0.15,
        shadowRadius: 15,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    newJobs: {
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        shadowColor: 'rgba(' + colors.black_color + ', 1)',
        shadowOpacity: 0.15,
        shadowRadius: 15
    },
    scrollButton: {
        position: 'absolute',
        top: '50%',
        transform: [{ translateY: '-50%'}],
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        opacity: 0.5,
        borderRadius: 10
    },
    scrollButtonLeft: {
        left: 0
    },
    scrollButtonRight: {
        right: 0
    }
})

export default WelcomeScreen;