import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size, color, style}) => {
  return (
    <View style={[styles.spinnerStyle, style]}>
      <ActivityIndicator size={size || 'large'} color={color}/>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
