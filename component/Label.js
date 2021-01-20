import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const Label = (props) => {
  const {text, width, height, index, onClick} = props;

  console.log(height);

  return (
    <TouchableWithoutFeedback onPress={() => onClick()}>
      {/* <View style={{...styles.buttonContainer, width: width, height: height}}> */}
      <View style={{...styles.buttonContainer}}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: 'green',
  },

  buttonText: {
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center',
    height: '100%',
  },
});
export default Label;
