import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Dropdown from './Dropdown';
import Chart from './Chart';
import {TESTS} from '../data/dummy';
import EVENTTYPES from '../model/EventType';
import moment from 'moment';

const EventChart = (props) => {
  const {defaultEvent, values: filteredValues} = props;

  const [eventSelected, setEventSelected] = useState(defaultEvent);
  const [values, setValues] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (!eventSelected || !filteredValues) return;

    // Estrapolare le labels
    const labels = filteredValues.map((test) => {
      let day = moment(test.data).format('D/M');
      return day;
    });

    // Estrapolare in base al filtro tag
    // es value1
    const values = filteredValues.map((test) => {
      return test[eventSelected];
    });

    // console.log('filter values', values);

    setLabels(labels);
    setValues(values);
  }, [eventSelected, filteredValues]);

  const handlerEventSelected = (eventSelected) => {
    console.log(eventSelected);
    setEventSelected(eventSelected);
    //use state ed usare in use effect per effettuare un nuovo filtro
  };

  return (
    // Filtro
    <View>
      <Dropdown
        defaultValue={defaultEvent}
        values={Object.keys(EVENTTYPES)}
        onValueSelected={handlerEventSelected}
      />

      {/* Chart */}
      <Chart labels={labels} data={values} />
    </View>
  );
};

export default EventChart;
