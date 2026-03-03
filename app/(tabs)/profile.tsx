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
import { AtlasLogo } from '../../src/components/AtlasLogo';
import { HeartIcon } from '../../src/components/icons/HeartIcon';
import { ArrowUpRightIcon } from '../../src/components/icons/ArrowUpRightIcon';
import { MapPinIcon } from '../../src/components/icons/MapPinIcon';
import { StravaLogoSvg } from '../../src/components/icons/StravaLogoSvg';

const { width: SCREEN_W } = Dimensions.get('window');

const IMAGES = {
  profile: require('../../assets/images/feed/profile_photo1.png'),
  snow: require('../../assets/images/feed/feed_snow_mountain.png'),
  landscape: require('../../assets/images/feed/feed_landscape.png'),
  adventure: require('../../assets/images/feed/feed_adventure.png'),
  tent: require('../../assets/images/feed/feed_tent.png'),
  iceland: require('../../assets/images/feed/feed_iceland.png'),
  jeep: require('../../assets/images/feed/feed_jeep.png'),
  skiing: require('../../assets/images/feed/feed_skiing.png'),
  trailSunset: require('../../assets/images/feed/feed_trail_sunset.png'),
  powder: require('../../assets/images/feed/feed_powder.png'),
};

const STATS = [
  { label: 'Activities', value: '147' },
  { label: 'Following', value: '234' },
  { label: 'Followers', value: '1.2k' },
];

interface ProfilePost {
  id: string;
  image: any;
  height: number;
}

const USER_POSTS: ProfilePost[] = [
  { id: '1', image: IMAGES.snow, height: 200 },
  { id: '2', image: IMAGES.landscape, height: 260 },
  { id: '3', image: IMAGES.tent, height: 220 },
  { id: '4', image: IMAGES.adventure, height: 190 },
  { id: '5', image: IMAGES.iceland, height: 250 },
  { id: '6', image: IMAGES.skiing, height: 210 },
];

export default function ProfileScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'posts' | 'saved'>('posts');

  const leftPosts = USER_POSTS.filter((_, i) => i % 2 === 0);
  const rightPosts = USER_POSTS.filter((_, i) => i % 2 === 1);

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          {/* Settings gear icon */}
          <TouchableOpacity style={styles.settingsBtn} activeOpacity={0.7}>
            <Text style={styles.settingsIcon}>⚙</Text>
          </TouchableOpacity>

          {/* Avatar */}
          <View style={styles.avatarContainer}>
            <Image source={IMAGES.profile} style={styles.avatar} />
          </View>

          {/* Name & Location */}
          <Text style={styles.userName}>Ashley Johnson</Text>
          <View style={styles.locationRow}>
            <MapPinIcon width={12} height={12} color="#007AFF" />
            <Text style={styles.locationText}>Oslo, Norway</Text>
          </View>

          {/* Bio */}
          <Text style={styles.bio}>
            Mountain explorer & trail runner.{'\n'}
            Always chasing the next adventure 🏔
          </Text>

          {/* Stats */}
          <View style={styles.statsRow}>
            {STATS.map((stat) => (
              <View key={stat.label} style={styles.statItem}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>

          {/* Action buttons */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.editBtn} activeOpacity={0.7}>
              <Text style={styles.editBtnText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.stravaBtn} activeOpacity={0.7}>
              <StravaLogoSvg width={50} height={10} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'posts' && styles.tabActive]}
            onPress={() => setActiveTab('posts')}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabText, activeTab === 'posts' && styles.tabTextActive]}>
              Posts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'saved' && styles.tabActive]}
            onPress={() => setActiveTab('saved')}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabText, activeTab === 'saved' && styles.tabTextActive]}>
              Saved
            </Text>
          </TouchableOpacity>
        </View>

        {/* Posts Grid */}
        <View style={styles.gridContainer}>
          <View style={styles.gridColumn}>
            {leftPosts.map((post) => (
              <TouchableOpacity
                key={post.id}
                style={styles.gridCard}
                activeOpacity={0.85}
                onPress={() => router.push('/activity-detail')}
              >
                <Image
                  source={post.image}
                  style={[styles.gridImage, { height: post.height }]}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.gridColumn}>
            {rightPosts.map((post) => (
              <TouchableOpacity
                key={post.id}
                style={styles.gridCard}
                activeOpacity={0.85}
                onPress={() => router.push('/activity-detail')}
              >
                <Image
                  source={post.image}
                  style={[styles.gridImage, { height: post.height }]}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Spacer for tab bar */}
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
  scroll: {
    flex: 1,
  },
  scrollContent: {},

  // Profile Header
  profileHeader: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 24,
    backgroundColor: Colors.cardBackground,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  settingsBtn: {
    position: 'absolute',
    top: 60,
    right: 20,
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsIcon: {
    fontSize: 20,
    color: '#282828',
  },
  avatarContainer: {
    marginBottom: 12,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 24,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#282828',
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 10,
  },
  locationText: {
    fontSize: 13,
    color: '#007AFF',
    fontWeight: '500',
  },
  bio: {
    fontSize: 13,
    color: '#838385',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 18,
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: 18,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#282828',
  },
  statLabel: {
    fontSize: 11,
    color: '#838385',
    fontWeight: '500',
  },

  // Actions
  actionRow: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  editBtn: {
    flex: 1,
    height: 44,
    borderRadius: 15,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F2F2F2',
  },
  stravaBtn: {
    width: 80,
    height: 44,
    borderRadius: 15,
    backgroundColor: '#FC4C02',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Tabs
  tabRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: 16,
    marginBottom: 12,
    gap: 24,
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

  // Grid
  gridContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    gap: 8,
  },
  gridColumn: {
    flex: 1,
    gap: 8,
  },
  gridCard: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  gridImage: {
    width: '100%',
  },
});
