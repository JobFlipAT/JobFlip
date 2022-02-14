import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import colors from '../config/colors';
import JobCards from './cards/JobCards';
import Footer from './footer/Footer';

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
                <Text>Die neusten Jobs:</Text>
                <View style={styles.newJobs}>
                    <JobCards img={require('../assets/garden.jpg')} price='200€/h' title='This is the Title' rating='5S (5)' />
                    <JobCards img={require('../assets/city.jpg')} price='100€/h' title='This is another Title' rating='4.3S (12K)'  />
                    <JobCards img={require('../assets/kitten.jpg')} price='2200€/h' title='The same' rating='1.2S (4.5K)'  />
                    <JobCards img={require('../assets/opel-gt.jpg')} price='20€/h' title='This is the Title' rating='5S (5)'  />
                    <JobCards img={require('../assets/playground.jpg')} price='30€/h' title='This is the Title' rating='5S (5)'  />
                    <JobCards img={require('../assets/garden.jpg')} price='220€/h' title='This is the Title' rating='5S (5)'  />
                    <JobCards img={require('../assets/city.jpg')} price='150€/h' title='This is the Title' rating='5S (5)'  />
                    <JobCards img={require('../assets/kitten.jpg')} price='340€/h' title='This is the Title' rating='5S (5)'  />
                    <JobCards img={require('../assets/opel-gt.jpg')} price='200€/h' title='This is the Title' rating='5S (5)'  />
                    <JobCards img={require('../assets/playground.jpg')} price='120€/h' title='This is the Title' rating='5S (5)'  />
                </View>
            </ScrollView>
            <Footer navigation={navigation} />  
        </>
    );
}

const styles = StyleSheet.create({
    contianer: {
        backgroundColor: colors.white_color,
    },
    landingPage: {
        height: 200,
        margin: 5,
        borderRadius: 10,
        width: '100%',
        backgroundColor: colors.white_color,
        shadowColor: colors.black_color,
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
        borderColor: colors.primary_accent_color,
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
        backgroundColor: colors.white_color,
        shadowColor: colors.black_color,
        shadowOpacity: 0.15,
        shadowRadius: 15,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    newJobs: {
        height: 200,
        margin: 5,
        borderRadius: 10,
        width: '100%',
        backgroundColor: colors.white_color,
        shadowColor: colors.black_color,
        shadowOpacity: 0.15,
        shadowRadius: 15,
        flexDirection: 'row',
    }
})

export default WelcomeScreen;