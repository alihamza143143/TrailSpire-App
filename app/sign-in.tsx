import React, { useState } from 'react';
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
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Ellipse } from 'react-native-svg';
import { Button } from '../src/components/Button';
import { TextInput } from '../src/components/TextInput';
import { AtlasLogo } from '../src/components/AtlasLogo';
import { BackButton } from '../src/components/BackButton';
import { Colors } from '../src/constants/theme';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const FRAME_W = 393;

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleVerify = () => {
    router.push({ pathname: '/verify-email', params: { email } });
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
                {/* Ellipse29 — outer: 471×473, left -40, top -44 → center (195.5, 192.5) */}
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
                {/* Ellipse28 — medium: 312×314, left 39, top 36 → center (195, 193) */}
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
                {/* Ellipse30 — small: 209×205, centered same → center (195, 193) */}
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
              <Text style={styles.heading}>Sign in</Text>
              <Text style={styles.subtitle}>
                To sign in to an account, enter{'\n'}your email and password
              </Text>

              <View style={styles.inputGroup}>
                <TextInput
                  placeholder="E-mail"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>

              <TouchableOpacity
                style={styles.linkContainer}
                onPress={() => router.back()}
                activeOpacity={0.6}
              >
                <Text style={styles.linkText}>
                  Already have an account?{' '}
                  <Text style={styles.linkBold}>Log in</Text>
                </Text>
              </TouchableOpacity>

              <View style={styles.buttonContainer}>
                <Button title="Verify Code" onPress={handleVerify} />
              </View>

              <View style={styles.spacer} />

              <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                <Text style={styles.supportText}>
                  Having issues?{' '}
                  <Text style={styles.supportBold}>Contact Support</Text>
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
    // Center logo at the circle center — circle center is at y=193 in 393-frame
    // Logo is 100px tall, so top = 193 - 50 = 143
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
    marginBottom: 26,
  },
  inputGroup: {
    gap: 11,
    marginBottom: 16,
  },
  linkContainer: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  linkText: {
    fontSize: 12,
    color: Colors.textGray,
    textAlign: 'center',
  },
  linkBold: {
    color: Colors.textDark,
    fontWeight: '500',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  spacer: { flex: 1, minHeight: 50 },
  supportText: {
    fontSize: 12,
    color: Colors.textGray,
    textAlign: 'center',
    paddingBottom: 10,
  },
  supportBold: {
    color: Colors.textDark,
    fontWeight: '500',
  },
});
