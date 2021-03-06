import React from 'react';
import {StackHeaderProps} from '@react-navigation/stack';

import * as S from './styles';
import {Alert} from 'react-native';

const Home = ({navigation}: StackHeaderProps) => {
  const notAvaliable = () => {
    return Alert.alert(
      'Patience, young Padawan',
      'This category is not available yet.',
      [
        {
          text: 'I will be patient',
        },
      ],
    );
  };

  return (
    <S.Container>
      <S.H1>Welcome to the Star Wars Universe</S.H1>

      <S.H2>Select a category to discover more of the universe:</S.H2>

      <S.CardsContainer>
        <S.CardsContainerWrapLine>
          <S.Card onPress={() => navigation.navigate('CharacterList')}>
            <S.CardImage
              source={require('../../assets/card-images/characters.png')}
            />
            <S.CardText>Characters</S.CardText>
          </S.Card>

          <S.Card onPress={notAvaliable}>
            <S.CardImage
              source={require('../../assets/card-images/spaceship.png')}
            />
            <S.CardText>Coming soon...</S.CardText>
          </S.Card>
        </S.CardsContainerWrapLine>

        <S.CardsContainerWrapLine>
          <S.Card onPress={notAvaliable}>
            <S.CardImage
              source={require('../../assets/card-images/planets.png')}
            />
            <S.CardText>Coming soon...</S.CardText>
          </S.Card>

          <S.Card onPress={notAvaliable}>
            <S.CardImage
              source={require('../../assets/card-images/movies.png')}
            />
            <S.CardText>Coming soon...</S.CardText>
          </S.Card>
        </S.CardsContainerWrapLine>
      </S.CardsContainer>
    </S.Container>
  );
};

export default Home;
