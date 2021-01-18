/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import moment from 'moment';

import Calendar from './component/Calendar';
import Chart from './component/Chart';
import {TESTS} from './data/dummy';
import EVENTTYPES from './model/EventType';
import Dropdown from './component/Dropdown';

// TODO
// Menu Dropdown con tag eventi
// Mockare date, data inizio data fine
// Mockare dati, con 3 valori e la data
// Importare grafico

const App = () => {
  const [values, setValues] = useState([]);
  const [labels, setLabels] = useState([]);
  const [eventSelected, setEventSelected] = useState(null);

  useEffect(() => {
    if (!eventSelected) return;

    // Estrapolare le labels
    const labels = TESTS.map((test) => {
      let day = moment(test.data).format('D/M');
      return day;
    });

    // Estrapolare in base al filtro tag
    // es value1
    const values = TESTS.map((test) => {
      return test[eventSelected];
    });

    console.log(values);

    setLabels(labels);
    setValues(values);
  }, [eventSelected]);

  const handlerEventSelected = (eventSelected) => {
    console.log(eventSelected);
    setEventSelected(eventSelected);
    //use state ed usare in use effect per effettuare un nuovo filtro
  };

  return (
    <View style={styles.screen}>
      {/* Calendar */}
      <Calendar />

      {/* Filter */}
      <Dropdown
        values={Object.keys(EVENTTYPES)}
        onValueSelected={handlerEventSelected}
      />

      {/* Chart */}
      <Chart
        // display.labels e display.values
        labels={labels}
        data={values}
      />
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
