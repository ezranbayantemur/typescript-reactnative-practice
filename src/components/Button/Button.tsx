import React, {FC} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({title, loading, ...otherProps}) => {
  return (
    <TouchableOpacity
      testID="button-touchable"
      disabled={loading}
      {...otherProps}>
      {loading ? (
        <ActivityIndicator size="large" testID="button-indicator" />
      ) : (
        <Text testID="button-text">{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
