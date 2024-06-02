import * as React from 'react';

import BaseNavigator from './BaseNavigator';

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
    <BaseNavigator>
      {isPublic ? privateNavigator : null}
      {!isPublic ? publicNavigator : null}
    </BaseNavigator>
  );
};

export default FlowNavigator;
