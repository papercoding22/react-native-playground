import * as React from 'react';
import {render} from '@testing-library/react-native';

import App from '../App';

describe('App', () => {
  it('renders without crashing', async () => {
    jest.useFakeTimers();

    const ReactQueryWrapper = global.ReactQueryWrapper;
    render(
      <ReactQueryWrapper>
        <App />
      </ReactQueryWrapper>,
    );

    expect(App).toBeTruthy();
  });
});
