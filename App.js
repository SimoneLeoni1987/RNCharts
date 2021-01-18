/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Button, Text, ScrollView} from 'react-native';
import moment from 'moment';
import {TESTS} from './data/dummy';

import Calendar from './component/Calendar';
import EVENTTYPES from './model/EventType';
import EventChart from './component/EventChart';

// TODO
// Menu Dropdown con tag eventi
// Mockare date, data inizio data fine
// Mockare dati, con 3 valori e la data
// Importare grafico

const App = () => {
  const [filteredValues, setFilteredValues] = useState([]);

  const handleRangeChange = (startDate, endDate) => {
    let a = moment(startDate).format('D/M');
    let b = moment(endDate).format('D/M');
    console.log(`${a} - ${b}`);

    // Filtro
    const filteredValues = TESTS.filter((item) => {
      return (
        item.data >= moment(startDate).format() &&
        item.data <= moment(endDate).format()
      );
    });

    setFilteredValues(filteredValues);
  };

  return (
    <View style={styles.screen}>
      <ScrollView>
        {/* Calendar */}
        <Calendar onRangeChange={handleRangeChange} />

        <EventChart values={filteredValues} defaultEvent={EVENTTYPES.OXYGEN} />
        <EventChart
          values={filteredValues}
          defaultEvent={EVENTTYPES.BLOODPRESSURE}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
