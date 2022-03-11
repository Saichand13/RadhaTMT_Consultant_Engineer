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
} from 'react-native';
import CustomButton from '../components/CustomButton';
import SignupText from '../components/SignupText';
import {useForm, Contoller} from 'react-hook-form';
import PickerComponent from '../components/PickerComponent';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const areaData = [
  {label: 'Hyderabad', value: '1'},
  {label: 'Kukatpally', value: '2'},
  {label: 'Banjara Hills', value: '3'},
  {label: 'Jubliee Hills', value: '4'},
];

const employeeData = [
  {label: 'sai', value: '1'},
  {label: 'Chand', value: '2'},
  {label: 'Avana', value: '3'},
  {label: 'ganti Hills', value: '4'},
];

const SignUp = props => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>Area</Text>
      );
    }
    return null;
  };
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();
  const data = [
    {
      value: 'Banjara Hills',
    },
    {
      value: 'Jubliee Hills',
    },
    {
      value: 'Kothaguda',
    },
    {
      value: 'Kukatpally',
    },
    {
      value: 'Madhapur',
    },
    {
      value: 'Mehdipatnam',
    },
  ];

  const navigate = () => {
    props.navigation.navigate('Targets');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>CONSULTANT ENGINEER</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SignupText
          placeholder="Company"
          name="Company"
          control={control}
          rules={{required: 'Company is required'}}
        />
        <SignupText
          placeholder="Designation"
          name="Designation"
          control={control}
          rules={{required: 'Designation is required'}}
        />
        <SignupText
          placeholder="Email"
          name="Email"
          control={control}
          rules={{required: 'Email is required'}}
        />
        <SignupText
          placeholder="Mobile No"
          name="Mobile No"
          control={control}
          rules={{required: 'Mobile No is required'}}
        />
        <SignupText
          placeholder="State"
          name="State"
          control={control}
          rules={{required: 'State is required'}}
        />
        <SignupText
          placeholder="District"
          name="District"
          control={control}
          rules={{required: 'District is required'}}
        />
        {/* <SignupText
          placeholder="Area"
          name="Area"
          control={control}
          rules={{required: 'Area is required'}}
        />
        <SignupText
          placeholder="Registered Dealers"
          name="Registered Dealers"
          control={control}
          rules={{required: 'Registered Dealers is required'}}
        /> */}

        {/* <PickerComponent
          title="Area"
          control={control}
          rules={{required: 'Area is Required'}}
        /> */}
        {/* <View style={styles.dropdownContainer}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dropdownData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Area' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View> */}
        <PickerComponent
          data={areaData}
          title="Area"
          name="Area"
          control={control}
          rules={{required: 'Area information is required'}}
        />
        <PickerComponent
          data={employeeData}
          title="Registered Dealers"
          name="Registered Dealers"
          control={control}
          rules={{required: 'Registered Dealer information is required'}}
        />
        <CustomButton title="Submit" onPress={handleSubmit(navigate)} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    height: 44,
    backgroundColor: '#f1f4f6',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    width: '100%',
  },
  dropdown: {
    height: 44,
    backgroundColor: '#f1f4f6',
    borderRadius: 8,
    paddingHorizontal: 12,
    elevation: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: '#f1f4f6',
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#fafafa',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default SignUp;
