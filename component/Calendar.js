import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker';

const Calendar = (props) => {
  const {onRangeChange} = props;

  const startDate = useRef(null);
  const endDate = useRef(null);

  const handlerDataChange = (date, type) => {
    // let a = moment(date).format();
    // console.log(`${type} - ${date}`);

    if (type == 'START_DATE') {
      endDate.current = null;
      startDate.current = date;
    }
    if (type == 'END_DATE') endDate.current = date;

    if (endDate.current) {
      onRangeChange(startDate.current, endDate.current);
    }
  };

  return (
    <CalendarPicker
      onDateChange={handlerDataChange}
      allowRangeSelection={true}
    />
  );
};

export default Calendar;
