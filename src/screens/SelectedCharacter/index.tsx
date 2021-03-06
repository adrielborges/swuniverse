import React from 'react';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';

const SelectedCharacter: React.FC = () => {
  return (
    <S.Container>
      <S.CardItem>
        <MaterialCommunityIcons size={26} name="human-male-height-variant" />
        <S.CardTitleText>Height</S.CardTitleText>
        <S.CardInfoText>172</S.CardInfoText>
      </S.CardItem>

      <S.CardItem>
        <FontAwesome5 size={26} name="weight" />
        <S.CardTitleText>Mass</S.CardTitleText>
        <S.CardInfoText>77</S.CardInfoText>
      </S.CardItem>

      <S.CardItem>
        <MaterialCommunityIcons size={26} name="hair-dryer" />
        <S.CardTitleText>Hair Color</S.CardTitleText>
        <S.CardInfoText>Blond</S.CardInfoText>
      </S.CardItem>

      <S.CardItem>
        <FontAwesome5 size={26} name="tshirt" />
        <S.CardTitleText>Skin Color</S.CardTitleText>
        <S.CardInfoText>fair</S.CardInfoText>
      </S.CardItem>

      <S.CardItem>
        <MaterialCommunityIcons size={26} name="eye" />
        <S.CardTitleText>Eye Color</S.CardTitleText>
        <S.CardInfoText>blue</S.CardInfoText>
      </S.CardItem>

      <S.CardItem>
        <FontAwesome size={26} name="birthday-cake" />
        <S.CardTitleText>Birth Year</S.CardTitleText>
        <S.CardInfoText>19BBY</S.CardInfoText>
      </S.CardItem>
    </S.Container>
  );
};

export default SelectedCharacter;
