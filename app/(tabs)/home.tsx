import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../src/constants/theme';
import { SearchIcon } from '../../src/components/icons/SearchIcon';
import { FilterIcon } from '../../src/components/icons/FilterIcon';
import { HeartIcon } from '../../src/components/icons/HeartIcon';
import { ArrowUpRightIcon } from '../../src/components/icons/ArrowUpRightIcon';
import { MapPinIcon } from '../../src/components/icons/MapPinIcon';

const { width: SCREEN_W } = Dimensions.get('window');

// Feed images
const FEED_IMAGES = {
  routeMap: require('../../assets/images/feed/route_map.png'),
  snow: require('../../assets/images/feed/feed_snow_mountain.png'),
  landscape: require('../../assets/images/feed/feed_landscape.png'),
  adventure: require('../../assets/images/feed/feed_adventure.png'),
  sunset: require('../../assets/images/feed/feed_sunset.png'),
  hikerSnow: require('../../assets/images/feed/feed_hiker_snow.png'),
  skiing: require('../../assets/images/feed/feed_skiing.png'),
  jeep: require('../../assets/images/feed/feed_jeep.png'),
  tent: require('../../assets/images/feed/feed_tent.png'),
  iceland: require('../../assets/images/feed/feed_iceland.png'),
  trailSunset: require('../../assets/images/feed/feed_trail_sunset.png'),
  powder: require('../../assets/images/feed/feed_powder.png'),
  profile1: require('../../assets/images/feed/profile_photo1.png'),
  profile2: require('../../assets/images/feed/profile_photo2.png'),
  profile3: require('../../assets/images/feed/profile_photo3.png'),
};

const STORY_USERS = [
  { id: '1', name: '@ashley', image: FEED_IMAGES.profile1 },
  { id: '2', name: '@marco', image: FEED_IMAGES.profile2 },
  { id: '3', name: '@elena', image: FEED_IMAGES.profile3 },
  { id: '4', name: '@josh', image: FEED_IMAGES.profile1 },
  { id: '5', name: '@nina', image: FEED_IMAGES.profile2 },
];

interface FeedItem {
  id: string;
  image: any;
  likes: number;
  height: number;
  username?: string;
  location?: string;
}

const FEED_DATA: FeedItem[] = [
  { id: '1', image: FEED_IMAGES.hikerSnow, likes: 340, height: 280, username: '@gary', location: 'Alps, Switzerland' },
  { id: '2', image: FEED_IMAGES.skiing, likes: 0, height: 380, username: '@marco', location: 'Chamonix' },
  { id: '3', image: FEED_IMAGES.landscape, likes: 704, height: 320 },
  { id: '4', image: FEED_IMAGES.snow, likes: 1200, height: 400, username: '@elena', location: 'Norway' },
  { id: '5', image: FEED_IMAGES.trailSunset, likes: 234, height: 350 },
];

export default function HomeScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'explore' | 'follow'>('explore');

  return (
    <View style={styles.screen}>
      {/* Top Activity Banner */}
      <View style={styles.activityBanner}>
        <ImageBackground
          source={FEED_IMAGES.routeMap}
          style={styles.activityBg}
          imageStyle={styles.activityBgImage}
        >
          <View style={styles.activityContent}>
            <View style={styles.activityLeft}>
              <MapPinIcon width={16} height={16} color="#007AFF" />
              <View style={styles.activityTextGroup}>
                <Text style={styles.activityTitle}>Your last activity</Text>
                <Text style={styles.activityLocation}>Oslo, Norway</Text>
                <Text style={styles.activityDetail}>87 km gravel ride</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.openButton}
              activeOpacity={0.7}
              onPress={() => router.push('/activity-detail')}
            >
              <Text style={styles.openButtonText}>Open</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      {/* Search + Filter Bar */}
      <View style={styles.searchSection}>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <FilterIcon width={18} height={18} color="#1F1F1F" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchBar} activeOpacity={0.8}>
          <Text style={styles.searchText}>Search Users</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileBtn} activeOpacity={0.7}>
          <Image source={FEED_IMAGES.profile1} style={styles.searchProfileImg} />
        </TouchableOpacity>
      </View>

      {/* Tabs: Explore / You Follow */}
      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'explore' && styles.tabActive]}
          onPress={() => setActiveTab('explore')}
          activeOpacity={0.7}
        >
          <Text style={[styles.tabText, activeTab === 'explore' && styles.tabTextActive]}>
            Explore
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'follow' && styles.tabActive]}
          onPress={() => setActiveTab('follow')}
          activeOpacity={0.7}
        >
          <Text style={[styles.tabText, activeTab === 'follow' && styles.tabTextActive]}>
            You Follow
          </Text>
        </TouchableOpacity>
      </View>

      {/* Story circles */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storyRow}
        style={styles.storyScroll}
      >
        {STORY_USERS.map((user) => (
          <TouchableOpacity key={user.id} style={styles.storyItem} activeOpacity={0.7}>
            <Image source={user.image} style={styles.storyImage} />
            <Text style={styles.storyName} numberOfLines={1}>{user.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Feed */}
      <ScrollView
        style={styles.feedScroll}
        contentContainerStyle={styles.feedContent}
        showsVerticalScrollIndicator={false}
      >
        {FEED_DATA.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.feedCard}
            activeOpacity={0.85}
            onPress={() => router.push('/activity-detail')}
          >
            <Image
              source={item.image}
              style={[styles.feedImage, { height: item.height }]}
              resizeMode="cover"
            />
            {/* Overlay info */}
            <View style={styles.feedOverlay}>
              {item.likes > 0 && (
                <View style={styles.likeBadge}>
                  <HeartIcon width={14} height={14} color="#007AFF" filled />
                  <Text style={styles.likeCount}>
                    {item.likes >= 1000
                      ? `${(item.likes / 1000).toFixed(1)}k`
                      : item.likes}
                  </Text>
                </View>
              )}
              <TouchableOpacity style={styles.arrowBadge} activeOpacity={0.7}>
                <ArrowUpRightIcon width={16} height={16} color="#007AFF" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
        {/* Bottom spacer for tab bar */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#A0A0A0',
  },
  // Activity Banner
  activityBanner: {
    marginHorizontal: 6,
    marginTop: 6,
    height: 110,
    borderRadius: 30,
    overflow: 'hidden',
  },
  activityBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  activityBgImage: {
    borderRadius: 30,
    opacity: 0.8,
  },
  activityContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 16,
    paddingTop: 12,
  },
  activityLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    flex: 1,
  },
  activityTextGroup: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#282828',
  },
  activityLocation: {
    fontSize: 12,
    color: '#007AFF',
  },
  activityDetail: {
    fontSize: 12,
    color: '#007AFF',
  },
  openButton: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 15,
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
  openButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#282828',
  },

  // Search
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    gap: 8,
  },
  filterBtn: {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F1F1F',
  },
  profileBtn: {
    width: 49,
    height: 49,
    borderRadius: 15,
    overflow: 'hidden',
  },
  searchProfileImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },

  // Tabs
  tabRow: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    marginBottom: 6,
    gap: 20,
  },
  tab: {
    paddingVertical: 6,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#282828',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#838385',
  },
  tabTextActive: {
    fontWeight: '600',
    color: '#282828',
  },

  // Stories
  storyScroll: {
    maxHeight: 80,
    marginBottom: 8,
  },
  storyRow: {
    paddingHorizontal: 18,
    gap: 12,
    alignItems: 'center',
  },
  storyItem: {
    alignItems: 'center',
    width: 56,
  },
  storyImage: {
    width: 48,
    height: 48,
    borderRadius: 14,
    marginBottom: 4,
  },
  storyName: {
    fontSize: 10,
    color: '#282828',
    fontWeight: '500',
  },

  // Feed
  feedScroll: {
    flex: 1,
  },
  feedContent: {
    paddingHorizontal: 6,
    gap: 8,
  },
  feedCard: {
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  feedImage: {
    width: '100%',
    borderRadius: 20,
  },
  feedOverlay: {
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
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
