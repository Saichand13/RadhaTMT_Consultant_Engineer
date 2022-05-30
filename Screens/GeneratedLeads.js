import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  Dimensions,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon} from 'react-native-elements';
import ListComponent from '../components/ListComponent';

const listTab = [
  {
    status: 'All',
  },
  {
    status: 'Success',
  },
  {
    status: 'Pending',
  },
  {
    status: 'Rejected',
  },
];

const data = [
  {
    status: 'Success',
    name: 'Ch. Krishna Reddy',
    phone: '+91-9888888888',
    email: 'chkrishna@gmail.com',
  },
  {
    status: 'Pending',
    name: 'Reddy',
    phone: '+91-9888888888',
    email: 'chkrishna@gmail.com',
  },
  {
    status: 'Rejected',
    name: 'Krishna',
    phone: '+91-9888888888',
    email: 'chkrishna@gmail.com',
  },
  {
    status: 'Success',
    name: 'Ch. Krdy',
    phone: '+91-9888888888',
    email: 'chkrishna@gmail.com',
  },
  {
    status: 'Pending',
    name: 'Chna Reddy',
    phone: '+91-9888888888',
    email: 'chkrishna@gmail.com',
  },
  {
    status: 'Rejected',
    name: ' ABCD',
    phone: '+91-9888888888',
    email: 'chk@gmail.com',
  },
];

const GeneratedLeads = props => {
  const navigate = () => {
    props.navigation.navigate('Display');
  };
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('All');
  const [dataList, setDataList] = useState(data);
  const [filter, setFilter] = useState(false);

  const setStatusFilter = status => {
    if (status !== 'All') {
      setDataList(data.filter(e => e.status === status));
    } else {
      setDataList(data);
    }
    setStatus(status);
  };

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>Newest </Text>
        <Text style={styles.text2}>────────────────</Text>
        <TouchableOpacity
          style={{padding: 10, marginLeft: 5}}
          onPress={() => setFilter(!filter)}>
          {filter ? (
            <Icon name="filter-outline" type="material-community" />
          ) : (
            <Icon name="filter" type="material-community" />
          )}
        </TouchableOpacity>
      </View>
      {filter ? (
        <View style={styles.listTab}>
          {listTab.map(e => (
            <Pressable
              key={e.status}
              style={[
                styles.btnTab,
                status === e.status && styles.btnTabActive,
              ]}
              onPress={() => setStatusFilter(e.status)}>
              <Text
                style={
                  (styles.textTab, status === e.status && styles.textTabActive)
                }>
                {e.status}
              </Text>
            </Pressable>
          ))}
        </View>
      ) : null}
      <FlatList
        contentContainerStyle={{padding: 10}}
        showsVerticalScrollIndicator={false}
        data={dataList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <ListComponent
            status={item.status}
            name={item.name}
            phone={item.phone}
            email={item.email}
            onPress={navigate}
          />
        )}
      />
    </View>
  );
};

export default GeneratedLeads;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5581DE',
    margin: 10,
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  listTab: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btnTab: {
    width: Dimensions.get('window').width / 4.5,
    flexDirection: 'row',
    borderWidth: 0.7,
    borderColor: '#000',
    borderRadius: 50,
    padding: 10,
    backgroundColor: '#F5F5F5',
    margin: 5,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  textTab: {
    fontSize: 16,
  },
  btnTabActive: {
    backgroundColor: '#5581DE',
    borderWidth: 1.5,
    borderColor: '#5581DE',
  },
  textTabActive: {
    color: '#FFF',
  },
});
