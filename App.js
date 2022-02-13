import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import colors from './app/config/colors';
import Navbar from './app/screens/navbar/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white_color,
  },
});
