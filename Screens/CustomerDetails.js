import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import StepIndicator from 'react-native-step-indicator';

const CustomerDetails = () => {
  const labels = ['Customer Details', 'Order Details', 'Order Confirmation'];

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#76CAEF',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#76CAEF',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#76CAEF',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#76CAEF',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#76CAEF',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#76CAEF',
  };
  const [state, setState] = useState({
    currentPosition: 0,
  });

  return (
    <View style={{flex: 1, padding: 10, backgroundColor: '#fff'}}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={state.currentPosition}
        labels={labels}
        stepCount={3}
      />
    </View>
  );
};

export default CustomerDetails;

const styles = StyleSheet.create({});
