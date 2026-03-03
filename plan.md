# ATLAS (TrailSpire) — Frontend Implementation Plan

## Overview
Build the first 4 interactive authentication screens of the ATLAS outdoor inspiration app using **Expo (Managed Workflow)**, **Expo Router (file-based navigation)**, and **React Native StyleSheet**. All screens are pixel-perfect replications of the Figma designs, frontend-only with mock data.

**Figma File:** `FAJlYtbyrtrEum7CScjrwK`  
**Tech Stack:** Expo SDK 50+, Expo Router v3, React Native, TypeScript

---

## Screen Inventory (4 Auth Screens)

| # | Screen | Figma Node | Description |
|---|--------|-----------|-------------|
| 1 | Landing / Sign Up | `1:4331` | Photo collage, "See it. Plan it. Go" tagline, Sign up CTA, social logins (Strava/Apple/Google), legal links |
| 2 | Sign In | `1:4370` | ATLAS logo with decorative circles, Email + Password inputs, "Verify Code" button, "< Back" nav |
| 3 | Email Verification | `1:4393` | ATLAS logo, "Verify your email" heading, 4-digit OTP boxes, "Next" button, Resend link |
| 4 | Profile Setup | `1:4415` | "Set your profile" heading, avatar upload, Full Name / @nickname / Nationality / DOB inputs, Strava connect, "Start" button |

---

## App Flow Wiring

```
[1] Landing Screen
    ├── "Sign up" button → [4] Profile Setup
    ├── "Log in" link → [2] Sign In
    └── Social Login (Strava/Apple/Google) → future Home Feed

[2] Sign In Screen
    ├── "Verify Code" button → [3] Email Verification
    └── "< Back" → [1] Landing

[3] Email Verification Screen
    ├── "Next" button → future Home Feed
    ├── "Resend" → stays on [3]
    └── "< Back" → [2] Sign In

[4] Profile Setup Screen
    ├── "Start" button → future Home Feed
    └── "< Back" → [1] Landing
```

---

## Project Structure

```
TrailSpire App/
├── .vscode/
│   └── mcp.json
├── app/
│   ├── _layout.tsx              # Root Stack navigator
│   ├── index.tsx                # Screen 1: Landing
│   ├── sign-in.tsx              # Screen 2: Sign In
│   ├── verify-email.tsx         # Screen 3: Email Verification
│   └── profile-setup.tsx        # Screen 4: Profile Setup
├── src/
│   ├── components/
│   │   ├── Button.tsx           # Primary dark button
│   │   ├── TextInput.tsx        # Styled text input
│   │   ├── SocialLoginButton.tsx# Strava/Apple/Google
│   │   ├── OTPInput.tsx         # 4-digit code input
│   │   ├── BackButton.tsx       # "< Back" navigation
│   │   └── AtlasLogo.tsx        # Gradient ATLAS logo
│   ├── constants/
│   │   └── theme.ts             # Colors, spacing, typography
│   └── types/
│       └── index.ts             # TypeScript interfaces
├── assets/                      # Expo assets
├── app.json
├── package.json
├── tsconfig.json
├── babel.config.js
├── plan.md
└── progress.md
```

---

## Design Tokens (from Figma)

| Token | Value |
|-------|-------|
| Background | `#F2F2F2` |
| Card Background | `#E8E8E6` |
| Input Background | `#F2F2F2` |
| Dark Text | `#282828` |
| Gray Text | `#838385` |
| Button BG | `#282828` |
| Button Text | `#F2F2F2` |
| Strava Red | `#FF3B30` |
| ATLAS Blue Gradient | `#007AFF → #A8D2FF` |
| Border Radius (inputs) | `24px` |
| Border Radius (cards) | `30px` |
| Input Height | `53px` |
| Input Width | `314px` |
| Font Family | Inter |
| Heading Size | 32px SemiBold |
| Body Size | 16px Regular |
| Small Size | 12px Regular |
| Tiny Size | 10px Regular |

---

## Implementation Steps

### Phase 0: Project Setup
1. Create `package.json` with Expo + dependencies
2. Create `app.json`, `tsconfig.json`, `babel.config.js`
3. Create `src/constants/theme.ts` with design tokens
4. Create `src/types/index.ts`

### Phase 1: Reusable Components
5. `Button.tsx` — dark filled button (314×53, rounded-24)
6. `TextInput.tsx` — gray rounded input with placeholder
7. `SocialLoginButton.tsx` — compact social login buttons
8. `OTPInput.tsx` — 4 square digit inputs with auto-advance
9. `BackButton.tsx` — "< Back" text link
10. `AtlasLogo.tsx` — gradient background with ATLAS text

### Phase 2: Screens
11. `app/_layout.tsx` — Root Stack with transitions
12. `app/index.tsx` — Landing screen
13. `app/sign-in.tsx` — Sign In screen
14. `app/verify-email.tsx` — Email Verification screen
15. `app/profile-setup.tsx` — Profile Setup screen

### Phase 3: Polish
16. Screen transition animations
17. Keyboard-aware scrolling
18. Interactive press states
