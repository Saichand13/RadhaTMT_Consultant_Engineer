import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

const FilterButton = ({title}) => {
  return (
    <View style={{paddingHorizontal: 2}}>
      <TouchableOpacity
        style={styles.roundedButton}
        onPress={() => {
          Alert.alert(
            `${title} Button Pressed`,
            `Rounded Button -> ${title} Button`,
          );
        }}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  roundedButton: {
    display: 'flex',
    alignItems: 'center',
    width: 90,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#3C82B8',
    borderRadius: 1000,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
