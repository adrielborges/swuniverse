import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import api from './../../services/api';

import {Text} from 'react-native';

import IconFoundation from 'react-native-vector-icons/Foundation';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';

export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  url: string;
}

interface IRequestCharacters {
  count: number;
  next: string;
  previous: string;
  results: ICharacter[];
}

const CharacterList = () => {
  const [charactersList, setCharactersList] = useState<ICharacter[]>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const {navigate} = useNavigation();

  const loadCharacters = useCallback(
    async (pageNumber: number) => {
      if (totalPage && pageNumber > totalPage) {
        return;
      }
      setLoading(true);

      const {data} = await api.get<IRequestCharacters>(
        `/people/?page=${pageNumber}`,
      );

      setTotalPage(Math.ceil(Number(data.count) / 10));

      if (pageNumber > 1) {
        setCharactersList([...charactersList, ...data.results]);
        setLoading(false);
        return setPage(page + 1);
      }

      setCharactersList(data.results);
      setLoading(false);
    },
    [charactersList, page, totalPage],
  );

  useEffect(() => {
    loadCharacters(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCharacters = ({item}: {item: ICharacter}) => (
    <S.ListItem
      data-testid="characterItem"
      onPress={() => navigate('SelectedCharacter', item)}>
      <S.ListItemTitleContainer>
        <IconFontAwesome size={26} name="user" />
        <S.ListItemText numberOfLines={1}>{item.name}</S.ListItemText>
      </S.ListItemTitleContainer>

      {item.gender === 'male' ? (
        <IconFoundation size={26} name="male-symbol" />
      ) : item.gender === 'female' ? (
        <IconFoundation size={26} name="female-symbol" />
      ) : (
        <Text />
      )}
    </S.ListItem>
  );

  return (
    <S.Container>
      <S.H2>Choose a character to learn more about him:</S.H2>

      {loading === true ? (
        <S.LoadingText>
          wait a while as we search for more characters...
        </S.LoadingText>
      ) : null}

      <S.ListContainer
        data={charactersList}
        keyExtractor={(character) => character.url}
        renderItem={renderCharacters}
        onEndReached={() => loadCharacters(page)}
        onEndReachedThreshold={0.1}
      />
    </S.Container>
  );
};

export default CharacterList;
