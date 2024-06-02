import * as React from 'react';

import BaseNavigationContainer from './BaseNavigationContainer';

interface Props {
  isPublic: boolean;
  publicNavigator: React.JSX.Element;
  privateNavigator: React.JSX.Element;
}

const FlowNavigator: React.FC<Props> = ({
  isPublic,
  publicNavigator,
  privateNavigator,
}) => {
  return (
    <BaseNavigationContainer>
      {isPublic ? privateNavigator : null}
      {!isPublic ? publicNavigator : null}
    </BaseNavigationContainer>
  );
};

export default FlowNavigator;
