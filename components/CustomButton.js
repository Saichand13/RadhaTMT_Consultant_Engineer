import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = props => {
  return (
    <>
      <TouchableOpacity
        style={styles.blockButton}
        onPress={() => {
          props.onPress();
        }}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  blockButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#7a42f4',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    margin: 1,
  },
  buttonText: {
    fontSize: 18,
    marginBottom: 5,
    padding: 5,
    alignSelf: 'center',
    color: '#fff',
  },
});

export default CustomButton;
