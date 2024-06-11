import {View as RNView, ViewProps, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {useTheme} from '@/theme';

interface Props {
  style?: ViewStyle;
}

const Layout: React.FC<Props & PropsWithChildren & ViewProps> = ({
  style,
  children,
  ...rest
}) => {
  const theme = useTheme();
  const _style: ViewStyle = {
    backgroundColor: theme.components.layout.background,
  };

  return (
    <RNView {...rest} style={[_style, style]}>
      {children}
    </RNView>
  );
};

export default Layout;
