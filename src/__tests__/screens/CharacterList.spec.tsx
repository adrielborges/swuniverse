import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';

import CharacterList from './../../screens/CharacterList';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Home page', () => {
  it('should be able to navigate to SelectedCharacter', () => {
    const {getAllByTestId} = render(<CharacterList />);

    const buttonElement = getAllByTestId('characterItem');

    fireEvent.press(buttonElement[1]);
  });
});
