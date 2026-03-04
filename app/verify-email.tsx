import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Ellipse } from 'react-native-svg';
import { Button } from '../src/components/Button';
import { OTPInput } from '../src/components/OTPInput';
import { AtlasLogo } from '../src/components/AtlasLogo';
import { BackButton } from '../src/components/BackButton';
import { Colors } from '../src/constants/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const FRAME_W = 393;

export default function VerifyEmailScreen() {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();
  const displayEmail = email || 'jhoncarte@gmail.com';

  const handleNext = () => {
    router.push('/profile-setup');
  };

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.flex}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            style={styles.flex}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            {/*  Upper Section: Circles + Back + Logo  */}
            <View style={styles.upperSection}>
              {/* SVG circles for pixel-perfect rendering */}
              <Svg
                style={StyleSheet.absoluteFill}
                width="100%"
                height="100%"
                viewBox={`0 0 ${FRAME_W} 300`}
              >
                {/* Ellipse29 — outer */}
                <Ellipse
                  cx={195.5}
                  cy={192.5}
                  rx={235}
                  ry={236}
                  stroke="#A0A0A0"
                  strokeOpacity={0.2}
                  strokeWidth={1}
                  fill="none"
                />
                {/* Ellipse28 — medium */}
                <Ellipse
                  cx={195}
                  cy={193}
                  rx={155.5}
                  ry={156.5}
                  stroke="#A0A0A0"
                  strokeOpacity={0.2}
                  strokeWidth={1}
                  fill="none"
                />
                {/* Ellipse30 — small */}
                <Ellipse
                  cx={195}
                  cy={193}
                  rx={104}
                  ry={102}
                  stroke="#A0A0A0"
                  strokeOpacity={0.2}
                  strokeWidth={1}
                  fill="none"
                />
              </Svg>

              <BackButton onPress={() => router.back()} />
              <View style={styles.logoContainer}>
                <AtlasLogo size={100} />
              </View>
            </View>

            {/*  Card Section  */}
            <View style={styles.cardSection}>
              <Text style={styles.heading}>Verify your email</Text>
              <Text style={styles.subtitle}>
                We've sent a 4-digit code to your{'\n'}email{' '}
                <Text style={styles.emailBold}>{displayEmail}</Text>
              </Text>

              <View style={styles.otpContainer}>
                <OTPInput
                  length={4}
                  onComplete={(code) => console.log('OTP:', code)}
                />
              </View>

              <View style={styles.buttonContainer}>
                <Button title="Next" onPress={handleNext} />
              </View>

              <View style={styles.spacer} />

              <TouchableOpacity activeOpacity={0.6} style={styles.resendContainer} onPress={() => {}}>
                <Text style={styles.resendText}>
                  Didn't receive the code?{' '}
                  <Text style={styles.resendBold}>Resend</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  flex: { flex: 1 },
  scrollContent: { flexGrow: 1 },

  //  Upper 
  upperSection: {
    height: 300,
    position: 'relative',
    overflow: 'hidden',
  },
  logoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 143,
    alignItems: 'center',
  },

  //  Card 
  cardSection: {
    backgroundColor: Colors.cardBackground,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 44,
    paddingBottom: 50,
    flexGrow: 1,
  },
  heading: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.textDark,
    textAlign: 'center',
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.textGray,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 28,
  },
  emailBold: {
    color: Colors.textDark,
    fontWeight: '500',
  },
  otpContainer: {
    marginBottom: 40,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  spacer: { flex: 1, minHeight: 50 },
  resendContainer: {
    alignSelf: 'center',
    paddingBottom: 10,
  },
  resendText: {
    fontSize: 12,
    color: Colors.textGray,
    textAlign: 'center',
  },
  resendBold: {
    color: Colors.textDark,
    fontWeight: '500',
  },
});
