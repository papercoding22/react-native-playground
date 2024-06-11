/**
 * Component that displays a list of products.
 *
 * @component
 */
import React, {useMemo} from 'react';
import {Text} from '@ui-kitten/components';
import {Card} from '@/components';
import {View as RNView, ViewStyle} from 'react-native';
import ProductList from './ProductList';
import {Product} from '../models/product';

// TODO: Replace this mock data with a real data source
const MOCK_DATA = [
  new Product('1', 'Product 1', 'Description 1', 'instagram'),
  new Product('2', 'Product 2', 'Description 2', 'twitter'),
];

const ProductListView = () => {
  const styles: ViewStyle = useMemo(() => {
    return {
      flex: 0,
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 16,
      overflow: 'hidden',
    };
  }, []);

  return (
    <Card style={styles}>
      <RNView className="mb-2 pl-2">
        <Text category="h6">Product List</Text>
      </RNView>
      <ProductList products={MOCK_DATA} />
    </Card>
  );
};

export default ProductListView;
