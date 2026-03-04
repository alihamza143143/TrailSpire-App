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

interface FeedItem {
  id: string;
  image: any;
  likes: number;
  height: number;
  username: string;
  profileImage: any;
  activityType: string;
  distance: string;
  elevation: string;
  time: string;
}

const FEED_DATA: FeedItem[] = [
  { id: '1', image: FEED_IMAGES.hikerSnow, likes: 340, height: 280, username: '@_ashley', profileImage: FEED_IMAGES.profile1, activityType: 'Hiking', distance: '15km', elevation: '1200m', time: '5h 30min' },
  { id: '2', image: FEED_IMAGES.skiing, likes: 0, height: 380, username: '@tony', profileImage: FEED_IMAGES.profile2, activityType: '4x4 Overlanding', distance: '33km', elevation: '450m', time: '3h 15min' },
  { id: '3', image: FEED_IMAGES.landscape, likes: 704, height: 320, username: '@tomtom8', profileImage: FEED_IMAGES.profile3, activityType: 'Backcountry Skiing', distance: '12km', elevation: '900m', time: '4h 00min' },
  { id: '4', image: FEED_IMAGES.snow, likes: 1200, height: 400, username: '@iamsimon', profileImage: FEED_IMAGES.profile1, activityType: 'Free Skiing', distance: '8km', elevation: '1500m', time: '2h 45min' },
  { id: '5', image: FEED_IMAGES.trailSunset, likes: 234, height: 350, username: '@elena', profileImage: FEED_IMAGES.profile2, activityType: 'Trail Running', distance: '21km', elevation: '600m', time: '1h 50min' },
];

export default function HomeScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'explore' | 'follow'>('follow');

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
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7} onPress={() => router.push('/feed-filters')}>
          <FilterIcon width={18} height={18} color="#1F1F1F" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchBar} activeOpacity={0.8} onPress={() => router.push('/search')}>
          <Text style={styles.searchText}>Search Users</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileBtn} activeOpacity={0.7} onPress={() => router.push('/(tabs)/profile')}>
          <Image source={FEED_IMAGES.profile1} style={styles.searchProfileImg} />
        </TouchableOpacity>
      </View>

      {/* Tabs: Explore / You Follow */}
      <View style={styles.tabRow}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setActiveTab('explore')}
          activeOpacity={0.7}
        >
          <Text style={[styles.tabText, activeTab === 'explore' && styles.tabTextActive]}>
            Explore
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setActiveTab('follow')}
          activeOpacity={0.7}
        >
          <Text style={[styles.tabText, activeTab === 'follow' && styles.tabTextActive]}>
            You Follow
          </Text>
        </TouchableOpacity>
      </View>

      {/* Feed */}
      <ScrollView
        style={styles.feedScroll}
        contentContainerStyle={styles.feedContent}
        showsVerticalScrollIndicator={false}
      >
        {FEED_DATA.map((item) => (
          <View key={item.id}>
            {/* Per-card user info row */}
            <TouchableOpacity
              style={styles.feedUserRow}
              activeOpacity={0.7}
              onPress={() => router.push('/other-user-profile')}
            >
              <Image source={item.profileImage} style={styles.feedUserAvatar} />
              <Text style={styles.feedUsername}>{item.username}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.feedCard}
              activeOpacity={0.85}
              onPress={() => router.push('/activity-detail')}
            >
              <Image
                source={item.image}
                style={[styles.feedImage, { height: item.height }]}
                resizeMode="cover"
              />
              {/* Activity stats overlay — bottom left */}
              <View style={styles.statsOverlay}>
                <Text style={styles.statsActivityType}>{item.activityType}</Text>
                <View style={styles.statsRow}>
                  <Text style={styles.statsLabel}>Distance</Text>
                  <Text style={styles.statsValue}>{item.distance}</Text>
                </View>
                <View style={styles.statsProgressBar}>
                  <View style={styles.statsProgressFill} />
                </View>
                <View style={styles.statsRow}>
                  <Text style={styles.statsLabel}>Elevation</Text>
                  <Text style={styles.statsValue}>{item.elevation}</Text>
                </View>
                <View style={styles.statsRow}>
                  <Text style={styles.statsLabel}>Time</Text>
                  <Text style={styles.statsValue}>{item.time}</Text>
                </View>
              </View>
              {/* Like + action badges — bottom right */}
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
                <TouchableOpacity style={styles.arrowBadge} activeOpacity={0.7} onPress={() => router.push('/activity-detail')}>
                  <ArrowUpRightIcon width={18} height={18} color="#007AFF" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
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
  // Activity Banner — Figma: rounded-tl/tr 50, rounded-bl/br 30
  activityBanner: {
    marginHorizontal: 2,
    marginTop: 6,
    height: 110,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  activityBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  activityBgImage: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
    width: 85,
    height: 46,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
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

  // Tabs — Figma: 20px bold, no underline, color diff only
  tabRow: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    marginBottom: 8,
    gap: 20,
  },
  tab: {
    paddingVertical: 6,
  },
  tabText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#838385',
  },
  tabTextActive: {
    color: '#282828',
  },

  // Per-card user info row
  feedUserRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 6,
  },
  feedUserAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  feedUsername: {
    fontSize: 13,
    fontWeight: '700',
    color: '#282828',
  },

  // Feed
  feedScroll: {
    flex: 1,
  },
  feedContent: {
    paddingHorizontal: 2,
    gap: 4,
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
  // Activity stats overlay — bottom left on feed cards
  statsOverlay: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    backgroundColor: 'rgba(184,184,184,0.85)',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    minWidth: 110,
  },
  statsActivityType: {
    fontSize: 10,
    fontWeight: '700',
    color: '#282828',
    marginBottom: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  statsLabel: {
    fontSize: 8,
    fontWeight: '600',
    color: '#282828',
  },
  statsValue: {
    fontSize: 8,
    fontWeight: '600',
    color: '#282828',
    marginLeft: 8,
  },
  statsProgressBar: {
    width: 87,
    height: 6,
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderRadius: 20,
    marginVertical: 3,
  },
  statsProgressFill: {
    width: 55,
    height: 6,
    backgroundColor: '#282828',
    borderRadius: 20,
  },
  feedOverlay: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
  },
  likeBadge: {
    width: 73,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8B8B8',
    borderRadius: 15,
    gap: 4,
  },
  likeCount: {
    fontSize: 12,
    fontWeight: '600',
    color: '#282828',
  },
  arrowBadge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#B8B8B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
