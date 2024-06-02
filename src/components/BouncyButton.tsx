import React, {useRef} from 'react';
import {
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  TouchableWithoutFeedbackProps,
} from 'react-native';

interface Props extends TouchableWithoutFeedbackProps {
  children?: React.ReactNode;
}

const BouncyButton: React.FC<Props> = ({children, ...rest}) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.8,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      {...rest}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Animated.View
        style={[styles.button, {transform: [{scale: scaleValue}]}]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BouncyButton;
