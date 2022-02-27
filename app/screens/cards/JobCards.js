import React, { useState } from 'react';
import { Text, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../../config/colors';
import JobDetailCard from './JobDetailCard';

function JobCards(props) {
    const [modalVisivile, setModalVisible] = useState(false);

    const calculateStars = (rating, comments, styles) => {
        if (rating <= 0.5) return (
            <Text style={styles}>
                <Ionicons name="star-half" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                {` ${rating} (${comments})`}
            </Text>
        ) 
        if (rating <= 1) return (
            <Text style={styles}>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                {` ${rating} (${comments})`}
            </Text>
        ) 
        if (rating <= 1.5) return (
            <Text style={styles}>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-half" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                {` ${rating} (${comments})`}
            </Text>
        ) 
        if (rating <= 2) return (
            <Text style={styles}>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                {` ${rating} (${comments})`}
            </Text>
        )
        if (rating <= 2.5) return (
            <Text style={styles}>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-half" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                {` ${rating} (${comments})`}
            </Text>
        ) 
        if (rating <= 3) return (
            <Text style={styles}>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                {` ${rating} (${comments})`}
            </Text>
        )
        if (rating <= 3.5) return (
            <Text style={styles}>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-half" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                {` ${rating} (${comments})`}
            </Text>
        ) 
        if (rating <= 4) return (
            <Text style={styles}>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-outline" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                {` ${rating} (${comments})`}
            </Text>
        )
        if (rating <= 4.5) return (
            <Text style={styles}>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star-half" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                {` ${rating} (${comments})`}
            </Text>
        ) 
        return (
            <Text style={styles}>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                <Ionicons name="star" color={`rgba(${colors.primary_color}, 1)`}></Ionicons>
                {` ${rating} (${comments})`}
            </Text>
        )
    }

    return (
        <>
            <Pressable style={styles.container} onPress={() => setModalVisible(true)}>
                <Image source={props.img} style={styles.image} />
                <Text style={styles.pricing}>{props.pricing}</Text>
                <Text style={styles.title}>{props.title}</Text>
                {calculateStars(props.rating, props.comments, styles.rating)}
            </Pressable>
            <JobDetailCard modalVisible={modalVisivile} setModalVisible={setModalVisible} 
                img={props.img} pricing={props.pricing} title={props.title} rating={props.rating} comments={props.comments}
                calculateStars={calculateStars} userName={props.userName} navigation={props.navigation}/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 300,
        width: 220,
        borderRadius: 10,
        shadowColor: 'rgba(' + colors.black_color + ', 1)',
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
        backgroundColor: 'rgba(' + colors.secondary_accent_color + ', 1)',
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