import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Pressable, Animated, Platform, Image } from 'react-native';
import colors from '../config/colors';
import JobCards from './cards/JobCards';
import Footer from './footer/Footer';

import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton, TertiaryButton } from './components/Button';

function WelcomeScreen( {navigation, route} ) {
    return (
        <>
            <ScrollView style={styles.contianer}>
                <View style={styles.landingPage}>
                    <Image source={require('../assets/trade.png')} style={styles.image} />
                    <Text style={styles.title}>Jobs annehmen oder Jobs online stellen mit Jobflip</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput placeholder='Was suchen Sie heute?' style={styles.input} />
                        <PrimaryButton onPress={() => console.log('Search')} text={'Suche'} style={styles.button} />
                    </View>
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
                <View style={styles.newJobsWrapper}>
                    <Text style={styles.title2}>Die neusten Jobs</Text>
                    <HorizontalScroll userName={route.params.userName} navigation={navigation} />
                    <View style={styles.moreJobsButtonWrapper}>
                        <TertiaryButton onPress={() => navigation.navigate('Job Suche')} text={'Entecke mehr Jobs'} style={styles.moreJobsButton} />
                        <Ionicons name={'arrow-forward-outline'} size='16px' style={styles.moreJobsButtonIcon} color={'rgba(' + colors.primary_accent_color + ', 1)'} />
                    </View>
                </View>
                <View style={styles.howItWorksWrapper}>
                    <Text style={styles.title2}>Wie funktioniert's</Text>
                    <View style={styles.howItWorks}>
                        <View style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>1. Sag uns was du brauchst</Text>
                                <Ionicons name={'chatbubble-ellipses-outline'} size='32px' />
                            </View>
                            <Text style={styles.sectionText}>Sei es jemand der für dich Rasenmäht, Wohnung putzt oder Reparaturen erledigt.</Text>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>2. Suche nach einem Helfer</Text>
                                <Ionicons name={'flashlight-outline'} size='32px' />
                            </View>
                            <Text style={styles.sectionText}>der dir Hilft, arbeiten zu erledigen, für du keine Zeit hast.</Text>
                        </View>
                        <View style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>3. Von Anfang bis Ende abgesichert</Text>
                                <Ionicons name={'shield-checkmark-outline'} size='32px' />
                            </View>
                            <Text style={styles.sectionText}>Wenn du über Jobflip zahlst, dann bist du Rund um abgesichert.</Text>
                        </View>
                    </View>
                </View>
                <Footer navigation={navigation} />  
            </ScrollView>
        </>
    );
}

const HorizontalScroll = (props, navigation ) => {
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
            <View>
                <Animated.View style={{transform: [{ translateX: scroll}], flexDirection: 'row'}}>
                    <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/garden.jpg')} pricing='200€/h' title='This is the Title' rating={5} comments={5} />
                    <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/city.jpg')} pricing='100€/h' title='This is another Title' rating={4.3} comments='12K' />
                    <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/kitten.jpg')} pricing='2200€/h' title='The same' rating={1.2} comments='4.5K' />
                    <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/opel-gt.jpg')} pricing='45€/h' title='Auto Waschen' rating={5} comments={5} />
                    <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/playground.jpg')} pricing='30€/h' title='This is the Title' rating={4} comments={5} />
                    <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/garden.jpg')} pricing='220€/h' title='This is the Title' rating={5} comments={5} />
                    <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/city.jpg')} pricing='150€/h' title='This is the Title' rating={2} comments={5} />
                    <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/kitten.jpg')} pricing='340€/h' title='This is the Title' rating={5} comments={5} />
                    <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/opel-gt.jpg')} pricing='200€/h' title='This is the Title' rating={1} comments={5} />
                    <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/playground.jpg')} pricing='120€/h' title='This is the Title' rating={3} comments={5} />
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
                <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/garden.jpg')} pricing='200€/h' title='This is the Title' rating={5} comments={5} />
                <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/city.jpg')} pricing='100€/h' title='This is another Title' rating={4.3} comments='12K' />
                <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/kitten.jpg')} pricing='2200€/h' title='The same' rating={1.2} comments='4.5K' />
                <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/opel-gt.jpg')} pricing='45€/h' title='Auto Waschen' rating={5} comments={5} />
                <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/playground.jpg')} pricing='30€/h' title='This is the Title' rating={4} comments={5} />
                <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/garden.jpg')} pricing='220€/h' title='This is the Title' rating={5} comments={5} />
                <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/city.jpg')} pricing='150€/h' title='This is the Title' rating={2} comments={5} />
                <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/kitten.jpg')} pricing='340€/h' title='This is the Title' rating={5} comments={5} />
                <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/opel-gt.jpg')} pricing='200€/h' title='This is the Title' rating={1} comments={5} />
                <JobCards userName={props.userName} navigation={props.navigation} img={require('../assets/playground.jpg')} pricing='120€/h' title='This is the Title' rating={3} comments={5} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contianer: {
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
    },
    landingPage: {
        height: 400,
        margin: 5,
        borderRadius: 10,
        width: '100%',
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        shadowColor: 'rgba(' + colors.black_color + ', 1)',
        shadowOpacity: 0.15,
        shadowRadius: 15,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    image: {
        width: '60%',
        height: '100%',
        opacity: 0.7,
        alignSelf: 'center'
    },
    title: {
        marginTop: -100,
        position: 'absolute',
        margin: 40,
        marginLeft: '22%',
        padding: 10,
        fontSize: 30,
        fontWeight: 700,
        backgroundColor: 'rgba(' + colors.white_color + ', 0.4)',
        borderRadius: 10
    },
    inputWrapper: {
        position: 'absolute',
        marginLeft: '22%',
        flexDirection: 'row'
    },
    input: {
        height: 40,
        borderColor: 'rgba(' + colors.primary_accent_color + ', 1)',
        borderWidth: 2,
        padding: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: 'rgba(' + colors.white_color + ', 0.6)'
    },
    button: {
        height: 40,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: 'rgba(' + colors.primary_accent_color + ', 1)',
    },
    // choose: {
    //     flexDirection: 'row',
    //     height: 40,
    //     borderRadius: 10,
    //     width: '100%',
    //     backgroundColor: 'rgba(' + colors.white_color + ', 1)',
    //     shadowColor: 'rgba(' + colors.black_color + ', 1)',
    //     shadowOpacity: 0.15,
    //     shadowRadius: 15,
    //     justifyContent: 'center', 
    //     alignItems: 'center',
    // },
    title2: {
        margin: 10,
        paddingLeft: 30,
        paddingTop: 10,
        fontSize: 24,
        fontWeight: 700
    },
    newJobsWrapper: {
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        shadowColor: 'rgba(' + colors.black_color + ', 1)',
        shadowOpacity: 0.15,
        shadowRadius: 15
    },
    newJobs: {
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        shadowColor: 'rgba(' + colors.black_color + ', 1)',
        shadowOpacity: 0.15,
        shadowRadius: 15
    },
    moreJobsButtonWrapper: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    moreJobsButton: {
        margin: 10,
        marginRight: 0
    },
    moreJobsButtonIcon: {
        alignSelf: 'center'
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
    },
    howItWorksWrapper: {
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        shadowColor: 'rgba(' + colors.black_color + ', 1)',
        shadowOpacity: 0.15,
        shadowRadius: 15
    },
    howItWorks: {
        flexDirection: 'row'
    },
    section: {
        flex: 1,
        marginHorizontal: 40,
        marginVertical: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        shadowColor: 'rgba(' + colors.black_color + ', 1)',
        shadowOpacity: 0.15,
        shadowRadius: 15
    },
    sectionHeader: {
        flexDirection: 'row',
        margin: 20,
        alignItems: 'center'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight: 20
    },
    sectionText: {
        fontSize: 16,
        marginHorizontal: 20,
        marginBottom: 40
    }
})

export default WelcomeScreen;