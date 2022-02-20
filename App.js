import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from './app/config/colors';
import Navbar from './app/screens/navbar/Navbar';

export default function App() {
  const [userName, setUserName] = useState('');

  const setUserNameValue = (newUserName) => {
    setUserName(newUserName)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navbar userName={userName} setUserNameValue={setUserNameValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(' + colors.white_color + ', 1)',
  },
});
