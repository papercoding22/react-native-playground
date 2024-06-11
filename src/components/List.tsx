import React from 'react';
import {useTheme} from '@/theme';
import {ListProps, List as UIKittenList} from '@ui-kitten/components';
import {ViewStyle} from 'react-native';

interface Props extends ListProps {
  contentContainerStyle?: ViewStyle;
  style?: ViewStyle;
}

const List: React.FC<Props> = ({
  style,
  contentContainerStyle,
  data,
  renderItem,
  ...rest
}) => {
  const theme = useTheme();
  const backgroundStyle = {backgroundColor: theme.colors.surfaceContainerHigh};
  return (
    <UIKittenList
      {...rest}
      contentContainerStyle={contentContainerStyle}
      style={[backgroundStyle, style]}
      data={data}
      renderItem={renderItem}
    />
  );
};

export default List;
