import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

export default function App() {
  return (
    <>
      <Image
        style={styles.img}
        source={{
          uri: 'https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png'
        }} />
      <View style={styles.container}>
        <Text>Mari belajar React Native</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 30,
  },
  img: {
    height: 100,
    width: 100,
  }
});
