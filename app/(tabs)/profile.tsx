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
import { Colors } from '../../src/constants/theme';
import { CompassIcon } from '../../src/components/icons/CompassIcon';
import { FilterIcon } from '../../src/components/icons/FilterIcon';
import { ArrowUpRightIcon } from '../../src/components/icons/ArrowUpRightIcon';
import { HeartIcon } from '../../src/components/icons/HeartIcon';
import { PlusIcon } from '../../src/components/icons/PlusIcon';

const { width: SCREEN_W } = Dimensions.get('window');
const CARD_W = (SCREEN_W - 24 - 8) / 2;

const IMAGES = {
  exploreMap: require('../../assets/images/feed/explore_map.png'),
  snow: require('../../assets/images/feed/feed_snow_mountain.png'),
  landscape: require('../../assets/images/feed/feed_landscape.png'),
  adventure: require('../../assets/images/feed/feed_adventure.png'),
  tent: require('../../assets/images/feed/feed_tent.png'),
  iceland: require('../../assets/images/feed/feed_iceland.png'),
  skiing: require('../../assets/images/feed/feed_skiing.png'),
  jeep: require('../../assets/images/feed/feed_jeep.png'),
  trailSunset: require('../../assets/images/feed/feed_trail_sunset.png'),
  powder: require('../../assets/images/feed/feed_powder.png'),
  sunset: require('../../assets/images/feed/feed_sunset.png'),
  hikerSnow: require('../../assets/images/feed/feed_hiker_snow.png'),
  profile1: require('../../assets/images/feed/profile_photo1.png'),
  profile2: require('../../assets/images/feed/profile_photo2.png'),
  profile3: require('../../assets/images/feed/profile_photo3.png'),
};

interface ProfileItem {
  id: string;
  image: any;
  height: number;
  username: string;
  profileImage: any;
  activityType?: string;
  elevation?: string;
  distance?: string;
  time?: string;
  progress?: number;
}

const PROFILE_ITEMS: ProfileItem[] = [
  { id: '1', image: IMAGES.snow, height: 192, username: '@isabel21', profileImage: IMAGES.profile1, activityType: 'Hiking', elevation: '1200mt', distance: '15km', time: '5h 30min', progress: 1 },
  { id: '2', image: IMAGES.landscape, height: 286, username: '@cusmin', profileImage: IMAGES.profile2, activityType: 'Hiking', elevation: '1200mt', distance: '15km', time: '5h 30min', progress: 1 },
  { id: '3', image: IMAGES.tent, height: 286, username: '@rebsix', profileImage: IMAGES.profile3, activityType: 'Hiking', elevation: '1200mt', distance: '15km', time: '5h 30min', progress: 1 },
  { id: '4', image: IMAGES.skiing, height: 286, username: '@_ashley', profileImage: IMAGES.profile1, activityType: 'Hiking', elevation: '1200mt', distance: '15km', time: '5h 30min', progress: 1 },
  { id: '5', image: IMAGES.adventure, height: 238, username: '@carl.noto', profileImage: IMAGES.profile2, activityType: 'Hiking', elevation: '1200mt', distance: '15km', time: '5h 30min', progress: 1 },
  { id: '6', image: IMAGES.jeep, height: 238, username: '@tony', profileImage: IMAGES.profile3, activityType: 'Hiking', elevation: '1200mt', distance: '15km', time: '5h 30min', progress: 1 },
  { id: '7', image: IMAGES.trailSunset, height: 192, username: '@marconuvolari87', profileImage: IMAGES.profile1 },
  { id: '8', image: IMAGES.powder, height: 389, username: '@nik_66', profileImage: IMAGES.profile2, activityType: 'Hiking', elevation: '1200mt', distance: '15km', time: '5h 30min', progress: 1 },
  { id: '9', image: IMAGES.sunset, height: 128, username: '@will87', profileImage: IMAGES.profile1, activityType: 'Road Cycling', elevation: '2550mt', distance: '33km', time: '5d 3h', progress: 0.7 },
  { id: '10', image: IMAGES.hikerSnow, height: 238, username: '@lollomag', profileImage: IMAGES.profile3, activityType: 'Hiking', elevation: '1200mt', distance: '15km', time: '5h 30min', progress: 1 },
  { id: '11', image: IMAGES.iceland, height: 192, username: '@julian_', profileImage: IMAGES.profile2, activityType: 'Trail Running', elevation: '1800mt', distance: '11km', time: '2d 5h', progress: 1 },
  { id: '12', image: IMAGES.snow, height: 127, username: '@tomasmek', profileImage: IMAGES.profile3 },
  { id: '13', image: IMAGES.landscape, height: 286, username: '@gioforty', profileImage: IMAGES.profile1, activityType: 'Backountry Skiing', elevation: '1200mt', distance: '15km', time: '5h 30min', progress: 1 },
  { id: '14', image: IMAGES.tent, height: 238, username: '@iamsimon', profileImage: IMAGES.profile2, activityType: 'Trail Running', elevation: '1200mt', distance: '15km', time: '5h 30min', progress: 1 },
];

export default function ProfileScreen() {
  const router = useRouter();

  const leftItems = PROFILE_ITEMS.filter((_, i) => i % 2 === 0);
  const rightItems = PROFILE_ITEMS.filter((_, i) => i % 2 === 1);

  const renderCard = (item: ProfileItem) => (
    <View key={item.id} style={styles.cardWrapper}>
      {/* User profile row */}
      <View style={styles.userRow}>
        <Image source={item.profileImage} style={styles.userAvatar} />
        <Text style={styles.userName}>{item.username}</Text>
      </View>
      {/* Card image */}
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
        {/* Heart overlay */}
        <View style={styles.heartOverlay}>
          <HeartIcon width={16} height={16} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
      {/* Activity stats */}
      {item.activityType && (
        <View style={styles.statsBlock}>
          <Text style={styles.statsTitle}>{item.activityType}</Text>
          <View style={styles.statsRow}>
            <Text style={styles.statsLabel}>Elevation</Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${(item.progress || 1) * 100}%` }]} />
            </View>
            <Text style={styles.statsValue}>{item.elevation}</Text>
          </View>
          <View style={styles.statsRow}>
            <Text style={styles.statsLabel}>Distance </Text>
            <View style={styles.progressBarFull} />
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
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header bar */}
        <View style={styles.headerBar} />

        {/* Map Banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <Image
              source={IMAGES.exploreMap}
              style={styles.bannerImage}
              resizeMode="cover"
            />
            {/* Compass icon */}
            <View style={styles.bannerCompass}>
              <CompassIcon width={31} height={31} color="#FFFFFF" />
            </View>
          </View>
        </View>

        {/* Top-right action button */}
        <TouchableOpacity
          style={styles.topRightBtn}
          activeOpacity={0.7}
          onPress={() => router.push('/messages-list')}
        >
          <ArrowUpRightIcon width={20} height={20} color="#282828" />
        </TouchableOpacity>

        {/* Search bar row */}
        <View style={styles.searchRow}>
          <TouchableOpacity style={styles.sideBtn} activeOpacity={0.7} onPress={() => router.push('/search')}>
            <FilterIcon width={20} height={20} color="#282828" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.searchBar}
            activeOpacity={0.7}
            onPress={() => router.push('/search')}
          >
            <Text style={styles.searchBarText}>Mallorca, Spain</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideBtn} activeOpacity={0.7} onPress={() => router.push('/explore-results')}>
            <ArrowUpRightIcon width={20} height={20} color="#282828" />
          </TouchableOpacity>
        </View>

        {/* Location info */}
        <View style={styles.locationBlock}>
          <View style={{ flex: 1 }}>
            <Text style={styles.locationTitle}>Olso, Norway</Text>
            <Text style={styles.locationSub}>
              <Text style={{ fontWeight: '600' }}>235</Text>
              <Text style={{ fontWeight: '400' }}>{' activities found in this location'}</Text>
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={() => router.push('/create-activity')}>
            <PlusIcon width={34} height={34} color="#282828" />
          </TouchableOpacity>
        </View>

        {/* Activity type filter row */}
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.filterChip} activeOpacity={0.7} onPress={() => router.push('/activity-filter-selection')}>
            <CompassIcon width={20} height={20} color="#282828" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip} activeOpacity={0.7} onPress={() => router.push('/activity-filter-selection')}>
            <FilterIcon width={20} height={20} color="#282828" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.editIconBtn} activeOpacity={0.7} onPress={() => router.push('/activity-filter-selection')}>
            <Text style={{ fontSize: 18, color: '#282828' }}>✏️</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.selectedLabel}>Selected: Gravel Cycling / Hiking</Text>

        {/* Results label */}
        <Text style={styles.resultsLabel}>Results</Text>

        {/* Masonry Grid */}
        <View style={styles.gridContainer}>
          <View style={styles.gridColumn}>
            {leftItems.map(renderCard)}
          </View>
          <View style={styles.gridColumn}>
            {rightItems.map(renderCard)}
          </View>
        </View>

        {/* Spacer for tab bar */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Floating create button */}
      <TouchableOpacity
        style={styles.floatingBtn}
        activeOpacity={0.7}
        onPress={() => router.push('/create-modal')}
      >
        <PlusIcon width={22} height={22} color="#282828" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {},

  // Header bar
  headerBar: {
    position: 'absolute',
    top: -3,
    left: 0,
    width: 393,
    height: 177,
    backgroundColor: '#D9D9D9',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  // Map Banner
  bannerContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  banner: {
    width: 382,
    height: 110,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    opacity: 0.8,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerCompass: {
    position: 'absolute',
    left: 15,
    top: 44,
  },

  // Top-right button
  topRightBtn: {
    position: 'absolute',
    top: 122,
    right: 21,
    width: 43,
    height: 43,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Search bar row
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginTop: 4,
    gap: 8,
  },
  sideBtn: {
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

  // Location info
  locationBlock: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 18,
    marginTop: 16,
  },
  locationTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#282828',
  },
  locationSub: {
    fontSize: 12,
    color: '#007AFF',
    marginTop: 2,
  },

  // Filter row
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginTop: 14,
    gap: 10,
  },
  filterChip: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#CFD0D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIconBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: '#676767',
    paddingHorizontal: 18,
    marginTop: 6,
  },

  // Results label
  resultsLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F1F1F',
    paddingHorizontal: 18,
    marginTop: 14,
    marginBottom: 10,
  },

  // Grid
  gridContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    gap: 6,
  },
  gridColumn: {
    flex: 1,
    gap: 4,
  },
  cardWrapper: {
    marginBottom: 4,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    paddingHorizontal: 4,
  },
  userAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 6,
  },
  userName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#282828',
  },
  gridCard: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  gridImage: {
    width: '100%',
  },
  heartOverlay: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 30,
    height: 37,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Stats block
  statsBlock: {
    paddingHorizontal: 4,
    paddingTop: 4,
    paddingBottom: 2,
  },
  statsTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#282828',
    marginBottom: 2,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  statsLabel: {
    fontSize: 8,
    fontWeight: '600',
    color: '#282828',
    width: 42,
  },
  statsValue: {
    fontSize: 8,
    fontWeight: '600',
    color: '#282828',
    textAlign: 'right',
  },
  progressBarContainer: {
    flex: 1,
    height: 6,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: 6,
    borderRadius: 20,
    backgroundColor: '#282828',
  },
  progressBarFull: {
    flex: 1,
    height: 6,
    borderRadius: 20,
    backgroundColor: '#282828',
    marginHorizontal: 4,
  },

  // Floating create button
  floatingBtn: {
    position: 'absolute',
    bottom: 95,
    alignSelf: 'center',
    width: 60,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'rgba(207,208,209,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
