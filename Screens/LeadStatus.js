import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import LeadsComponent from '../components/LeadsComponent';

const data = [
  {
    title: 'Generated Leads',
    name: 'coins',
    type: 'font-awesome-5',
    value: '250',
  },
  {
    title: 'Successful Leads',
    name: 'thumbs-up',
    type: 'font-awesome-5',
    value: '10%',
  },
  {
    title: 'Rejected Leads',
    name: 'thumbs-down',
    type: 'font-awesome-5',
    value: '30%',
  },
  {
    title: 'Pending Leads',
    name: 'pending-actions',
    type: 'MaterialCommunityIcons',
    value: '60%',
  },
];

const LeadStatus = props => {
  const navigate = () => {
    props.navigation.navigate('Generated Leads');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lead Status</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <LeadsComponent
            title={item.title}
            name={item.name}
            type={item.type}
            value={item.value}
            onPress={navigate}
          />
        )}
        keyExtractor={item => item.title}
      />
      {/* <LeadsComponent
        title="Generated Leads"
        name="coins"
        type="font-awesome-5"
        value="250"
        onPress={navigate}
      />
      <LeadsComponent
        title="Successful Leads"
        name="thumbs-up"
        type="font-awesome-5"
        value="10%"
        onPress={navigate}
      />

      <LeadsComponent
        title="Rejected Leads"
        name="thumbs-down"
        type="font-awesome-5"
        value="30%"
        onPress={navigate}
      />

      <LeadsComponent
        title="Pending Leads"
        name="pending-actions"
        type="MaterialCommunityIcons"
        value="60%"
        onPress={navigate}
      /> */}
    </View>
  );
};

export default LeadStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5581DE',
    margin: 10,
  },
  design: {
    width: '100%',
    height: '18%',
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
  },
  image: {
    position: 'relative',
    right: 0,
    width: '60%',
  },
});
