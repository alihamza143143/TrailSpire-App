import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const screens = [
  { name: 'Home Feed', route: '/(tabs)/home', group: 'Main Tabs' },
  { name: 'Explore', route: '/(tabs)/explore', group: 'Main Tabs' },
  { name: 'Activity', route: '/(tabs)/activity', group: 'Main Tabs' },
  { name: 'Profile', route: '/(tabs)/profile', group: 'Main Tabs' },
  
  { name: 'Activity Detail', route: '/activity-detail', group: 'Detail Screens' },
  { name: 'Search', route: '/search', group: 'Detail Screens' },
  
  { name: 'Photo Gallery', route: '/photo-gallery', group: 'Phase 8' },
  { name: 'Image Viewer', route: '/image-viewer', group: 'Phase 8' },
  { name: 'Create Modal', route: '/create-modal', group: 'Phase 8' },
  { name: 'Explore Results', route: '/explore-results', group: 'Phase 8' },
  
  { name: 'Photo Crop Portrait', route: '/photo-crop-portrait', group: 'Phase 9' },
  { name: 'Messages List', route: '/messages-list', group: 'Phase 9' },
  { name: 'Chat Thread', route: '/chat-thread', group: 'Phase 9' },
  { name: 'Create Activity', route: '/create-activity', group: 'Phase 9' },
  { name: 'Friends Grid', route: '/friends-grid', group: 'Phase 9' },
  { name: 'Activity Filter', route: '/activity-filter-selection', group: 'Phase 9' },
  { name: 'Saved Collections', route: '/saved-collections', group: 'Phase 9' },
  { name: 'Collection Feed', route: '/collection-detail-feed', group: 'Phase 9' },
  { name: 'Photo Crop Landscape', route: '/photo-crop-landscape', group: 'Phase 9' },
  { name: 'User Profile Atlas', route: '/user-profile-atlas', group: 'Phase 9' },

  { name: 'Activity Stats', route: '/activity-stats', group: 'Phase 10' },
  { name: 'Save to Collection', route: '/save-to-collection', group: 'Phase 10' },
  { name: 'New Collection Modal', route: '/new-collection-modal', group: 'Phase 10' },
  { name: 'Other User Profile', route: '/other-user-profile', group: 'Phase 10' },
  { name: 'Feed Filters', route: '/feed-filters', group: 'Phase 10' },
  { name: 'New Collection Variant', route: '/new-collection-variant', group: 'Phase 10' },
  { name: 'Photo Fullscreen 1', route: '/photo-fullscreen-1', group: 'Phase 10' },
  { name: 'Photo Fullscreen 2', route: '/photo-fullscreen-2', group: 'Phase 10' },
  { name: 'Edit Collection', route: '/edit-collection', group: 'Phase 10' },
];

export default function NavigationHubScreen() {
  const router = useRouter();

  const groupedScreens = screens.reduce(
    (acc, screen) => {
      if (!acc[screen.group]) acc[screen.group] = [];
      acc[screen.group].push(screen);
      return acc;
    },
    {} as Record<string, typeof screens>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>🗺️ TrailSpire</Text>
          <Text style={styles.subtitle}>Navigation Hub • 29 Screens</Text>
        </View>

        {Object.entries(groupedScreens).map(([group, items]) => (
          <View key={group} style={styles.groupContainer}>
            <Text style={styles.groupTitle}>
              {group} ({items.length})
            </Text>
            {items.map((screen) => (
              <TouchableOpacity
                key={screen.route}
                style={styles.screenButton}
                onPress={() => router.push(screen.route as any)}
                activeOpacity={0.7}
              >
                <View>
                  <Text style={styles.screenName}>{screen.name}</Text>
                  <Text style={styles.screenRoute}>{screen.route}</Text>
                </View>
                <Text style={styles.arrow}>→</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>✅ All screens navigable</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#282828',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#A0A0A0',
  },
  groupContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  screenButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
  },
  screenName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#282828',
    marginBottom: 3,
  },
  screenRoute: {
    fontSize: 12,
    color: '#A0A0A0',
    fontFamily: 'Courier New',
  },
  arrow: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '600',
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 30,
  },
  footerText: {
    fontSize: 13,
    color: '#2E7D32',
    fontWeight: '500',
    textAlign: 'center',
  },
});
