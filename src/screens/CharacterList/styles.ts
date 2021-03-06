import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFoundation from 'react-native-vector-icons/Foundation';

export const Container = styled.View`
  flex: 1;
  background: #121214;
  padding: 16px 36px;
`;

export const H2 = styled.Text`
  font-weight: 700;
  font-size: 16px;

  margin-top: 32px;
  color: #d2c81f;
`;

export const ListContainer = styled.View`
  align-items: center;
`;
export const ListItem = styled(TouchableOpacity)`
  background: #f1f1f1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 16px;

  width: 288px;
  height: 45px;

  border-radius: 4px;
  padding: 0px 16px;
`;

export const IconFontAwesomeSvg = styled(IconFontAwesome)``;
export const IconFoundationSvg = styled(IconFoundation)``;

export const ListItemText = styled.Text`
  font-size: 16px;
`;
