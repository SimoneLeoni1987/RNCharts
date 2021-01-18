import EVENTTYPES from './EventType';

class DataValue {
  constructor(date, value1, value2, value3) {
    this.data = date;

    this[EVENTTYPES.BLOODPRESSURE] = value1;
    this[EVENTTYPES.STRESS] = value2;
    this[EVENTTYPES.OXYGEN] = value3;
  }
}

export default DataValue;
