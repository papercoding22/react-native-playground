import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {IconProps, Text} from '@ui-kitten/components';

import {ListItem} from '@/components';
import {Product} from '@/features/models/product';

interface ProductLogoProps extends IconProps {
  product: Product;
}

const ProductLogo: React.FC<ProductLogoProps> = ({product, ...props}) => {
  const source = product.getLogoSource();
  return <Image {...props} style={styles.productLogo} source={source} />;
};

// TODO: Add long press behavior to show more details about the product
const renderProductItem = (
  item: Product,
  index: number,
): React.ReactElement => (
  <ListItem
    key={`${item.name} ${index + 1}`}
    title={`${item.name}`}
    description={`${item.description}`}
    accessoryLeft={(props: IconProps) => (
      <ProductLogo {...props} product={item} />
    )}
  />
);

interface ProductItemProps {
  products: Product[];
}

const ProductList: React.FC<ProductItemProps> = ({products}) => {
  if (products.length === 0) {
    // TODO: Create a component that displays a message when no products are found
    return (
      <Text className="p-3" category="h6">
        No products found
      </Text>
    );
  }

  return <>{products.map(renderProductItem)}</>;
};

export default ProductList;

const styles = StyleSheet.create({
  productLogo: {
    width: 42,
    height: 42,
  },
});
