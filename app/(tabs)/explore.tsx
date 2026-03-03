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
import { MapPinIcon } from '../../src/components/icons/MapPinIcon';
import { HeartIcon } from '../../src/components/icons/HeartIcon';
import { ArrowUpRightIcon } from '../../src/components/icons/ArrowUpRightIcon';
import { SearchIcon } from '../../src/components/icons/SearchIcon';

const { width: SCREEN_W } = Dimensions.get('window');
const CARD_W = (SCREEN_W - 24 - 8) / 2; // two-column with gap

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

interface ExploreItem {
  id: string;
  image: any;
  title: string;
  location: string;
  height: number;
}

const EXPLORE_DATA: ExploreItem[] = [
  { id: '1', image: EXPLORE_IMAGES.snow, title: 'Hiking', location: 'French Alps', height: 220 },
  { id: '2', image: EXPLORE_IMAGES.landscape, title: 'Gravel', location: 'Iceland', height: 180 },
  { id: '3', image: EXPLORE_IMAGES.tent, title: 'Camping', location: 'Norway', height: 260 },
  { id: '4', image: EXPLORE_IMAGES.skiing, title: 'Skiing', location: 'Chamonix', height: 200 },
  { id: '5', image: EXPLORE_IMAGES.hikerSnow, title: 'Expedition', location: 'Antarctica', height: 240 },
  { id: '6', image: EXPLORE_IMAGES.jeep, title: 'Off-road', location: 'Morocco', height: 190 },
  { id: '7', image: EXPLORE_IMAGES.trailSunset, title: 'Trail Running', location: 'Canary Islands', height: 220 },
  { id: '8', image: EXPLORE_IMAGES.powder, title: 'Backcountry', location: 'Japan', height: 250 },
];

const CATEGORIES = ['All', 'Hiking', 'Cycling', 'Skiing', 'Running', 'Climbing'];

export default function ExploreScreen() {
  const router = useRouter();
  const [selectedCat, setSelectedCat] = useState('All');

  const leftColumn = EXPLORE_DATA.filter((_, i) => i % 2 === 0);
  const rightColumn = EXPLORE_DATA.filter((_, i) => i % 2 === 1);

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.locationLabel}>Current Location</Text>
            <View style={styles.locationRow}>
              <MapPinIcon width={14} height={14} color="#007AFF" />
              <Text style={styles.locationName}>Oslo, Norway</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.searchBtn} activeOpacity={0.7}>
            <SearchIcon width={18} height={18} color="#1F1F1F" />
          </TouchableOpacity>
        </View>
        <Text style={styles.exploreTitle}>Explore</Text>
      </View>

      {/* Category pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.catRow}
        style={styles.catScroll}
      >
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.catPill, selectedCat === cat && styles.catPillActive]}
            onPress={() => setSelectedCat(cat)}
            activeOpacity={0.7}
          >
            <Text style={[styles.catText, selectedCat === cat && styles.catTextActive]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Masonry Grid */}
      <ScrollView
        style={styles.gridScroll}
        contentContainerStyle={styles.gridContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.masonryContainer}>
          {/* Left column */}
          <View style={styles.masonryColumn}>
            {leftColumn.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.gridCard}
                activeOpacity={0.85}
                onPress={() => router.push('/activity-detail')}
              >
                <Image
                  source={item.image}
                  style={[styles.gridImage, { height: item.height }]}
                  resizeMode="cover"
                />
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardLocation}>{item.location}</Text>
                </View>
                <View style={styles.cardActions}>
                  <TouchableOpacity style={styles.actionBtn} activeOpacity={0.7}>
                    <ArrowUpRightIcon width={14} height={14} color="#007AFF" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          {/* Right column */}
          <View style={styles.masonryColumn}>
            {rightColumn.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.gridCard}
                activeOpacity={0.85}
                onPress={() => router.push('/activity-detail')}
              >
                <Image
                  source={item.image}
                  style={[styles.gridImage, { height: item.height }]}
                  resizeMode="cover"
                />
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardLocation}>{item.location}</Text>
                </View>
                <View style={styles.cardActions}>
                  <TouchableOpacity style={styles.actionBtn} activeOpacity={0.7}>
                    <ArrowUpRightIcon width={14} height={14} color="#007AFF" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  // Header
  header: {
    paddingTop: 60,
    paddingHorizontal: 18,
    paddingBottom: 8,
    backgroundColor: 'rgba(217,217,217,0.9)',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  locationLabel: {
    fontSize: 12,
    color: '#838385',
    marginBottom: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#282828',
  },
  searchBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(207,208,209,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exploreTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#282828',
    marginBottom: 6,
  },

  // Categories
  catScroll: {
    maxHeight: 44,
    marginTop: 12,
  },
  catRow: {
    paddingHorizontal: 18,
    gap: 8,
    alignItems: 'center',
  },
  catPill: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E8E8E6',
  },
  catPillActive: {
    backgroundColor: '#282828',
  },
  catText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#838385',
  },
  catTextActive: {
    color: '#FFFFFF',
  },

  // Grid
  gridScroll: {
    flex: 1,
    marginTop: 12,
  },
  gridContent: {
    paddingHorizontal: 8,
  },
  masonryContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  masonryColumn: {
    flex: 1,
    gap: 8,
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
  cardInfo: {
    position: 'absolute',
    bottom: 40,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  cardLocation: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.8)',
  },
  cardActions: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  actionBtn: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
