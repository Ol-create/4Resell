import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from "./app/screens/ViewImageScreen";
export default function App() {
  function handlePress() {
    console.log("Text Clicked!")
  }
  // console.log(require("../app/assets/adaptive-icon.png"));
  return <ViewImageScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     justifyContent: 'center', 
//   },
// });
