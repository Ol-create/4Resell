import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import AppButton from '../component/AppButton';

function WelcomeScreen(props) {
    return (
      <>
        <ImageBackground
          blurRadius={7}
          style={styles.background}
          source={require("../assets/background.jpg")}
        >
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/logo-red.png")}
              style={styles.logo}
            />
            <Text style={styles.tagline}>Sell what we don't want</Text>
          </View>
          <AppButton title="Login" onPress={() => console.log("Click!")} />
          <AppButton title="Register" color="secondary" onPress={() => console.log("Click!")} />
        </ImageBackground>
      </>
    );
} 

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  tagline: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5
  }
});

export default WelcomeScreen;