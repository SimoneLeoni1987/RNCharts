import React from 'react';
import {StyleSheet} from 'react-native';
import moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker';

const Calendar = (props) => {
  const onDateChange = (date, second) => {
    let a = moment(date).format();
    console.log(`${second} - ${a}`);
  };

  return (
    <CalendarPicker onDateChange={onDateChange} allowRangeSelection={true} />
  );
};

export default Calendar;
