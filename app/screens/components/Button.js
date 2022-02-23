import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

const PrimaryButton = (props) => {
  return (
    <Pressable onPress={props.onPress} style={[styles.primaryButton, props.style]}>
        <Text style={styles.primaryText}>{props.text}</Text>
    </Pressable>
  )
}

const SecondaryButton = (props) => {
  return (
    <Pressable onPress={props.onPress} style={[styles.secondaryButton, props.style]}>
        <Text style={styles.secondaryText}>{props.text}</Text>
    </Pressable>
  )
}

const TertiaryButton = (props) => {
  return (
    <Pressable onPress={props.onPress} style={[styles.tertiaryButton, props.style]}>
        <Text style={styles.tertiaryText}>{props.text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: 'rgba(' + colors.primary_accent_color + ', 0.7)',
        borderColor: 'rgba(' + colors.primary_accent_color + ', 1)',
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 10,
        alignSelf: 'center'
    },
    primaryText: {
        fontWeight: 'bold',
        color: 'rgba(' + colors.white_color + ', 1)'
    },
    secondaryButton: {
        backgroundColor: 'rgba(' + colors.primary_accent_color + ', 0.1)',
        borderColor: 'rgba(' + colors.primary_accent_color + ', 1)',
        borderWidth: 2,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 10,
        alignSelf: 'center'
    },
    secondaryText: {
        fontWeight: 'bold',
        color: 'rgba(' + colors.primary_accent_color + ', 1)'
    },
    tertiaryButton: {
        backgroundColor: 'rgba(' + colors.white_color + ', 1)',
        paddingHorizontal: 5,
        alignSelf: 'center'
    },
    tertiaryText: {
        color: 'rgba(' + colors.primary_accent_color + ', 1)'
    }
})

export { PrimaryButton, SecondaryButton, TertiaryButton }