import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const SocialButton = ({image, title}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Image
          source={image}
          style={{height: 20, width: 20, marginRight: 10}}
        />
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
  },
  buttonStyle: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    width: 150,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
