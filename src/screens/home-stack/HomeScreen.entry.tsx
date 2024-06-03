import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SafeAreaView from '@/components/SafeAreaView';
import BaseTopTabNavigator from '@/navigation/@core/BaseTopTabNavigator';

import {TopBarStackParamList} from './types';
import FeaturedView from './FeaturedView';
import ForYouView from './ForYouView';

const TopTabStack = createMaterialTopTabNavigator<TopBarStackParamList>();

const tabItems = [{title: 'Featured'}, {title: 'For You'}];

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <BaseTopTabNavigator<TopBarStackParamList>
        stack={TopTabStack}
        tabItems={tabItems}>
        <TopTabStack.Screen name="Featured" component={FeaturedView} />
        <TopTabStack.Screen name="ForYou" component={ForYouView} />
      </BaseTopTabNavigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
