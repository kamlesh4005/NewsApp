import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import MainScreen from './controller/mainScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle = "dark-content" 
      animated={true}
      barStyle= "default"
      hidden = {false} translucent = {true}/>
      <MainScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
