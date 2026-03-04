import React, { useState } from 'react';
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
import { Colors } from '../../src/constants/theme';
import { HeartIcon } from '../../src/components/icons/HeartIcon';
import { PlusIcon } from '../../src/components/icons/PlusIcon';

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

const CATEGORY_CHIPS = ['Sat', 'Run', 'Cycle', 'Hike', 'Ski'];

interface GalleryItem {
  id: string;
  image: any;
  height: number;
  username: string;
  profileImage: any;
  activityType?: string;
  elevation?: string;
  distance?: string;
  time?: string;
}

const GALLERY_LEFT: GalleryItem[] = [
  { id: '1', image: IMAGES.landscape, height: 240, username: '@carl.noto', profileImage: IMAGES.profile1 },
  { id: '2', image: IMAGES.tent, height: 200, username: '@nik_66', profileImage: IMAGES.profile2, activityType: 'Activity Data', elevation: '1800mt', distance: '11km', time: '2d 5h' },
  { id: '3', image: IMAGES.iceland, height: 260, username: '@gioforty', profileImage: IMAGES.profile3 },
];

const GALLERY_RIGHT: GalleryItem[] = [
  { id: '4', image: IMAGES.hikerSnow, height: 200, username: '@tony', profileImage: IMAGES.profile1, activityType: 'Activity Data', elevation: '1800mt', distance: '11km', time: '2d 5h' },
  { id: '5', image: IMAGES.skiing, height: 260, username: '@_ashley', profileImage: IMAGES.profile2 },
  { id: '6', image: IMAGES.adventure, height: 190, username: '@iamsimon', profileImage: IMAGES.profile3 },
];

export default function ActivityScreen() {
  const router = useRouter();
  const [selectedChip, setSelectedChip] = useState('Sat');

  const renderGalleryCard = (item: GalleryItem) => (
    <View key={item.id} style={styles.cardWrapper}>
      {/* Per-card user row */}
      <View style={styles.cardUserRow}>
        <Image source={item.profileImage} style={styles.cardUserAvatar} />
        <Text style={styles.cardUserName}>{item.username}</Text>
      </View>
      <TouchableOpacity
        style={styles.galleryCard}
        activeOpacity={0.85}
        onPress={() => router.push('/image-viewer')}
      >
        <Image
          source={item.image}
          style={[styles.galleryImage, { height: item.height }]}
          resizeMode="cover"
        />
        {/* Heart overlay */}
        <View style={styles.heartOverlay}>
          <HeartIcon width={16} height={16} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
      {/* Activity stats below card */}
      {item.activityType && (
        <View style={styles.cardStatsBlock}>
          <Text style={styles.cardStatsTitle}>{item.activityType}</Text>
          <View style={styles.cardStatRow}>
            <Text style={styles.cardStatLabel}>Elevation</Text>
            <View style={styles.cardStatBarContainer}>
              <View style={[styles.cardStatBar, { width: '70%' }]} />
            </View>
            <Text style={styles.cardStatValue}>{item.elevation}</Text>
          </View>
          <View style={styles.cardStatRow}>
            <Text style={styles.cardStatLabel}>Distance</Text>
            <View style={styles.cardStatBarContainer}>
              <View style={[styles.cardStatBar, { width: '85%' }]} />
            </View>
            <Text style={styles.cardStatValue}>{item.distance}</Text>
          </View>
          <View style={styles.cardStatRow}>
            <Text style={styles.cardStatLabel}>Time</Text>
            <View style={{ flex: 1 }} />
            <Text style={styles.cardStatValue}>{item.time}</Text>
          </View>
        </View>
      )}
    </View>
  );

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
          {/* Round badge button */}
          <View style={styles.roundBadge} />
        </View>

        {/* Category chips row */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipRow}
          style={styles.chipScroll}
        >
          {CATEGORY_CHIPS.map((chip) => (
            <TouchableOpacity
              key={chip}
              style={[styles.chipBtn, selectedChip === chip && styles.chipBtnActive]}
              activeOpacity={0.7}
              onPress={() => setSelectedChip(chip)}
            >
              <Text style={[styles.chipText, selectedChip === chip && styles.chipTextActive]}>{chip}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.chipAddBtn} activeOpacity={0.7}>
            <PlusIcon width={16} height={16} color="#282828" />
          </TouchableOpacity>
        </ScrollView>

        {/* Activity Data Section */}
        <View style={styles.dataSection}>
          <Text style={styles.dataSectionTitle}>Activity Data</Text>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Elevation</Text>
            <View style={styles.statBarContainer}>
              <View style={[styles.statBar, { width: '70%' }]} />
            </View>
            <Text style={styles.statValue}>2550mt</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Distance</Text>
            <View style={styles.statBarContainer}>
              <View style={[styles.statBar, { width: '80%' }]} />
            </View>
            <Text style={styles.statValue}>33km</Text>
          </View>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Time</Text>
            <View style={styles.statBarContainer}>
              <View style={[styles.statBar, { width: '60%' }]} />
            </View>
            <Text style={styles.statValue}>5d 3h</Text>
          </View>
        </View>

        {/* User info section */}
        <View style={styles.userInfoSection}>
          <View style={styles.userInfoRow}>
            <Image source={IMAGES.profile1} style={styles.userInfoAvatar} />
            <View>
              <Text style={styles.userInfoName}>@georyu</Text>
              <Text style={styles.userInfoLabel}>Trail Running</Text>
            </View>
          </View>
          {/* Follower photos stack */}
          <View style={styles.followerStack}>
            <Image source={IMAGES.profile1} style={[styles.followerAvatar, { left: 0 }]} />
            <Image source={IMAGES.profile2} style={[styles.followerAvatar, { left: 14 }]} />
            <Image source={IMAGES.profile3} style={[styles.followerAvatar, { left: 28 }]} />
            <Text style={styles.followerMore}>+2</Text>
          </View>
        </View>

        {/* Full-width feature image */}
        <View style={styles.featureSection}>
          <Image
            source={IMAGES.snow}
            style={styles.featureImage}
            resizeMode="cover"
          />
          <View style={styles.featureHeartOverlay}>
            <HeartIcon width={16} height={16} color="#FFFFFF" />
          </View>
        </View>

        {/* Photo Gallery - Masonry with per-card profiles */}
        <View style={styles.galleryContainer}>
          <View style={styles.galleryColumn}>
            {GALLERY_LEFT.map(renderGalleryCard)}
          </View>
          <View style={styles.galleryColumn}>
            {GALLERY_RIGHT.map(renderGalleryCard)}
          </View>
        </View>

        {/* Bottom spacer */}
        <View style={{ height: 90 }} />
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity style={styles.floatingAdd} activeOpacity={0.8} onPress={() => router.push('/create-modal')}>
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

  /* ── Map ── */
  mapContainer: {
    height: 683,
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  backBtn: {
    position: 'absolute',
    top: 127,
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
  roundBadge: {
    position: 'absolute',
    bottom: 0,
    left: 144,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#B8B8B8',
  },

  /* ── Category chips (Figma: row of Sat/Run/Cycle + add button) ── */
  chipScroll: {
    maxHeight: 44,
    marginTop: 10,
  },
  chipRow: {
    paddingHorizontal: 14,
    gap: 8,
    alignItems: 'center',
  },
  chipBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E8E8E6',
  },
  chipBtnActive: {
    backgroundColor: '#282828',
  },
  chipText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#838385',
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
  chipAddBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E8E8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ── Data Section ── */
  dataSection: {
    paddingHorizontal: 13,
    paddingTop: 14,
    paddingBottom: 8,
  },
  dataSectionTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#282828',
    marginBottom: 8,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 6,
  },
  statLabel: {
    fontSize: 8,
    fontWeight: '600',
    color: '#282828',
    width: 48,
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
  statValue: {
    fontSize: 8,
    fontWeight: '600',
    color: '#282828',
    width: 36,
    textAlign: 'right',
  },

  /* ── User info section (Figma: @georyu + trail running + follower stack) ── */
  userInfoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 13,
    marginBottom: 10,
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  userInfoAvatar: {
    width: 36,
    height: 36,
    borderRadius: 12,
  },
  userInfoName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#282828',
  },
  userInfoLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#838385',
    marginTop: 1,
  },
  followerStack: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 70,
  },
  followerAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
  },
  followerMore: {
    marginLeft: 48,
    fontSize: 8,
    fontWeight: '600',
    color: '#C9C9C9',
  },

  /* ── Feature image ── */
  featureSection: {
    marginHorizontal: 2,
    marginBottom: 8,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  featureImage: {
    width: '100%',
    height: 258,
  },
  featureHeartOverlay: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 37,
    height: 37,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ── Gallery masonry ── */
  galleryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 2,
    gap: 6,
  },
  galleryColumn: {
    flex: 1,
  },
  cardWrapper: {
    marginBottom: 4,
  },
  cardUserRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    paddingLeft: 2,
    gap: 6,
  },
  cardUserAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  cardUserName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#282828',
  },
  galleryCard: {
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  galleryImage: {
    width: '100%',
  },
  heartOverlay: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 37,
    height: 37,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ── Per-card stats (Figma: Activity Data, 8px labels) ── */
  cardStatsBlock: {
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  cardStatsTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#282828',
    marginBottom: 4,
  },
  cardStatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  cardStatLabel: {
    fontSize: 8,
    fontWeight: '600',
    color: '#282828',
    width: 42,
  },
  cardStatBarContainer: {
    flex: 1,
    height: 6,
    borderRadius: 20,
    backgroundColor: '#CFD0D1',
    marginHorizontal: 4,
    overflow: 'hidden',
  },
  cardStatBar: {
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#282828',
  },
  cardStatValue: {
    fontSize: 8,
    fontWeight: '600',
    color: '#282828',
    textAlign: 'right',
    minWidth: 30,
  },

  /* ── Floating Add ── */
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
