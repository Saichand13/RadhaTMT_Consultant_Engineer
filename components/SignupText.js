import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';

const SignupText = ({control, name, rules = {}, placeholder}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View style={[styles.container]}>
            <TextInput
              style={[styles.input, error ? {borderColor: 'red'} : '']}
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          </View>
          {error && (
            <Text style={{color: 'red', margin: 10}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default SignupText;

const styles = StyleSheet.create({
  input: {
    height: 44,
    backgroundColor: '#f1f4f6',
    borderRadius: 8,
    paddingHorizontal: 12,
    elevation: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: '#f1f4f6',
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    width: '100%',
  },
});
