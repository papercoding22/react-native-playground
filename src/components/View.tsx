import {View as RNView, ViewProps, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import useTheme from '@/theme/useTheme';

interface Props {
  style?: ViewStyle;
}

const View: React.FC<Props & PropsWithChildren & ViewProps> = ({
  style,
  children,
  ...rest
}) => {
  const theme = useTheme();
  const _style: ViewStyle = {
    backgroundColor: theme.colors.surfaceContainer,
  };

  return (
    <RNView {...rest} style={[_style, style]}>
      {children}
    </RNView>
  );
};

export default View;
