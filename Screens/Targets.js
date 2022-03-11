import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ProgressBar} from 'react-native-paper';

const data = [
  {
    image: require('../assets/generateLeads.png'),
    title: 'Generate Leads',
  },
  {
    image: require('../assets/leadStatus.png'),
    title: 'Lead Status',
  },
];

const Targets = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Targets Vs Successful Leads</Text>
      </View>
      <View style={{backgroundColor: '#ffffff'}}>
        <Text style={styles.progressText}>FTD</Text>
        <ProgressBar
          progress={0.25}
          color="#7A42F4"
          style={styles.progressBar}
        />
        <Text style={styles.progressText}>MTD</Text>
      </View>
      <View style={styles.touchableContainer}>
        <TouchableOpacity
          style={styles.imageContainerA}
          onPress={() => {
            navigation.navigate('CustomerDetails');
          }}>
          <Image
            source={require('../assets/generateLeads.png')}
            style={styles.imageA}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageContainerB}
          onPress={() => {
            navigation.navigate('LeadStatus');
          }}>
          <Image
            source={require('../assets/leadStatus.png')}
            style={styles.imageB}
          />
        </TouchableOpacity>
        <Text
          style={{
            position: 'absolute',
            marginTop: 180,
            marginLeft: 60,
            fontSize: 15,
            color: '#7A42F4',
          }}>
          Generate Lead
        </Text>
        <Text
          style={{
            position: 'absolute',
            marginTop: 180,
            marginLeft: 250,
            fontSize: 15,
            color: '#7A42F4',
          }}>
          Lead Status
        </Text>
      </View>
    </View>
  );
};

export default Targets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    backgroundColor: '#FAFAFA',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7A42F4',
    margin: 10,
  },
  progressBar: {
    margin: 15,
    height: 12,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  progressText: {
    alignSelf: 'flex-end',
    marginRight: 10,
    fontWeight: '800',
  },
  touchableContainer: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
  },

  imageContainerA: {
    position: 'absolute',
    borderColor: '#000',
    borderWidth: 3,
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 10,
  },

  imageA: {
    flex: 1,
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  imageContainerB: {
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 230,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 10,
  },
  imageB: {
    flex: 1,
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
  },
});
