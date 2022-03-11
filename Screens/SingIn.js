import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import {Icon} from 'react-native-elements';
import SocialButton from '../components/SocialButton';
import images from '../assets/images';
import {useForm, Controller} from 'react-hook-form';
import Picker from '../components/PickerComponent';

const data = [
  {
    title: 'Google',
    image: images.google,
  },
  {
    title: 'Apple',
    image: images.apple,
  },
  {
    title: 'Facebook',
    image: images.facebook,
  },
  {
    title: 'Twitter',
    image: images.twitter,
  },
];
const SignIn = props => {
  const [passwordSecured, setPasswordSecured] = useState(true);
  const navigate = () => {
    props.navigation.navigate('Targets');
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Icon name="user" type="font-awesome" color="#7a42f4" size={20} />
        <TextInput
          style={{flex: 1, paddingHorizontal: 12}}
          placeholder="Username"
          textContentType="username"
        />
      </View>
      <View style={styles.inputView}>
        <Icon name="lock" type="font-awesome" color="#7a42f4" size={20} />
        <TextInput
          style={{flex: 1, paddingHorizontal: 12}}
          secureTextEntry={passwordSecured}
          placeholder="Password"
          textContentType="password"
        />
        <TouchableOpacity
          style={{padding: 4}}
          onPress={() => setPasswordSecured(!passwordSecured)}>
          <Icon
            name={passwordSecured ? 'eye-slash' : 'eye'}
            type="font-awesome-5"
            color="#7a42f4"
            size={20}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{alignSelf: 'flex-end'}}>
        <Text style={styles.forgotPassword}>Forgot Password ?</Text>
      </TouchableOpacity>

      <CustomButton title="Sign In" onPress={navigate} />

      <Text style={styles.text}>──────── or connect with ──────── </Text>
      {/* <SocialButton title="Google" image={images.google} />
      <SocialButton title="Apple" image={images.apple} /> */}
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <SocialButton title={item.title} image={item.image} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
  },
  inputView: {
    width: '100%',
    height: 50,
    backgroundColor: '#f1f4f6',
    borderRadius: 8,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    elevation: 4,
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 22,
    color: '#000000',
  },
  forgotPassword: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default SignIn;
