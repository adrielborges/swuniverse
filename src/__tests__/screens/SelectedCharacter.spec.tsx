import React from 'react';
import {render} from 'react-native-testing-library';

import SelectedCharacter from './../../screens/SelectedCharacter';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
    useRoute: () => ({
      params: mockedNavigate,
    }),
  };
});

describe('Home page', () => {
  it('should be able to debug', () => {
    const {debug} = render(<SelectedCharacter />);
    debug();
  });
});
