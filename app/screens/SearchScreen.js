import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TextPropTypes } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

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
    const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
    const multiSliderValuesChange = (values) => setMultiSliderValue(values)

    const setSliderValue = (multi, value) => {
        let number = parseInt(value);
        if (multi === 0) {
            if (isNaN(number)) {
                number = 0;
            }
            setMultiSliderValue([number,multiSliderValue[1]])
        } else {
            if (isNaN(number)) {
                number = 100;
            }
            setMultiSliderValue([multiSliderValue[0], number])
        }
    }

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
                    <View style={styles.sliderwrapper}>
                        <Text>Lohn von: </Text>
                        <TextInput keyboardType='number-pad' value={multiSliderValue[0]} style={styles.sliderinput} onChangeText={(value) => setSliderValue(0, value)} />
                        <Text>Lohn von: </Text>
                        <TextInput keyboardType='number-pad' value={multiSliderValue[1]} style={styles.sliderinput} onChangeText={(value) => setSliderValue(1, value)} />
                    </View>
                    <MultiSlider
                        values={[multiSliderValue[0], multiSliderValue[1]]}
                        sliderLength={180}
                        onValuesChange={multiSliderValuesChange}
                        min={0}
                        max={100}
                        allowOverlap={false}
                        minMarkerOverlapDistance={10}
                    />
                    <DropDownPicker style={styles.dropdown} open={open} value={value} items={items} 
                                    setOpen={setOpen} setValue={setValue} setItems={setItems} />
                </View>
                <View style={styles.jobs}>
                        <JobCards img={require('../assets/garden.jpg')} pricing='200€/h' title='This is the Title' rating='5 (5)' />
                        <JobCards img={require('../assets/city.jpg')} pricing='100€/h' title='This is another Title' rating='4.3 (12K)'  />
                        <JobCards img={require('../assets/kitten.jpg')} pricing='2200€/h' title='The same' rating='1.2 (4.5K)'  />
                        <JobCards img={require('../assets/opel-gt.jpg')} pricing='20€/h' title='This is the Title' rating='5 (5)'  />
                        <JobCards img={require('../assets/playground.jpg')} pricing='30€/h' title='This is the Title' rating='5 (5)'  />
                        <JobCards img={require('../assets/garden.jpg')} pricing='220€/h' title='This is the Title' rating='5 (5)'  />
                        <JobCards img={require('../assets/city.jpg')} pricing='150€/h' title='This is the Title' rating='5 (5)'  />
                        <JobCards img={require('../assets/kitten.jpg')} pricing='340€/h' title='This is the Title' rating='5 (5)'  />
                        <JobCards img={require('../assets/opel-gt.jpg')} pricing='200€/h' title='This is the Title' rating='5 (5)'  />
                        <JobCards img={require('../assets/playground.jpg')} pricing='120€/h' title='This is the Title' rating='5 (5)'  />
                        <JobCards img={require('../assets/garden.jpg')} pricing='200€/h' title='This is the Title' rating='5 (5)' />
                        <JobCards img={require('../assets/city.jpg')} pricing='100€/h' title='This is another Title' rating='4.3 (12K)'  />
                        <JobCards img={require('../assets/kitten.jpg')} pricing='2200€/h' title='The same' rating='1.2 (4.5K)'  />
                        <JobCards img={require('../assets/opel-gt.jpg')} pricing='20€/h' title='This is the Title' rating='5 (5)'  />
                        <JobCards img={require('../assets/playground.jpg')} pricing='30€/h' title='This is the Title' rating='5 (5)'  />
                        <JobCards img={require('../assets/garden.jpg')} pricing='220€/h' title='This is the Title' rating='5 (5)'  />
                        <JobCards img={require('../assets/kitten.jpg')} pricing='340€/h' title='This is the Title' rating='5 (5)'  />
                </View>
            </View>
            <Footer navigation={navigation} />  
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(' + colors.white_color + ', 1)'
    },
    header: {
        height: 100,
        margin: 5,
        borderRadius: 10,
        width: '100%',
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        shadowColor: 'rgba(' + colors.black_color + ', 1)',
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
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        shadowColor: 'rgba(' + colors.black_color + ', 1)',
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
    sliderwrapper: {
        flexDirection: 'row'
    },
    sliderinput: {
        width: 25
    },
    jobs: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
})

export default SearchScreen;