import * as React from 'react';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ErrorBoundary from 'react-native-error-boundary';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import ThemeProvider from '@/theme/ThemeProvider';
import {store} from '@/store';
import {ServiceProvider} from '@/providers';
import AppNavigator from '@/navigation/AppNavigator';

import '@/translations';

const queryClient = new QueryClient();

function Root() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
            <ServiceProvider>
              <ApplicationProvider {...eva} theme={eva.light}>
                <ThemeProvider>
                  <AppNavigator />
                </ThemeProvider>
              </ApplicationProvider>
            </ServiceProvider>
          </ErrorBoundary>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default Root;
