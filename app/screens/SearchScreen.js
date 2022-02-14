import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import colors from '../config/colors';
import JobCards from './cards/JobCards';
import Footer from './footer/Footer';

function SearchScreen( {navigation} ) {
    const [openKategories, setOpenKategories] = useState(false);
    const [valueKategories, setValueKategories] = useState(null);
    const [itemsKategories, setItemsKategories] = useState([
        {label: 'Kategorie', value: 'apple'},
        {label: 'Banana', value: 'banana'},
    ]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Standort zuerst', value: 'apple'},
        {label: 'Zeit zuerst', value: 'banana'},
    ]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>What ya looking for today?</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.filter}>
                    <TextInput placeholder='Job suche' style={styles.input} />
                    <DropDownPicker style={styles.dropdown} open={openKategories} value={valueKategories} items={itemsKategories} 
                                    setOpen={setOpenKategories} setValue={setValueKategories} setItems={setItemsKategories} />
                    <TextInput placeholder='Entfernung' style={styles.input} />
                    <TextInput placeholder='Standort' style={styles.input} />
                    <TextInput placeholder='Lohn = Slider' style={styles.input} />
                    <DropDownPicker style={styles.dropdown} open={open} value={value} items={items} 
                                    setOpen={setOpen} setValue={setValue} setItems={setItems} />
                </View>
                <View style={styles.jobs}>
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
                        <JobCards img={require('../assets/garden.jpg')} price='200€/h' title='This is the Title' rating='5S (5)' />
                        <JobCards img={require('../assets/city.jpg')} price='100€/h' title='This is another Title' rating='4.3S (12K)'  />
                        <JobCards img={require('../assets/kitten.jpg')} price='2200€/h' title='The same' rating='1.2S (4.5K)'  />
                        <JobCards img={require('../assets/opel-gt.jpg')} price='20€/h' title='This is the Title' rating='5S (5)'  />
                        <JobCards img={require('../assets/playground.jpg')} price='30€/h' title='This is the Title' rating='5S (5)'  />
                        <JobCards img={require('../assets/garden.jpg')} price='220€/h' title='This is the Title' rating='5S (5)'  />
                        <JobCards img={require('../assets/kitten.jpg')} price='340€/h' title='This is the Title' rating='5S (5)'  />
                </View>
            </View>
            <Footer navigation={navigation} />  
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white_color
    },
    header: {
        height: 100,
        margin: 5,
        borderRadius: 10,
        width: '100%',
        backgroundColor: colors.white_color,
        shadowColor: colors.black_color,
        shadowOpacity: 0.15,
        shadowRadius: 15,
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
    },
    body: {
        flexDirection: 'row'
    },
    filter: {
        flexDirection: 'column',
        width: '15%',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.white_color,
        shadowColor: colors.black_color,
        shadowOpacity: 0.15,
        shadowRadius: 15
    },
    input: {
        width: '100%',
        marginBottom: 20,
        marginTop: 20
    },
    dropdown: {
        width: '100%',
        marginBottom: 10,
        marginTop: 20
    },
    jobs: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
})

export default SearchScreen;