import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, BorderRadius } from '../constants/theme';
import { AtlasLogoTextSvg } from './icons/AtlasLogoTextSvg';

interface AtlasLogoProps {
  size?: number;
}

export const AtlasLogo: React.FC<AtlasLogoProps> = ({ size = 100 }) => {
  const borderRadius = size === 60 ? BorderRadius.md : BorderRadius.xl;
  const textWidth = size * 0.54;
  const textHeight = size * 0.14;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <LinearGradient
        colors={[Colors.atlasBlueStart, Colors.atlasBlueEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradient, { borderRadius }]}
      >
        <AtlasLogoTextSvg width={textWidth} height={textHeight} color="#FFFFFF" />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
