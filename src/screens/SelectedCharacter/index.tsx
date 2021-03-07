/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {ICharacter} from '../CharacterList';
import * as S from './styles';
import {useEffect} from 'react';

type ParamList = {
  char: ICharacter;
};

const SelectedCharacter = () => {
  const {params} = useRoute<RouteProp<ParamList, 'char'>>();
  const {setOptions} = useNavigation();

  const {
    birth_year,
    eye_color,
    hair_color,
    height,
    mass,
    skin_color,
    name,
  } = params;

  useEffect(() => {
    setOptions({title: name});
  }, [name, setOptions]);

  return (
    <S.Container>
      <S.CardItem>
        <S.CardTitleContainer>
          <MaterialCommunityIcons
            color="#1c1e22"
            size={26}
            name="human-male-height-variant"
          />
          <S.CardTitleText>Height</S.CardTitleText>
        </S.CardTitleContainer>

        <S.CardInfoText>{height}</S.CardInfoText>
      </S.CardItem>

      <S.CardItem>
        <S.CardTitleContainer>
          <MaterialCommunityIcons color="#1c1e22" size={26} name="weight" />
          <S.CardTitleText>Mass</S.CardTitleText>
        </S.CardTitleContainer>

        <S.CardInfoText>{mass}</S.CardInfoText>
      </S.CardItem>

      <S.CardItem>
        <S.CardTitleContainer>
          <MaterialCommunityIcons color="#1c1e22" size={26} name="hair-dryer" />
          <S.CardTitleText>Hair Color</S.CardTitleText>
        </S.CardTitleContainer>

        <S.CardInfoText>{hair_color}</S.CardInfoText>
      </S.CardItem>

      <S.CardItem>
        <S.CardTitleContainer>
          <MaterialCommunityIcons
            color="#1c1e22"
            size={26}
            name="tshirt-crew"
          />
          <S.CardTitleText>Skin Color</S.CardTitleText>
        </S.CardTitleContainer>

        <S.CardInfoText>{skin_color}</S.CardInfoText>
      </S.CardItem>

      <S.CardItem>
        <S.CardTitleContainer>
          <MaterialCommunityIcons color="#1c1e22" size={26} name="eye" />
          <S.CardTitleText>Eye Color</S.CardTitleText>
        </S.CardTitleContainer>

        <S.CardInfoText>{eye_color}</S.CardInfoText>
      </S.CardItem>

      <S.CardItem>
        <S.CardTitleContainer>
          <FontAwesome color="#1c1e22" size={26} name="birthday-cake" />
          <S.CardTitleText>Birth Year</S.CardTitleText>
        </S.CardTitleContainer>

        <S.CardInfoText>{birth_year}</S.CardInfoText>
      </S.CardItem>
    </S.Container>
  );
};

export default SelectedCharacter;
