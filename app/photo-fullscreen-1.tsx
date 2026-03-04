import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

export default function PhotoFullscreen1Screen() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.screen}
      activeOpacity={1}
      onPress={() => router.back()}
    >
      <LinearGradient
        colors={['#9CE6FF', '#A8CFDB']}
        style={styles.gradient}
      />
      <Image
        source={require('../assets/images/feed/photo_preview_1.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  gradient: { ...StyleSheet.absoluteFillObject },
  image: { width: SCREEN_W * 0.85, height: SCREEN_H * 0.65, borderRadius: 16 },
});
