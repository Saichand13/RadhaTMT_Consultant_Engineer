import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {useForm, Controller} from 'react-hook-form';

const PickerComponent = ({data, title, control, name, rules = {}}) => {
  // const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && {color: '#5581DE'}]}>
  //         {title}
  //       </Text>
  //     );
  //   }
  //   return null;
  // };
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View style={styles.container}>
            {/* {renderLabel()} */}
            <Dropdown
              style={[
                styles.dropdown,
                // isFocus && {borderColor: '#5581DE'},
                error ? {borderColor: 'red'} : '',
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              // search
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder={title}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={onBlur}
              onChange={item => {
                onChange(item.value);
              }}
            />
          </View>
          {error && (
            <Text style={{color: 'red', margin: 10}}>
              {error.message || 'This field is required'}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default PickerComponent;

const styles = StyleSheet.create({
  container: {
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
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#f1f4f6',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 15,
    fontWeight: '300',
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
