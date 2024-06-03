import React, {useMemo, useCallback} from 'react';
import {ThemeContextProps} from '@/theme/ThemeProvider';
import {ViewStyle} from 'react-native';
import {Tab, Text, TextProps} from '@ui-kitten/components';
import {RenderProp} from '@ui-kitten/components/devsupport';
import useTheme from '@/theme/useTheme';

const useGetTextStyle = (focused: boolean, theme: ThemeContextProps) => {
  const focusedTextStyle: ViewStyle = useMemo(() => {
    return {
      ...theme.topTabBar.focusedTextStyle,
    };
  }, [theme.topTabBar.focusedTextStyle]);

  const unfocusedTextStyle: ViewStyle = useMemo(() => {
    return {
      ...theme.topTabBar.unfocusedTextStyle,
    };
  }, [theme.topTabBar.unfocusedTextStyle]);

  return focused ? focusedTextStyle : unfocusedTextStyle;
};

const TabItem = ({
  isFocused,
  title,
  ...rest
}: {
  isFocused: boolean;
  title: string;
}) => {
  const theme = useTheme();
  const textStyle = useGetTextStyle(isFocused, theme);

  const renderCustomTitle = useCallback(
    (evaProps: TextProps) => (
      <Text {...evaProps} style={textStyle}>
        {title}
      </Text>
    ),
    [textStyle, title],
  ) as RenderProp<TextProps>;

  return <Tab {...rest} title={renderCustomTitle} />;
};

export default TabItem;
