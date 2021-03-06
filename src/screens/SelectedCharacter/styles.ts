import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;

  padding: 16px 32px;
  background: #1c1e22;
`;

export const CardItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 16px;

  width: 288px;
  height: 64px;

  border-radius: 4px;

  background: #f1f1f1;

  padding: 0px 16px;
`;

export const CardTitleText = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;
export const CardInfoText = styled.Text`
  font-size: 26px;
  font-weight: 700;
`;
