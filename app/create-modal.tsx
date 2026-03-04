import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width: SCREEN_W } = Dimensions.get('window');

export default function CreateModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      {/* Map Background with pulse animation */}
      <TouchableOpacity
        style={styles.mapArea}
        activeOpacity={1}
        onPress={() => router.back()}
      >
        <Image
          source={require('../assets/images/feed/explore_map.png')}
          style={styles.mapImage}
          resizeMode="cover"
        />
        <View style={styles.mapOverlay} />

        {/* Radar/Pulse rings */}
        <View style={styles.pulseContainer}>
          <View style={[styles.pulseRing, styles.pulseRing1]} />
          <View style={[styles.pulseRing, styles.pulseRing2]} />
          <View style={[styles.pulseRing, styles.pulseRing3]} />
          <View style={styles.pulseDot} />
        </View>
      </TouchableOpacity>

      {/* Expanded Bottom Bar */}
      <View style={styles.bottomBar}>
        {/* Drag handle */}
        <View style={styles.handleRow}>
          <View style={styles.handle} />
        </View>

        {/* Create Title */}
        <Text style={styles.createTitle}>Create</Text>

        {/* Options Row */}
        <View style={styles.optionsRow}>
          {/* Post */}
          <TouchableOpacity
            style={styles.optionBtn}
            activeOpacity={0.7}
            onPress={() => {
              router.back();
              router.push('/photo-gallery');
            }}
          >
            <View style={styles.optionIconContainer}>
              <View style={styles.cameraIcon}>
                <View style={styles.cameraBody} />
                <View style={styles.cameraLens} />
              </View>
            </View>
            <Text style={styles.optionLabel}>Post</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Library */}
          <TouchableOpacity
            style={styles.optionBtn}
            activeOpacity={0.7}
            onPress={() => {
              router.back();
              router.push('/photo-gallery');
            }}
          >
            <View style={styles.optionIconContainer}>
              <View style={styles.fileIcon}>
                <View style={styles.fileBody} />
                <View style={styles.fileFold} />
              </View>
            </View>
            <Text style={styles.optionLabel}>Library</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom nav icons row */}
        <View style={styles.navRow}>
          <TouchableOpacity
            style={styles.navBtn}
            activeOpacity={0.7}
            onPress={() => router.back()}
          >
            <View style={styles.navDot} />
          </TouchableOpacity>

          <View style={styles.plusBtnActive}>
            <Text style={styles.plusIcon}>+</Text>
          </View>

          <TouchableOpacity
            style={styles.navBtn}
            activeOpacity={0.7}
            onPress={() => router.back()}
          >
            <View style={styles.navDot} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000000',
  },

  // Map area
  mapArea: {
    flex: 1,
    position: 'relative',
  },
  mapImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  // Pulse animation
  pulseContainer: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    marginLeft: -75,
    marginTop: -75,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pulseRing: {
    position: 'absolute',
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: 'rgba(0,122,255,0.4)',
  },
  pulseRing1: {
    width: 150,
    height: 150,
    opacity: 0.3,
  },
  pulseRing2: {
    width: 100,
    height: 100,
    opacity: 0.5,
  },
  pulseRing3: {
    width: 50,
    height: 50,
    opacity: 0.7,
  },
  pulseDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF',
  },

  // Bottom bar
  bottomBar: {
    backgroundColor: '#282828',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop: 12,
    paddingBottom: 30,
    paddingHorizontal: 30,
    minHeight: 220,
  },
  handleRow: {
    alignItems: 'center',
    marginBottom: 16,
  },
  handle: {
    width: 46,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#CFD0D1',
  },
  createTitle: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 24,
  },

  // Options
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
    gap: 40,
  },
  optionBtn: {
    alignItems: 'center',
    gap: 10,
  },
  optionIconContainer: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionLabel: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 13,
    color: '#FFFFFF',
  },
  divider: {
    width: 1,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },

  // Camera icon (simplified)
  cameraIcon: {
    width: 24,
    height: 20,
    position: 'relative',
  },
  cameraBody: {
    width: 24,
    height: 16,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
  },
  cameraLens: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    position: 'absolute',
    bottom: 4,
    left: 8,
  },

  // File icon (simplified)
  fileIcon: {
    width: 20,
    height: 24,
    position: 'relative',
  },
  fileBody: {
    width: 20,
    height: 24,
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  fileFold: {
    width: 8,
    height: 8,
    borderBottomWidth: 1.5,
    borderLeftWidth: 1.5,
    borderColor: '#FFFFFF',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  // Nav row
  navRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  navBtn: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  plusBtnActive: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    fontSize: 24,
    fontWeight: '300',
    color: '#FFFFFF',
    marginTop: -2,
  },
});
