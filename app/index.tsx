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
import { SafeAreaView } from 'react-native-safe-area-context';
import { AtlasLogo } from '../src/components/AtlasLogo';
import { AtlasLogoTextSvg } from '../src/components/icons/AtlasLogoTextSvg';
import { StravaLogoSvg } from '../src/components/icons/StravaLogoSvg';
import { AppleLogoSvg } from '../src/components/icons/AppleLogoSvg';
import { GoogleLogoSvg } from '../src/components/icons/GoogleLogoSvg';
import { Button } from '../src/components/Button';
import { Colors, FontSize, FontWeight, BorderRadius, Layout } from '../src/constants/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Local image assets
const PHOTOS = {
  runnersOnDunes: require('../assets/images/runners_on_dunes.png'),
  personOnCliff: require('../assets/images/person_on_cliff.png'),
  cyclist: require('../assets/images/cyclist.png'),
  sandWalker: require('../assets/images/sand_walker.png'),
  motorcycleRoad: require('../assets/images/motorcycle_road.png'),
  sandDunePerson: require('../assets/images/sand_dune_person.png'),
};

export default function LandingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Photo Collage Card */}
        <View style={styles.collageContainer}>
          <View style={styles.collageCard}>
            {/* Decorative circles inside card */}
            <View style={StyleSheet.absoluteFill} pointerEvents="none">
              <View style={styles.cardCircleOuter} />
              <View style={styles.cardCircleMedium} />
              <View style={styles.cardCircleInner} />
            </View>

            {/* Photos - absolute positions matching Figma exactly */}
            {/* Row 1: Runners on dunes + Person on cliff */}
            <Image source={PHOTOS.runnersOnDunes} style={styles.photoRunners} resizeMode="cover" />
            <Image source={PHOTOS.personOnCliff} style={styles.photoCliff} resizeMode="cover" />
            
            {/* Row 2: Cyclist + ATLAS logo + Sand walker */}
            <Image source={PHOTOS.cyclist} style={styles.photoCyclist} resizeMode="cover" />
            <View style={styles.logoInCard}>
              <AtlasLogo size={60} />
            </View>
            <Image source={PHOTOS.sandWalker} style={styles.photoSandWalker} resizeMode="cover" />
            
            {/* Row 3: Motorcycle road + Sand dune person */}
            <Image source={PHOTOS.motorcycleRoad} style={styles.photoMotorcycle} resizeMode="cover" />
            <Image source={PHOTOS.sandDunePerson} style={styles.photoSandDune} resizeMode="cover" />
          </View>
        </View>

        {/* Heading */}
        <Text style={styles.heading}>See it. Plan it. Go</Text>
        
        {/* Subtitle - left-aligned as in Figma */}
        <View style={styles.subtextContainer}>
          <Text style={styles.subtext}>
            Track the effort. Tell the story.{'\n'}
            Find your next challenge and go{'\n'}earn it.
          </Text>
        </View>

        {/* Sign Up Button */}
        <View style={styles.buttonContainer}>
          <Button title="Sign up" onPress={() => router.push('/profile-setup')} />
        </View>

        {/* Already have account */}
        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => router.push('/sign-in')}
          activeOpacity={0.6}
        >
          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginBold}>Log in</Text>
          </Text>
        </TouchableOpacity>

        {/* Divider with "or" */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <View style={styles.dividerBg}>
            <Text style={styles.dividerText}>or</Text>
          </View>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialRow}>
          {/* Strava */}
          <TouchableOpacity style={styles.socialButton} activeOpacity={0.7} onPress={() => router.replace('/(tabs)/home')}>
            <StravaLogoSvg width={70} height={14} color="#FFFFFF" />
          </TouchableOpacity>
          {/* Apple */}
          <TouchableOpacity style={styles.socialButton} activeOpacity={0.7} onPress={() => router.replace('/(tabs)/home')}>
            <AppleLogoSvg width={21} height={24} color="#282828" />
          </TouchableOpacity>
          {/* Google */}
          <TouchableOpacity style={styles.socialButton} activeOpacity={0.7} onPress={() => router.replace('/(tabs)/home')}>
            <GoogleLogoSvg width={22} height={22} />
          </TouchableOpacity>
        </View>

        {/* Support */}
        <Text style={styles.supportText}>
          Having issues?{' '}
          <Text style={styles.supportBold}>Contact Support</Text>
        </Text>

        {/* Legal */}
        <Text style={styles.legalText}>
          By continuing, you agree to ATLAS{' '}
          <Text style={styles.legalBold}>Privacy Policy</Text> and{'\n'}
          <Text style={styles.legalBold}>Terms of Service</Text>.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const CARD_W = 317;
const CARD_H = 362;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  //  Collage Card 
  collageContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 12,
  },
  collageCard: {
    width: CARD_W,
    height: CARD_H,
    backgroundColor: Colors.cardBackground,
    borderRadius: BorderRadius.xl,
    overflow: 'hidden',
    position: 'relative',
  },
  // Circles inside card
  cardCircleOuter: {
    position: 'absolute',
    width: 317,
    height: 317,
    borderRadius: 158.5,
    borderWidth: 1,
    borderColor: '#D4D4D4',
    left: 0,
    top: 23,
  },
  cardCircleMedium: {
    position: 'absolute',
    width: 210,
    height: 210,
    borderRadius: 105,
    borderWidth: 1,
    borderColor: '#D4D4D4',
    left: 53,
    top: 76,
  },
  cardCircleInner: {
    position: 'absolute',
    width: 141,
    height: 139,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: '#D4D4D4',
    left: 88,
    top: 112,
  },
  //  Photo positions from Figma 
  // Row 1
  photoRunners: {
    position: 'absolute',
    left: 94,
    top: 26,
    width: 121,
    height: 75,
    borderRadius: 12,
  },
  photoCliff: {
    position: 'absolute',
    left: 221,
    top: 21,
    width: 84,
    height: 84,
    borderRadius: 12,
  },
  // Row 2
  photoCyclist: {
    position: 'absolute',
    left: 18,
    top: 124,
    width: 78,
    height: 115,
    borderRadius: 12,
  },
  logoInCard: {
    position: 'absolute',
    left: (CARD_W - 60) / 2,
    top: 151,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoSandWalker: {
    position: 'absolute',
    left: 237,
    top: 128,
    width: 62,
    height: 83,
    borderRadius: 12,
  },
  // Row 3
  photoMotorcycle: {
    position: 'absolute',
    left: 57,
    top: 265,
    width: 108,
    height: 73,
    borderRadius: 12,
  },
  photoSandDune: {
    position: 'absolute',
    left: 195,
    top: 227,
    width: 84,
    height: 115,
    borderRadius: 12,
  },
  //  Typography 
  heading: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.textDark,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 8,
    width: 335,
  },
  subtextContainer: {
    width: 335,
    paddingLeft: 26,
    marginBottom: 28,
  },
  subtext: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.textGray,
    lineHeight: 22,
  },
  //  Button 
  buttonContainer: {
    marginBottom: 12,
  },
  //  Login link 
  loginLink: {
    marginBottom: 4,
  },
  loginText: {
    fontSize: 12,
    color: Colors.textGray,
    textAlign: 'center',
  },
  loginBold: {
    color: Colors.textDark,
    fontWeight: '500',
  },
  //  Divider 
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
    width: 291,
    position: 'relative',
  },
  dividerLine: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.divider,
  },
  dividerBg: {
    backgroundColor: Colors.background,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 1,
  },
  dividerText: {
    fontSize: 14,
    color: Colors.textGray,
    textAlign: 'center',
  },
  //  Social buttons 
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 16,
  },
  socialButton: {
    width: 98,
    height: 53,
    backgroundColor: Colors.cardBackground,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //  Footer 
  supportText: {
    fontSize: 10,
    color: Colors.textGray,
    textAlign: 'center',
    marginBottom: 12,
  },
  supportBold: {
    color: Colors.textDark,
    fontWeight: '500',
  },
  legalText: {
    fontSize: 10,
    color: Colors.textGray,
    textAlign: 'center',
    lineHeight: 16,
  },
  legalBold: {
    color: Colors.textDark,
    fontWeight: '600',
  },
});
