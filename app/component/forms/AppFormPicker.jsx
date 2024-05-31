import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import AppPicker from "../AppPicker"
import { useFormikContext } from 'formik'
import ErrorMessage  from './ErrorMessage'


export default function AppFormPicker({ items, name, placeholder }) {
    const { errors, setFieldValue, values, touched } = useFormikContext();
  return (
      <>
          <AppPicker items={items}
              onSelectItem={(item) => setFieldValue(name, item)}
              placeholder={placeholder}
              selectItem={values[name]} />
          <ErrorMessage error={errors[name]} visible={touched[name]} />
      </>
  )
}

const styles = StyleSheet.create({})