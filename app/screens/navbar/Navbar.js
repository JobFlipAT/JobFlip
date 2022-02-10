import React from 'react';
import { View, Text, Image, Platform, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from '../WelcomeScreen';
import Settings from '../Settings';
import colors from '../../config/colors';
import SearchScreen from '../SearchScreen';
import InsertJobScreen from '../InsertJobScreen';

const homeName = 'Home';
const searchName = 'Job Suche';
const insertName = 'Job erstellen';
const settingsName = 'Settings';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const NavbarTabs = () => {
    if (Platform.OS === 'web') {
        return (
            <TopTab.Navigator>
                <TopTab.Screen options={{tabBarLabel: () => <Image source={require('../../assets/Logo.png')} style={{position: 'absolute', top: -20, left: -50, resizeMode: 'center', width: 100, height: 40, }} />}} name={'logo'} component={WelcomeScreen} />
                <TopTab.Screen name={homeName} component={WelcomeScreen} />
                <TopTab.Screen name={searchName} component={SearchScreen} />
                <TopTab.Screen name={insertName} component={InsertJobScreen} />
                <TopTab.Screen name={settingsName} component={Settings} />
            </TopTab.Navigator>
        )
    } else {
        return (
            <BottomTab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;
        
                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (rn === settingsName) {
                            iconName = focused ? 'list' : 'list-outline'
                        } else if (rn === searchName) {
                            iconName = focused ? 'search' : 'search-outline'
                        } else if (rn === insertName) {
                            iconName = focused ? 'create' : 'create-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor: colors.primary_color,
                    tabBarInactiveTintColor: 'gray',
                    tabBarShowLabel: true,
                })}
            >
                <BottomTab.Screen name={homeName} component={WelcomeScreen} />
                <BottomTab.Screen name={searchName} component={SearchScreen} />
                <BottomTab.Screen name={insertName} component={InsertJobScreen} />
                <BottomTab.Screen name={settingsName} component={Settings} />
            </BottomTab.Navigator>
        )
    }
}

function Navbar() {
    return (
        <NavigationContainer>
            <NavbarTabs />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    logo: { 
        width: '100', 
        height: '100',
    }
})

export default Navbar;