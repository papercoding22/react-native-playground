import {SafeAreaView as RNSafeAreaView, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {useTheme} from '@/theme';

const SafeAreaView: React.FC<PropsWithChildren> = ({children}) => {
  const theme = useTheme();
  const styles: ViewStyle = {
    flex: 1,
    backgroundColor: theme.colors.surfaceContainer,
  };

  return <RNSafeAreaView style={styles}>{children}</RNSafeAreaView>;
};

export default SafeAreaView;
