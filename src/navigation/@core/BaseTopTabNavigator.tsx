import React, {PropsWithChildren, useCallback} from 'react';
import {ParamListBase} from '@react-navigation/native';
import {
  MaterialTopTabBarProps,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import TopTabBar, {TabItem} from '@/components/TopTabBar';

interface Props<T extends ParamListBase> {
  stack: ReturnType<typeof createMaterialTopTabNavigator<T>>;
  tabItems: TabItem[];
}

const handleRenderTopTabBar =
  (tabItems: TabItem[]) => (props: MaterialTopTabBarProps) => {
    return <TopTabBar {...props} tabItems={tabItems} />;
  };

function BaseTopTabNavigator<T extends ParamListBase>({
  stack: TopTabStack,
  children,
  tabItems,
}: PropsWithChildren<Props<T>>) {
  const renderTopBar = useCallback(
    () => handleRenderTopTabBar(tabItems),
    [tabItems],
  );

  return (
    <TopTabStack.Navigator
      tabBar={renderTopBar()}
      keyboardDismissMode="on-drag">
      {children}
    </TopTabStack.Navigator>
  );
}

export default BaseTopTabNavigator;
