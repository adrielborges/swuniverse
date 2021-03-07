/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {debug} from 'react-native-reanimated';
import {render, fireEvent, shallow} from 'react-native-testing-library';

import Home from './../../screens/Home';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Home page', () => {
  it('should be able to navigate to CharacterList', () => {
    const {getByText} = render(<Home />);

    const buttonElement = getByText('Characters');

    fireEvent.press(buttonElement);

    expect(mockedNavigate).toHaveBeenCalledWith('CharacterList');
  });

  it('should be appears alert when try to navigate to a unavailiable category', () => {
    const {getAllByText} = render(<Home />);
    const buttonElement = getAllByText('Coming soon...');

    fireEvent.press(buttonElement[1]);
  });
});
