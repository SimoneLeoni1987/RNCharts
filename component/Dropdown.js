import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';

import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';

export default (props) => {
  const {values, onValueSelected} = props;

  const [valueSelected, setValueSelected] = useState('Evento');

  const menu = useRef(null);

  const showMenu = () => {
    menu.current.show();
  };

  const hideMenu = () => {
    menu.current.hide();
  };

  const handlerSelected = (value) => {
    hideMenu();
    setValueSelected(value);
    onValueSelected(value);
  };

  return (
    <View>
      <Menu ref={menu} button={<Text onPress={showMenu}>{valueSelected}</Text>}>
        {values.map((value) => (
          <MenuItem key={value} onPress={() => handlerSelected(value)}>
            {value}
          </MenuItem>
        ))}
      </Menu>
    </View>
  );
};
