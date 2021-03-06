/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components/native';
import {ImageProps, ImageBackgroundProps} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #121214;
  padding: 16px 36px;
`;

export const H1 = styled.Text`
  font-weight: 700;
  font-size: 32px;
  color: #f1f1f1;
`;
export const H2 = styled.Text`
  font-weight: 700;
  font-size: 16px;

  margin-top: 32px;
  color: #d2c81f;
`;

export const CardsContainer = styled.View`
  margin-top: 2px;
`;
export const CardsContainerWrapLine = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 16px;
`;
export const Card = styled(TouchableOpacity)`
  width: 136px;
  height: 178px;

  border-radius: 4px;

  background: #f1f1f1;
`;
export const CardImage = styled.Image<ImageProps>`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
export const CardText = styled.Text`
  text-align: center;
`;
