import React from 'react';
import { View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from './constants';


export const TabIcon = (icon) => {

  return ({focused, title}) => {
    return (
          <FontAwesomeIcon style={{fontSize: 25, color: focused ? colors.green : colors.white}} icon={icon} />
    )
  }
};

