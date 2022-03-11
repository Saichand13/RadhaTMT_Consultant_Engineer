import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-native-elements';

const Display = () => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={() => setOpen(!open)}>
        <Text style={{color: 'white'}}>Order #001</Text>
        {open ? (
          <Icon
            name="chevron-up"
            type="font-awesome-5"
            color="white"
            size={20}
            style={{marginLeft: '78%'}}
          />
        ) : (
          <Icon
            name="chevron-down"
            type="font-awesome-5"
            color="white"
            size={20}
            style={{marginLeft: '78%'}}
          />
        )}
      </TouchableOpacity>

      {open && (
        <TouchableOpacity style={styles.big}>
          <Text style={{color: 'white'}}>Order #001</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.box} onPress={() => setOpen(!open)}>
        <Text style={{color: 'white'}}>Order #002</Text>
        {open ? (
          <Icon
            name="chevron-up"
            type="font-awesome-5"
            color="white"
            size={20}
            style={{marginLeft: '78%'}}
          />
        ) : (
          <Icon
            name="chevron-down"
            type="font-awesome-5"
            color="white"
            size={20}
            style={{marginLeft: '78%'}}
          />
        )}
      </TouchableOpacity>
      {open && (
        <TouchableOpacity style={styles.big}>
          <Text style={{color: 'white'}}>Order #002</Text>
        </TouchableOpacity>
      )}
      <Pressable style={styles.button}>
        <Text style={{color: 'white', alignSelf: 'center'}}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default Display;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: '#0065AF',
    padding: 10,
    margin: 10,
    marginBottom: 3,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
  },
  big: {
    backgroundColor: '#0895DC',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    height: '25%',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: '#0065AF',
    padding: 10,
    width: '25%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
