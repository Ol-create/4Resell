import React from "react";
import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/component/AppText"
import AppButton from "./app/component/AppButton"
import Card from "./app/component/Card";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        paddingTop: 100,
        padding: 20,
      }}
    >
      <Card
        title="Red Jacket for sale"
        subTitle="$99.7"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}
  