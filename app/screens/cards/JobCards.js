import React, { useState } from 'react';
import { Text, StyleSheet, Image, Pressable } from 'react-native';
import colors from '../../config/colors';
import JobDetailCard from './JobDetailCard';

function JobCards(props) {
    const [modalVisivile, setModalVisible] = useState(false);

    return (
        <>
            <Pressable style={styles.container} onPress={() => setModalVisible(true)}>
                <Image source={props.img} style={styles.image} />
                <Text style={styles.pricing}>{props.pricing}</Text>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.rating}>{props.rating}</Text>
            </Pressable>
            <JobDetailCard modalVisible={modalVisivile} setModalVisible={setModalVisible} 
                img={props.img} pricing={props.pricing} title={props.title} rating={props.rating} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 300,
        width: 220,
        borderRadius: 10,
        shadowColor: colors.black_color,
        shadowOpacity: 0.15,
        shadowRadius: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '70%'
    },
    pricing: {
        position: 'absolute',
        bottom: '30%',
        right: 10,
        padding: 5,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 10,
        color: 'black',
        backgroundColor: colors.secondary_accent_color,
        borderRadius: 5
    },
    title: {
        fontSize: 20,
        padding: 10
    },
    rating: {
        alignSelf: 'flex-end',
        padding: 10
    }
})

export default JobCards;