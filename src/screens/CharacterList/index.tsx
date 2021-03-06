import React from 'react';
import {useNavigation} from '@react-navigation/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFoundation from 'react-native-vector-icons/Foundation';

import * as S from './styles';
import {Text} from 'react-native';

const CharacterList = () => {
  const {navigate} = useNavigation();
  const genre = 'male';

  return (
    <S.Container>
      <S.H2>Choose a character to learn more about him:</S.H2>

      <S.ListContainer>
        <S.ListItem onPress={() => navigate('SelectedCharacter')}>
          <IconFontAwesome size={26} name="user" />
          <S.ListItemText>Luke Skywalker</S.ListItemText>
          {genre === 'male' ? (
            <IconFoundation size={26} name="male-symbol" />
          ) : genre === 'female' ? (
            <IconFoundation size={26} name="female-symbol" />
          ) : null}
        </S.ListItem>

        <S.ListItem onPress={() => navigate('SelectedCharacter')}>
          <IconFontAwesome size={26} name="user" />
          <S.ListItemText>Leia Skywalker</S.ListItemText>
          <IconFoundation size={26} name="female-symbol" />
        </S.ListItem>

        <S.ListItem onPress={() => navigate('SelectedCharacter')}>
          <IconFontAwesome size={26} name="user" />
          <S.ListItemText>C3-po</S.ListItemText>
          <Text />
        </S.ListItem>
      </S.ListContainer>
    </S.Container>
  );
};

export default CharacterList;
