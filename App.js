import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, BackHandler, ToastAndroid } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>YOU HAVE BEEN HIJACKED</Text>
      <View style={styles.containerTwo}>
        <Text style={styles.textMani}>YOUR ANDROID SYSTEM FILES HAS BEEN MANIPULATED...</Text>
      </View>
      <View>
        <Text style={styles.red}>RED DROP</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "0px",

    width: "100vw",
    height: "100vh",
    backgroundColor: '#000',

  },
  text: {
    fontSize: "2.5rem",
    color: "#FF0000",
    marginTop: "20px",
    textAlign: "center",
  },
  containerTwo: {

    width: "100vw",
    height: "200px",
    backgroundColor: '#FF0000',
    marginTop: "2rem",
  },
  textMani: {
    color: "black",
    fontSize: "2rem",
    paddingHorizontal: "20px",
    paddingTop: "1.2rem",
    textAlign: "center"
  },
  red: {
    fontSize: "5rem",
    textAlign: "center",
    color: "#FF0000",
    fontWeight: "bold"
  }
});