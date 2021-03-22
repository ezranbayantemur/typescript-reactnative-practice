import React, {FC} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import styles from './Button.style';

export type ButtonTypes = 'primary' | 'outline';
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  type?: ButtonTypes;
}

const Button: FC<ButtonProps> = ({
  title,
  loading,
  type = 'primary',
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      testID="button-touchable"
      disabled={loading}
      style={styles[type].container}
      {...otherProps}>
      {loading ? (
        <ActivityIndicator testID="button-indicator" />
      ) : (
        <Text testID="button-text" style={styles[type].title}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
