import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, FontSize, FontWeight } from '../constants/theme';

interface BackButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

export const BackButton: React.FC<BackButtonProps> = ({ onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.6}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Text style={styles.text}>{'< Back'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    paddingLeft: 26,
  },
  text: {
    fontSize: FontSize.medium,
    fontWeight: FontWeight.regular,
    color: Colors.textDark,
    fontFamily: 'System',
  },
});
