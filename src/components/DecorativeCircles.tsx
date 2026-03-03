import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../constants/theme';

/**
 * Decorative circles matching the Figma Ellipse28/29/30 design.
 * Positioned at top-right of the screen. No external URLs.
 */
export const DecorativeCircles: React.FC = () => {
  return (
    <View style={styles.container} pointerEvents="none">
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -60,
    right: -60,
    width: 280,
    height: 280,
  },
  circle1: {
    position: 'absolute',
    top: 30,
    right: 30,
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 1.5,
    borderColor: Colors.divider,
    opacity: 0.5,
  },
  circle2: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 1.5,
    borderColor: Colors.divider,
    opacity: 0.3,
  },
  circle3: {
    position: 'absolute',
    top: 60,
    right: 60,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1.5,
    borderColor: Colors.divider,
    opacity: 0.7,
  },
});
