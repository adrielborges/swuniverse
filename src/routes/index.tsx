import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import CharacterList from './../screens/CharacterList/index';
import SelectedCharacter from './../screens/SelectedCharacter/index';

const Routes = () => {
  const {Navigator, Screen} = createStackNavigator();
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Welcome" component={Home} options={{headerShown: false}} />
      <Screen
        name="CharacterList"
        component={CharacterList}
        options={{title: 'Characters of Star Wars'}}
      />
      <Screen name="SelectedCharacter" component={SelectedCharacter} />
    </Navigator>
  );
};

export default Routes;
