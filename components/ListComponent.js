import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

const LeadsList = ({status, name, phone, email, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onPress();
      }}>
      <View>
        <Image
          source={require('../assets/semi2.png')}
          style={styles.imageContainer}
        />
        <View style={styles.image}>
          <Icon name="thumbs-up" type="font-awesome" size={40} color="white" />
          <Text style={styles.iconText}>{status}</Text>
          <Text style={styles.iconText}>10-Jan-2022</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text2}>{phone}</Text>
        <Text style={styles.text2}>{email}</Text>
        <Text style={styles.text3}>Leads Generated to: Dealer 1</Text>
        <Text style={styles.text4}>Lead Info > </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LeadsList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 15,
    overflow: 'hidden',
  },
  imageContainer: {
    // borderRadius: 10,
    flex: 1,
  },
  image: {
    position: 'absolute',
    padding: 20,
  },
  iconText: {
    color: '#ffffff',
    margin: 10,
    fontSize: 15,
  },
  textContainer: {
    flex: 1,
    paddingRight: 25,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  text2: {
    fontSize: 15,
    color: '#000',
  },
  text3: {
    fontSize: 13,
    marginTop: 10,
  },
  text4: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginRight: 10,
    color: '#000',
  },
});
