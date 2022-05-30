import React from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './Screens/SingIn';
import SignUp from './Screens/SignUp';
import Targets from './Screens/Targets';
import CustomerDetails from './Screens/CustomerDetails';
import LeadStatus from './Screens/LeadStatus';
import GeneratedLeads from './Screens/GeneratedLeads';
import Display from './Screens/Display';
import {Icon} from 'react-native-elements';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const TabsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SignIn" component={SignIn} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <>
      <View
        style={{
          height: 40,
          backgroundColor: '#3b65ab',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity>
          <Icon
            name="arrow-left"
            type="font-awesome-5"
            color="white"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="logout"
            type="material-community"
            color="white"
            size={25}
          />
        </TouchableOpacity>
      </View>
      <Image source={require('./assets/radha.jpg')} style={styles.logo} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={TabsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Targets"
            component={Targets}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CustomerDetails"
            component={CustomerDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LeadStatus"
            component={LeadStatus}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Generated Leads"
            component={GeneratedLeads}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Display"
            component={Display}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '25%',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
