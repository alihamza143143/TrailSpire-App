import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Colors, BorderRadius, Layout } from '../constants/theme';

interface SocialLoginButtonProps {
  icon: any;
  onPress: () => void;
  style?: ViewStyle;
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  icon,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image source={icon} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Layout.socialButtonWidth,
    height: Layout.socialButtonHeight,
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
