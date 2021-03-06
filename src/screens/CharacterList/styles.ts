/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FlatList} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFoundation from 'react-native-vector-icons/Foundation';
import {ICharacter} from '.';

export const Container = styled.View`
  flex: 1;
  background: #121214;
  padding: 16px 36px;
`;

export const H2 = styled.Text`
  font-weight: 700;
  font-size: 18px;

  margin-top: 18px;
  color: #d2c81f;
`;

export const LoadingText = styled.Text`
  margin-top: 8px;
  color: #f1f1f1;
`;

export const ListContainer = styled(FlatList as new () => FlatList<ICharacter>)`
  margin-top: 24px;
  width: 100%;
  border-radius: 5px;
`;
export const ListItem = styled(TouchableOpacity)`
  background: #f1f1f1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 16px;

  width: 100%;
  height: 64px;

  border-radius: 4px;
  padding: 0px 16px;
`;

export const ListItemTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ListItemText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  padding-left: 8px;
`;
