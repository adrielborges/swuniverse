import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';

// import { Container } from './styles';

const Home = ({navigation}: StackHeaderProps) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Char List"
        onPress={() => navigation.navigate('CharacterList')}
      />
    </View>
  );
};

export default Home;
