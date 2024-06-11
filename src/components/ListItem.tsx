import React from 'react';

import {
  ListItemProps,
  Text,
  ListItem as UIKittenListItem,
} from '@ui-kitten/components';
import {useTheme} from '@/theme';

interface Props extends ListItemProps {
  title: string;
  description: string;
}

const ListItem: React.FC<Props> = ({title, description, ...rest}) => {
  const theme = useTheme();
  const backgroundStyle = {
    backgroundColor: theme.components.card.background,
  };
  return (
    <UIKittenListItem
      {...rest}
      style={backgroundStyle}
      title={<Text className="mb-1">{title}</Text>}
      description={<Text>{description}</Text>}
    />
  );
};

export default ListItem;
