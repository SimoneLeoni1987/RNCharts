import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Label from './Label';

const XAxis = (props) => {
  const {data, width, height, index, onClick} = props;

  console.log(height);

  return (
    <View style={{...styles.container, width: width, height: height}}>
      {data.map((d, index) => (
        <Label
          text={d}
          onClick={() => {
            console.log(index);
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
});
export default XAxis;
