import {ViewStyle} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {TabBar} from '@ui-kitten/components';
import {useTheme} from '@/theme';

import TabItem from './TabItem';

export interface TabItem {
  title: string;
}

interface Props extends MaterialTopTabBarProps {
  tabItems: TabItem[];
}

const TopTabBar: React.FC<Props> = ({navigation, state, tabItems}) => {
  const theme = useTheme();

  const currentIndex = state.index;

  const tabBarStyle: ViewStyle = useMemo(() => {
    return {
      ...theme.components.topTabBar.shadow,
      justifyContent: 'space-around',
      backgroundColor: theme.components.topTabBar.background,
    };
  }, [
    theme.components.topTabBar.background,
    theme.components.topTabBar.shadow,
  ]);

  const indicatorStyle: ViewStyle = useMemo(() => {
    return {
      backgroundColor:
        theme.components.topTabBar.indicatorStyle.backgroundColor,
      width: theme.components.topTabBar.indicatorStyle.width,
    };
  }, [
    theme.components.topTabBar.indicatorStyle.backgroundColor,
    theme.components.topTabBar.indicatorStyle.width,
  ]);

  const handleSelectTab = useCallback(
    (index: number) => {
      navigation.navigate(state.routeNames[index]);
    },
    [navigation, state.routeNames],
  );

  return (
    <TabBar
      style={tabBarStyle}
      indicatorStyle={indicatorStyle}
      selectedIndex={currentIndex}
      onSelect={handleSelectTab}>
      {tabItems.map((tabItem, index) => {
        return (
          <TabItem
            key={`${tabItem.title}-${index}`}
            title={tabItem.title}
            isFocused={currentIndex === index}
          />
        );
      })}
    </TabBar>
  );
};

export default TopTabBar;
