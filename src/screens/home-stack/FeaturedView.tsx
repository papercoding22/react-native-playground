import React from 'react';
import {ScrollView} from 'react-native';

import {Layout} from '@/components';
import {ProductListView} from '@/features';

const FeaturedView = () => {
  return (
    <ScrollView>
      <Layout className="flex p-4">
        <ProductListView />
      </Layout>
    </ScrollView>
  );
};

export default FeaturedView;
