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
import { CompassIcon } from '../../src/components/icons/CompassIcon';
import { HeartIcon } from '../../src/components/icons/HeartIcon';
import { FilterIcon } from '../../src/components/icons/FilterIcon';
import { SearchIcon } from '../../src/components/icons/SearchIcon';
import { ArrowUpRightIcon } from '../../src/components/icons/ArrowUpRightIcon';

const { width: SCREEN_W } = Dimensions.get('window');

const EXPLORE_IMAGES = {
  snow: require('../../assets/images/feed/feed_snow_mountain.png'),
  landscape: require('../../assets/images/feed/feed_landscape.png'),
  adventure: require('../../assets/images/feed/feed_adventure.png'),
  sunset: require('../../assets/images/feed/feed_sunset.png'),
  hikerSnow: require('../../assets/images/feed/feed_hiker_snow.png'),
  skiing: require('../../assets/images/feed/feed_skiing.png'),
  jeep: require('../../assets/images/feed/feed_jeep.png'),
  tent: require('../../assets/images/feed/feed_tent.png'),
  iceland: require('../../assets/images/feed/feed_iceland.png'),
  powder: require('../../assets/images/feed/feed_powder.png'),
  trailSunset: require('../../assets/images/feed/feed_trail_sunset.png'),
};

const PROFILE_IMAGES = {
  p1: require('../../assets/images/feed/profile_photo1.png'),
  p2: require('../../assets/images/feed/profile_photo2.png'),
  p3: require('../../assets/images/feed/profile_photo3.png'),
};

interface ExploreItem {
  id: string;
  image: any;
  username: string;
  profileImage: any;
  height: number;
  activityType?: string;
  elevation?: string;
  distance?: string;
  time?: string;
  progress?: number;
}

const EXPLORE_DATA: ExploreItem[] = [
  { id: '1', image: EXPLORE_IMAGES.snow, username: '@isabel21', profileImage: PROFILE_IMAGES.p1, height: 220 },
  { id: '2', image: EXPLORE_IMAGES.landscape, username: '@cusmin', profileImage: PROFILE_IMAGES.p2, height: 180 },
  { id: '3', image: EXPLORE_IMAGES.tent, username: '@rebsix', profileImage: PROFILE_IMAGES.p3, height: 260 },
  { id: '4', image: EXPLORE_IMAGES.skiing, username: '@_ashley', profileImage: PROFILE_IMAGES.p1, height: 200 },
  { id: '5', image: EXPLORE_IMAGES.hikerSnow, username: '@carl.noto', profileImage: PROFILE_IMAGES.p2, height: 240 },
  { id: '6', image: EXPLORE_IMAGES.jeep, username: '@tony', profileImage: PROFILE_IMAGES.p3, height: 190 },
  { id: '7', image: EXPLORE_IMAGES.trailSunset, username: '@nik_66', profileImage: PROFILE_IMAGES.p1, height: 220 },
  { id: '8', image: EXPLORE_IMAGES.powder, username: '@will87', profileImage: PROFILE_IMAGES.p2, height: 250, activityType: 'Road Cycling', elevation: '2550mt', distance: '33km', time: '5d 3h', progress: 0.65 },
  { id: '9', image: EXPLORE_IMAGES.adventure, username: '@gioforty', profileImage: PROFILE_IMAGES.p3, height: 200 },
  { id: '10', image: EXPLORE_IMAGES.iceland, username: '@lollomag', profileImage: PROFILE_IMAGES.p1, height: 240 },
];

export default function ExploreScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'explore' | 'follow'>('explore');

  const leftColumn = EXPLORE_DATA.filter((_, i) => i % 2 === 0);
  const rightColumn = EXPLORE_DATA.filter((_, i) => i % 2 === 1);

  const renderCard = (item: ExploreItem) => (
    <View key={item.id} style={styles.cardWrapper}>
      {/* User profile row above card */}
      <View style={styles.userRow}>
        <Image source={item.profileImage} style={styles.userAvatar} />
        <Text style={styles.userName}>{item.username}</Text>
      </View>
      <TouchableOpacity
        style={styles.gridCard}
        activeOpacity={0.85}
        onPress={() => router.push('/activity-detail')}
      >
        <Image
          source={item.image}
          style={[styles.gridImage, { height: item.height }]}
          resizeMode="cover"
        />
        {/* Heart button overlay */}
        <View style={styles.heartOverlay}>
          <HeartIcon width={16} height={16} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
      {/* Activity stats below card (if present) */}
      {item.activityType && (
        <View style={styles.statsBlock}>
          <Text style={styles.statsTitle}>{item.activityType}</Text>
          <View style={styles.statsRow}>
            <Text style={styles.statsLabel}>Elevation</Text>
            <View style={styles.statsBarContainer}>
              <Image source={EXPLORE_IMAGES.trailSunset} style={styles.statsBarBg} resizeMode="cover" />
            </View>
            <Text style={styles.statsValue}>{item.elevation}</Text>
          </View>
          <View style={styles.statsRow}>
            <Text style={styles.statsLabel}>Distance</Text>
            <View style={styles.statsProgressContainer}>
              <View style={[styles.statsProgressBar, { width: `${(item.progress || 0) * 100}%` }]} />
            </View>
            <Text style={styles.statsValue}>{item.distance}</Text>
          </View>
          <View style={styles.statsRow}>
            <Text style={styles.statsLabel}>Time</Text>
            <View style={{ flex: 1 }} />
            <Text style={styles.statsValue}>{item.time}</Text>
          </View>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.screen}>
      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={EXPLORE_IMAGES.snow}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        {/* Compass icon top-left */}
        <View style={styles.bannerCompass}>
          <CompassIcon width={31} height={31} color="#FFFFFF" />
        </View>
        {/* Header info text */}
        <View style={styles.bannerTextBlock}>
          <Text style={styles.bannerTitle}>Explore Mode</Text>
          <Text style={styles.bannerSubtitle}>World Atlas</Text>
          <Text style={styles.bannerCount}>329,246 activities found</Text>
        </View>
        {/* Search button top-right */}
        <TouchableOpacity style={styles.bannerSearchBtn} activeOpacity={0.7} onPress={() => router.push('/search')}>
          <SearchIcon width={18} height={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Search bar row */}
      <View style={styles.searchBarRow}>
        <TouchableOpacity style={styles.searchSideBtn} activeOpacity={0.7}>
          <FilterIcon width={21} height={21} color="#282828" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchBar}
          activeOpacity={0.7}
          onPress={() => router.push('/search')}
        >
          <Text style={styles.searchBarText}>Search Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchSideBtn} activeOpacity={0.7}>
          <ArrowUpRightIcon width={16} height={16} color="#282828" />
        </TouchableOpacity>
      </View>

      {/* Tab selector: Explore / You Follow */}
      <View style={styles.tabRow}>
        <TouchableOpacity onPress={() => setActiveTab('explore')} activeOpacity={0.7}>
          <Text style={[styles.tabText, activeTab === 'explore' && styles.tabTextActive]}>
            Explore
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('follow')} activeOpacity={0.7}>
          <Text style={[styles.tabText, activeTab === 'follow' && styles.tabTextActive]}>
            You Follow
          </Text>
        </TouchableOpacity>
      </View>

      {/* Masonry Grid */}
      <ScrollView
        style={styles.gridScroll}
        contentContainerStyle={styles.gridContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.masonryContainer}>
          {/* Left column */}
          <View style={styles.masonryColumn}>
            {leftColumn.map(renderCard)}
          </View>
          {/* Right column */}
          <View style={styles.masonryColumn}>
            {rightColumn.map(renderCard)}
          </View>
        </View>
        <View style={{ height: 90 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  /* ── Banner (Figma: top 50/30 radii, 382w, 110h, opacity 0.8) ── */
  banner: {
    marginTop: 5,
    marginHorizontal: (SCREEN_W - 382) / 2,
    height: 110,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  bannerCompass: {
    position: 'absolute',
    top: 44,
    left: 14,
  },
  bannerTextBlock: {
    position: 'absolute',
    top: 44,
    left: 53,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#282828',
  },
  bannerSubtitle: {
    fontSize: 12,
    color: '#007AFF',
    marginTop: 1,
  },
  bannerCount: {
    fontSize: 12,
    color: '#007AFF',
    marginTop: 1,
  },
  bannerSearchBtn: {
    position: 'absolute',
    top: 40,
    right: 10,
    width: 43,
    height: 43,
    borderRadius: 15,
    backgroundColor: 'rgba(207,208,209,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ── Search bar row (Figma: 251w bar, 49h, two 48.9 side buttons) ── */
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    marginTop: 8,
    gap: 8,
  },
  searchSideBtn: {
    width: 49,
    height: 49,
    borderRadius: 15,
    backgroundColor: '#CFD0D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 1,
    height: 49,
    borderRadius: 15,
    backgroundColor: '#CFD0D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBarText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F1F1F',
  },

  /* ── Tab selector (Figma: 20px Bold, explore active #282828, follow inactive rgba(60,60,67,0.29)) ── */
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    marginTop: 14,
    marginBottom: 6,
  },
  tabText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(60,60,67,0.29)',
  },
  tabTextActive: {
    color: '#282828',
  },

  /* ── Per-card user profile row ── */
  cardWrapper: {
    marginBottom: 4,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    paddingLeft: 2,
    gap: 6,
  },
  userAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  userName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#282828',
  },

  /* ── Grid ── */
  gridScroll: {
    flex: 1,
  },
  gridContent: {
    paddingHorizontal: 12,
  },
  masonryContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  masonryColumn: {
    flex: 1,
  },
  gridCard: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#E8E8E6',
    position: 'relative',
  },
  gridImage: {
    width: '100%',
    borderRadius: 20,
  },

  /* ── Heart overlay (Figma: backdrop blur, rgba(0,0,0,0.2), rounded 10) ── */
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

  /* ── Activity stats block (below card, Figma: 10px Bold title, 8px labels/values) ── */
  statsBlock: {
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  statsTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#282828',
    marginBottom: 4,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  statsLabel: {
    fontSize: 8,
    fontWeight: '600',
    color: '#282828',
    width: 42,
  },
  statsBarContainer: {
    flex: 1,
    height: 10,
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 4,
  },
  statsBarBg: {
    width: '100%',
    height: '100%',
  },
  statsProgressContainer: {
    flex: 1,
    height: 6,
    borderRadius: 20,
    backgroundColor: '#E8E8E6',
    marginHorizontal: 4,
    overflow: 'hidden',
  },
  statsProgressBar: {
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#282828',
  },
  statsValue: {
    fontSize: 8,
    fontWeight: '600',
    color: '#282828',
    textAlign: 'right',
    minWidth: 30,
  },
});
