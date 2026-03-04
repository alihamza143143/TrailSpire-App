import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchIcon } from '../src/components/icons/SearchIcon';
import { FilterIcon } from '../src/components/icons/FilterIcon';
import { BackArrowIcon } from '../src/components/icons/BackArrowIcon';

const { width: SCREEN_W } = Dimensions.get('window');

interface Message {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar: any;
  unread: boolean;
}

const MESSAGES: Message[] = [
  {
    id: '1',
    name: 'Alejandra Delgado',
    message: "Hey there! Just wanted to drop you a quick message to say hi! Hope you're h...",
    time: '9:41 AM',
    avatar: require('../assets/images/feed/chat_avatar_alejandra.png'),
    unread: true,
  },
  {
    id: '2',
    name: 'Andre & Lorico',
    message: "Nice. I don't know why people get all worked up about hawaiian pizza. I like it.",
    time: '9:36 AM',
    avatar: require('../assets/images/feed/profile_photo2.png'),
    unread: true,
  },
  {
    id: '3',
    name: 'Jenny Court',
    message: '(Sad fact: you cannot search for a gif of the word "gif", just gives you gifs.)',
    time: '9:28 AM',
    avatar: require('../assets/images/feed/profile_photo3.png'),
    unread: false,
  },
  {
    id: '4',
    name: 'Jenica Chong',
    message: "Maybe email isn't the best form of communication.",
    time: '9:20 AM',
    avatar: require('../assets/images/feed/profile_photo1.png'),
    unread: false,
  },
  {
    id: '5',
    name: 'Herland Antezana',
    message: "Tabs make way more sense than spaces. Convince me I'm wrong. LOL.",
    time: '9:00 AM',
    avatar: require('../assets/images/feed/profile_photo2.png'),
    unread: false,
  },
  {
    id: '6',
    name: 'Dee & Po',
    message: "That's what I'm talking about!",
    time: '8:58 AM',
    avatar: require('../assets/images/feed/profile_photo3.png'),
    unread: false,
  },
];

export default function MessagesListScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerContent}>
            <TouchableOpacity
              style={styles.backBtn}
              activeOpacity={0.7}
              onPress={() => router.back()}
            >
              <BackArrowIcon width={20} height={20} color="#282828" />
            </TouchableOpacity>

            <View style={styles.searchBar}>
              <SearchIcon width={18} height={18} color="#8C8C8C" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#8C8C8C"
              />
            </View>

            <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7} onPress={() => {}}>
              <FilterIcon width={18} height={18} color="#282828" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>

      {/* Messages List */}
      <ScrollView
        style={styles.messagesList}
        showsVerticalScrollIndicator={false}
      >
        {MESSAGES.map((msg, index) => (
          <TouchableOpacity
            key={msg.id}
            style={[
              styles.messageRow,
              index < MESSAGES.length - 1 && styles.messageRowBorder,
            ]}
            activeOpacity={0.7}
            onPress={() => router.push('/chat-thread')}
          >
            <View style={styles.avatarContainer}>
              <Image source={msg.avatar} style={styles.avatar} />
              {msg.unread && <View style={styles.unreadDot} />}
            </View>

            <View style={styles.messageContent}>
              <View style={styles.messageHeader}>
                <Text style={styles.messageName}>{msg.name}</Text>
                <Text style={styles.messageTime}>{msg.time}</Text>
              </View>
              <Text style={styles.messageText} numberOfLines={1}>
                {msg.message}
              </Text>
            </View>

            <View style={styles.chevron}>
              <Text style={styles.chevronText}>›</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#A0A0A0',
  },
  header: {
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  backBtn: {
    width: 49,
    height: 49,
    borderRadius: 15,
    backgroundColor: '#CFD0D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 49,
    backgroundColor: '#CFD0D1',
    borderRadius: 15,
    paddingHorizontal: 14,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#282828',
  },
  filterBtn: {
    width: 49,
    height: 49,
    borderRadius: 15,
    backgroundColor: '#CFD0D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messagesList: {
    flex: 1,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#A0A0A0',
  },
  messageRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.12)',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  unreadDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 11,
    height: 11,
    borderRadius: 5.5,
    backgroundColor: '#007AFF',
    borderWidth: 2,
    borderColor: '#A0A0A0',
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  messageName: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 17,
    color: '#000000',
  },
  messageTime: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 15,
    color: 'rgba(60,60,67,0.6)',
  },
  messageText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 15,
    color: 'rgba(60,60,67,0.6)',
  },
  chevron: {
    marginLeft: 8,
  },
  chevronText: {
    fontSize: 20,
    color: 'rgba(60,60,67,0.3)',
  },
});
