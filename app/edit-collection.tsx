import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Switch,
  Image,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackArrowIcon } from '../src/components/icons/BackArrowIcon';

export default function EditCollectionScreen() {
  const router = useRouter();
  const [name, setName] = useState('Skitouring Switzerland');
  const [isPrivate, setIsPrivate] = useState(false);
  const [isCollaborative, setIsCollaborative] = useState(true);

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} activeOpacity={0.7} onPress={() => router.back()}>
          <BackArrowIcon width={20} height={20} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Collection</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => router.back()}>
          <Text style={styles.doneBtn}>Done</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Cover photo */}
        <View style={styles.coverSection}>
          <Image source={require('../assets/images/feed/edit_collection_cover.png')} style={styles.coverImage} />
          <TouchableOpacity activeOpacity={0.7} onPress={() => router.push('/photo-gallery')}>
            <Text style={styles.updateCoverText}>Update cover photo</Text>
          </TouchableOpacity>
        </View>

        {/* Name field */}
        <View style={styles.field}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholderTextColor="#666"
          />
        </View>

        {/* Make private toggle */}
        <View style={styles.toggleRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.toggleLabel}>Make private</Text>
            <Text style={styles.toggleDesc}>Only you can see this collection</Text>
          </View>
          <Switch
            value={isPrivate}
            onValueChange={setIsPrivate}
            trackColor={{ false: '#3A3A3A', true: '#007AFF' }}
            thumbColor="#FFFFFF"
          />
        </View>

        {/* Collaborative toggle */}
        <View style={styles.toggleRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.toggleLabel}>Collaborative</Text>
            <Text style={styles.toggleDesc}>Allow others to add to this collection</Text>
          </View>
          <Switch
            value={isCollaborative}
            onValueChange={setIsCollaborative}
            trackColor={{ false: '#3A3A3A', true: '#007AFF' }}
            thumbColor="#FFFFFF"
          />
        </View>

        {/* Invite link */}
        {isCollaborative && (
          <TouchableOpacity style={styles.inviteRow} activeOpacity={0.7} onPress={() => router.push('/friends-grid')}>
            <Text style={styles.inviteText}>Invite</Text>
            <Text style={styles.inviteChevron}>›</Text>
          </TouchableOpacity>
        )}

        {/* Delete button */}
        <TouchableOpacity style={styles.deleteBtn} activeOpacity={0.7} onPress={() => router.back()}>
          <Text style={styles.deleteBtnText}>Delete Collection</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#282828' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12 },
  backBtn: { width: 49, height: 49, borderRadius: 15, backgroundColor: '#3A3A3A', alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontFamily: 'Inter', fontSize: 18, fontWeight: '600', color: '#FFFFFF' },
  doneBtn: { fontFamily: 'Inter', fontSize: 16, fontWeight: '600', color: '#007AFF' },
  scrollContent: { padding: 16, paddingBottom: 40 },
  coverSection: { alignItems: 'center', marginBottom: 28 },
  coverImage: { width: 67, height: 67, borderRadius: 14 },
  updateCoverText: { fontFamily: 'Inter', fontSize: 14, fontWeight: '600', color: '#007AFF', marginTop: 10 },
  field: { marginBottom: 24 },
  label: { fontFamily: 'Inter', fontSize: 13, fontWeight: '600', color: '#A0A0A0', marginBottom: 8, textTransform: 'uppercase' },
  input: { backgroundColor: '#3A3A3A', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14, fontFamily: 'Inter', fontSize: 16, color: '#FFFFFF' },
  toggleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'rgba(255,255,255,0.1)' },
  toggleLabel: { fontFamily: 'Inter', fontSize: 16, fontWeight: '600', color: '#FFFFFF' },
  toggleDesc: { fontFamily: 'Inter', fontSize: 12, color: '#A0A0A0', marginTop: 2 },
  inviteRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'rgba(255,255,255,0.1)' },
  inviteText: { fontFamily: 'Inter', fontSize: 16, fontWeight: '600', color: '#007AFF' },
  inviteChevron: { fontSize: 22, color: '#007AFF' },
  deleteBtn: { borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginTop: 40 },
  deleteBtnText: { fontFamily: 'Inter', fontSize: 16, fontWeight: '700', color: '#D92121' },
});
