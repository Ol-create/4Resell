import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';

import AppButton from '../component/AppButton';
import AppTextInput from '../component/AppTextInput';
import Screen from '../component/Screen'
import AppText from '../component/AppText';
import ErrorMessage from '../component/ErrorMessage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

export default function LoginScreen() {
  return (
    <Screen>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress"
            />
            <ErrorMessage error={errors.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <ErrorMessage error={errors.password}/>
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
    image: {
        alignSelf: "center",
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 20,
    }
})