import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import colors from '../config/colors';
import Footer from './footer/Footer';

function SearchScreen( {navigation} ) {
    const [openKategories, setOpenKategories] = useState(false);
    const [valueKategories, setValueKategories] = useState(null);
    const [itemsKategories, setItemsKategories] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
    ]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
    ]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>What ya looking for today?</Text>
                <View style={styles.filter}>
                    <TextInput placeholder='Job suche' style={styles.input} />
                    <DropDownPicker style={styles.dropdown} open={openKategories} value={valueKategories} items={itemsKategories} 
                                    setOpen={setOpenKategories} setValue={setValueKategories} setItems={setItemsKategories} />
                    <TextInput placeholder='Entfernung' style={styles.input} />
                    <TextInput placeholder='Standort' style={styles.input} />
                    <TextInput placeholder='Lohn' style={styles.input} />
                    <DropDownPicker style={styles.dropdown} open={open} value={value} items={items} 
                                    setOpen={setOpen} setValue={setValue} setItems={setItems} />
                </View>
            </View>
            <View style={styles.jobs}>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
                </View>
                <View style={{borderWidth: 1, margin: 5, height: 190, width: 150}}>
                    <Text>Job 1</Text>
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
        height: 200,
        margin: 5,
        borderRadius: 10,
        width: '100%',
        backgroundColor: colors.white_color,
        shadowColor: colors.black_color,
        shadowOpacity: 0.15,
        shadowRadius: 15,
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
    },
    filter: {
        flexDirection: 'row',
        width: '50%',
    },
    input: {
        width: 200,
    },
    dropdown: {
        width: 200,
    },
    jobs: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

export default SearchScreen;