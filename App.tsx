import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
      <Text>Hello React-Navigation!</Text>
    </NavigationContainer>
  );
};

export default App;
