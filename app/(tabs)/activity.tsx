import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../src/constants/theme';
import { HeartIcon } from '../../src/components/icons/HeartIcon';
import { ArrowUpRightIcon } from '../../src/components/icons/ArrowUpRightIcon';
import { MapPinIcon } from '../../src/components/icons/MapPinIcon';

const { width: SCREEN_W } = Dimensions.get('window');

const IMAGES = {
  activityMap: require('../../assets/images/feed/activity_map.png'),
  snow: require('../../assets/images/feed/feed_snow_mountain.png'),
  landscape: require('../../assets/images/feed/feed_landscape.png'),
  adventure: require('../../assets/images/feed/feed_adventure.png'),
  hikerSnow: require('../../assets/images/feed/feed_hiker_snow.png'),
  skiing: require('../../assets/images/feed/feed_skiing.png'),
  tent: require('../../assets/images/feed/feed_tent.png'),
  iceland: require('../../assets/images/feed/feed_iceland.png'),
  jeep: require('../../assets/images/feed/feed_jeep.png'),
  powder: require('../../assets/images/feed/feed_powder.png'),
  trailSunset: require('../../assets/images/feed/feed_trail_sunset.png'),
  profile1: require('../../assets/images/feed/profile_photo1.png'),
  profile2: require('../../assets/images/feed/profile_photo2.png'),
  profile3: require('../../assets/images/feed/profile_photo3.png'),
};

const TAGGED_USERS = [
  { id: '1', name: '@ashley', image: IMAGES.profile1 },
  { id: '2', name: '@marco', image: IMAGES.profile2 },
  { id: '3', name: '@elena', image: IMAGES.profile3 },
];

interface GalleryItem {
  id: string;
  image: any;
  height: number;
}

const GALLERY_LEFT: GalleryItem[] = [
  { id: '1', image: IMAGES.landscape, height: 240 },
  { id: '2', image: IMAGES.tent, height: 200 },
  { id: '3', image: IMAGES.iceland, height: 260 },
];

const GALLERY_RIGHT: GalleryItem[] = [
  { id: '4', image: IMAGES.hikerSnow, height: 200 },
  { id: '5', image: IMAGES.skiing, height: 260 },
  { id: '6', image: IMAGES.adventure, height: 190 },
];

export default function ActivityScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Activity Map */}
        <View style={styles.mapContainer}>
          <Image
            source={IMAGES.activityMap}
            style={styles.mapImage}
            resizeMode="cover"
          />
          {/* Back button overlay */}
          <TouchableOpacity
            style={styles.backBtn}
            activeOpacity={0.7}
            onPress={() => router.back()}
          >
            <Text style={styles.backBtnText}>{'<'}</Text>
          </TouchableOpacity>
        </View>

        {/* Activity Data Section */}
        <View style={styles.dataSection}>
          <Text style={styles.dataSectionTitle}>Activity Data</Text>

          {/* Stats */}
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Distance</Text>
            <View style={styles.statBarContainer}>
              <View style={[styles.statBar, { width: '80%' }]} />
            </View>
            <Text style={styles.statValue}>33km</Text>
          </View>

          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Elevation</Text>
            <View style={styles.statBarContainer}>
              <View style={[styles.statBarWave]} />
            </View>
            <Text style={styles.statValue}>2550mt</Text>
          </View>

          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Time</Text>
            <View style={styles.statBarContainer}>
              <View style={[styles.statBar, { width: '60%', backgroundColor: '#CFD0D1' }]} />
            </View>
            <Text style={styles.statValue}>5d 3h</Text>
          </View>
        </View>

        {/* Tagged Users */}
        <View style={styles.taggedSection}>
          <Text style={styles.taggedTitle}>Tagged</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.taggedRow}
          >
            {TAGGED_USERS.map((user) => (
              <TouchableOpacity key={user.id} style={styles.taggedItem} activeOpacity={0.7}>
                <Image source={user.image} style={styles.taggedImage} />
                <Text style={styles.taggedName}>{user.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Full-width feature image */}
        <View style={styles.featureSection}>
          <Image
            source={IMAGES.snow}
            style={styles.featureImage}
            resizeMode="cover"
          />
          <View style={styles.featureOverlay}>
            <View style={styles.likeBadge}>
              <HeartIcon width={14} height={14} color="#007AFF" filled />
              <Text style={styles.likeCount}>1.2k</Text>
            </View>
            <TouchableOpacity style={styles.arrowBadge} activeOpacity={0.7}>
              <ArrowUpRightIcon width={14} height={14} color="#007AFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Photo Gallery - Masonry */}
        <View style={styles.galleryContainer}>
          <View style={styles.galleryColumn}>
            {GALLERY_LEFT.map((item) => (
              <View key={item.id} style={styles.galleryCard}>
                <Image
                  source={item.image}
                  style={[styles.galleryImage, { height: item.height }]}
                  resizeMode="cover"
                />
              </View>
            ))}
          </View>
          <View style={styles.galleryColumn}>
            {GALLERY_RIGHT.map((item) => (
              <View key={item.id} style={styles.galleryCard}>
                <Image
                  source={item.image}
                  style={[styles.galleryImage, { height: item.height }]}
                  resizeMode="cover"
                />
              </View>
            ))}
          </View>
        </View>

        {/* Bottom spacer */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.floatingAdd} activeOpacity={0.8}>
        <View style={styles.addLine1} />
        <View style={styles.addLine2} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#A0A0A0',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },

  // Map
  mapContainer: {
    height: 680,
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 12,
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: 'rgba(245,245,245,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtnText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#282828',
  },

  // Data Section
  dataSection: {
    paddingHorizontal: 14,
    paddingVertical: 16,
  },
  dataSectionTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#282828',
    marginBottom: 10,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  statLabel: {
    fontSize: 8,
    fontWeight: '600',
    color: '#282828',
    width: 50,
  },
  statBarContainer: {
    flex: 1,
    height: 6,
    backgroundColor: '#CFD0D1',
    borderRadius: 20,
    overflow: 'hidden',
  },
  statBar: {
    height: '100%',
    backgroundColor: '#282828',
    borderRadius: 20,
  },
  statBarWave: {
    height: '100%',
    width: '70%',
    backgroundColor: '#282828',
    borderRadius: 20,
  },
  statValue: {
    fontSize: 8,
    fontWeight: '600',
    color: '#282828',
    width: 40,
    textAlign: 'right',
  },

  // Tagged
  taggedSection: {
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  taggedTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#282828',
    marginBottom: 8,
  },
  taggedRow: {
    gap: 10,
  },
  taggedItem: {
    alignItems: 'center',
  },
  taggedImage: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginBottom: 4,
  },
  taggedName: {
    fontSize: 9,
    color: '#282828',
    fontWeight: '500',
  },

  // Feature
  featureSection: {
    marginHorizontal: 2,
    marginBottom: 8,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  featureImage: {
    width: '100%',
    height: 260,
  },
  featureOverlay: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  likeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 4,
  },
  likeCount: {
    fontSize: 12,
    fontWeight: '600',
    color: '#007AFF',
  },
  arrowBadge: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Gallery
  galleryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 2,
    gap: 6,
  },
  galleryColumn: {
    flex: 1,
    gap: 6,
  },
  galleryCard: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  galleryImage: {
    width: '100%',
  },

  // Floating Add
  floatingAdd: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    width: 60,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'rgba(207,208,209,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addLine1: {
    position: 'absolute',
    width: 22,
    height: 2.5,
    backgroundColor: '#282828',
    borderRadius: 2,
    transform: [{ rotate: '45deg' }],
  },
  addLine2: {
    position: 'absolute',
    width: 2.5,
    height: 22,
    backgroundColor: '#282828',
    borderRadius: 2,
    transform: [{ rotate: '45deg' }],
  },
});
