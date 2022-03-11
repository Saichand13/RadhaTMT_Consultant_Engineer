import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

const LeadsComponent = ({title, name, type, value, onPress}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.design}
        onPress={() => {
          onPress();
        }}>
        <View style={{padding: 10, width: '50%'}}>
          <Icon name={name} type={type} size={40} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#5581DE',
              margin: 10,
              textAlign: 'center',
            }}>
            {title}
          </Text>
        </View>
        <View style={styles.image}>
          <Image source={require('../assets/semi.png')} />
          <Text
            style={{
              color: 'white',
              fontSize: 28,
              fontWeight: 'bold',
              position: 'absolute',
              right: '30%',
              padding: 8,
            }}>
            {value}
          </Text>

          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              padding: 8,
              left: '40%',
            }}>
            More Info >
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default LeadsComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5581DE',
  },
  design: {
    flexDirection: 'row',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
    borderWidth: 0.5,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    position: 'absolute',
    width: '58%',
    right: 0,
  },
});
