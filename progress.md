# ATLAS (TrailSpire) — Implementation Progress

> **Standing Rule:** Always update this file after any code changes.

## Status Legend
- ⬜ Not Started
- 🟡 In Progress  
- ✅ Completed
- ❌ Blocked

---

## Phase 0: Project Setup
| # | Task | Status | Notes |
|---|------|--------|-------|
| 1 | package.json | ✅ | Expo SDK 50 + all dependencies |
| 2 | app.json, tsconfig.json, babel.config.js | ✅ | Project config complete |
| 3 | Design tokens (theme.ts) | ✅ | Colors, spacing, fonts, radii |
| 4 | TypeScript types | ✅ | Navigation param types |

## Phase 1: Reusable Components
| # | Task | Status | Notes |
|---|------|--------|-------|
| 5 | Button component | ✅ | 314×53, dark bg, centered |
| 6 | TextInput component | ✅ | Focus state, placeholder styling |
| 7 | SocialLoginButton component | ✅ | 98×53, card bg |
| 8 | OTPInput component | ✅ | 4-digit, auto-advance, backspace |
| 9 | BackButton component | ✅ | "< Back" with onPress |
| 10 | AtlasLogo component | ✅ | LinearGradient + Figma ATLAS logo image |

## Phase 1.5: Bug Fixes & Asset Migration
| # | Task | Status | Notes |
|---|------|--------|-------|
| 19 | Remove all Figma asset URLs | ✅ | All remote URLs replaced with local require() |
| 20 | DecorativeCircles component | ✅ | Circles now inlined per-screen for pixel-perfect Figma positioning |
| 21 | AtlasLogo — use Figma logo | ✅ | Replaced plain Text with actual Figma ATLAS logo image asset |
| 22 | Landing — real photos | ✅ | 6 outdoor activity photos downloaded from Figma, local require() |
| 23 | Landing — social icons | ✅ | Strava logo image + Apple logo image from Figma, Google "G" |
| 24 | Sign In — Figma-accurate circles | ✅ | 3 circles with exact Figma positions (Ellipse28/29/30) |
| 25 | Verify Email — Figma-accurate circles | ✅ | Same circle setup as Sign In |
| 26 | Web support deps | ✅ | react-native-web, react-dom, @expo/metro-runtime installed |
| 27 | Fix SSR tty error | ✅ | Changed web output from "static" to "single" (SPA) |
| 28 | Web bundle test | ✅ | Successfully bundled, loads at http://localhost:8082 |
| 29 | expo-font version fix | ✅ | Fixed expo-font@55→11.10.3 (registerWebModule crash) |

## Phase 2: Screen Implementation (Figma-Accurate)
| # | Screen | Figma Node | Status | Notes |
|---|--------|-----------|--------|-------|
| 11 | Root layout (_layout.tsx) | — | ✅ | Stack, slide_from_right |
| 12 | Screen 1: Landing | `1:4331` | ✅ | Photo collage with 6 real Figma images, 3 decorative circles, social buttons, centered layout |
| 13 | Screen 2: Sign In | `1:4370` | ✅ | Upper section with 3 concentric circles + ATLAS logo, card panel with inputs |
| 14 | Screen 3: Email Verification | `1:4393` | ✅ | Same upper circle+logo layout, 4-digit OTP, Resend link |
| 15 | Screen 4: Profile Setup | `1:4415` | ✅ | Card panel near top, Figma avatar icon, 4 inputs, Strava connect text |

## Phase 3: Polish
| # | Task | Status | Notes |
|---|------|--------|-------|
| 16 | Screen transitions | ✅ | slide_from_right in layout |
| 17 | Keyboard handling | ✅ | KeyboardAvoidingView on forms |
| 18 | Press states | ✅ | activeOpacity on touchables |

## Phase 4: Figma-Accurate Redesign (Mar 3, 2026)
| # | Task | Status | Notes |
|---|------|--------|-------|
| 30 | Download all Figma images locally | ✅ | 6 photos → assets/images/, icons → assets/icons/ |
| 31 | Create assets/ folder structure | ✅ | assets/images/ + assets/icons/ for all local assets |
| 32 | Create screens/ folder | ✅ | For Figma reference screenshots |
| 33 | Rewrite Landing screen | ✅ | Local images, exact Figma photo positions, real Strava/Apple icons |
| 34 | Rewrite Sign In screen | ✅ | Figma circle positions (Ellipse28/29/30), card panel layout |
| 35 | Rewrite Verify Email screen | ✅ | Same circle layout, email bold highlight, resend link |
| 36 | Rewrite Profile Setup screen | ✅ | Figma avatar icon, card from top, Strava text styling |
| 37 | Update AtlasLogo component | ✅ | Uses actual Figma ATLAS logo image instead of plain text |
| 38 | Update progress.md | ✅ | Full progress tracking |

## Phase 5: SVG Icon Fix & Pixel-Perfect Polish (Mar 3, 2026)
| # | Task | Status | Notes |
|---|------|--------|-------|
| 39 | Diagnose icon file format issue | ✅ | All .png files were actually SVG content (file header: `<svg`) |
| 40 | Install react-native-svg | ✅ | Proper SVG rendering support for React Native |
| 41 | Create AtlasLogoTextSvg component | ✅ | SVG paths from Figma ATLAS wordmark, renders on gradient |
| 42 | Create StravaLogoSvg component | ✅ | "STRAVA" wordmark SVG paths from Figma |
| 43 | Create AppleLogoSvg component | ✅ | Apple logo SVG paths from Figma |
| 44 | Create GoogleLogoSvg component | ✅ | Standard colored Google "G" logo (4 color paths) |
| 45 | Create AvatarPlaceholderSvg component | ✅ | Person-in-circle outline SVG from Figma |
| 46 | Update AtlasLogo component | ✅ | Replaced broken Image with AtlasLogoTextSvg — "ATLAS" now visible |
| 47 | Fix Landing social buttons | ✅ | Strava/Apple/Google now use SVG components |
| 48 | Fix Sign In circles | ✅ | SVG Ellipse elements, concentric centered at (195, 193) |
| 49 | Fix Verify Email circles | ✅ | Same SVG circle rendering as Sign In |
| 50 | Fix Profile Setup avatar | ✅ | AvatarPlaceholderSvg replaces broken Image |
| 51 | Rename icon files .png → .svg | ✅ | All 18 icon files renamed to correct .svg extension |
| 52 | Icon barrel export | ✅ | src/components/icons/index.ts exports all 5 SVG components |
| 53 | Web build verification | ✅ | `expo export --platform web` succeeds |
| 54 | Update progress.md | ✅ | Full progress tracking |

## Phase 6: Post-Auth Flow + Clickable Prototype (Mar 3, 2026)
| # | Task | Status | Notes |
|---|------|--------|-------|
| 55 | Fix Strava icon branding | ✅ | Added orange Strava brand mark + corrected proportions on Landing |
| 56 | Add avatar "+" overlay | ✅ | Added plus overlay on Profile Setup avatar placeholder |
| 57 | Wire auth flow navigation | ✅ | Start and social auth actions route into app tabs |
| 58 | Add root navigation entries | ✅ | Added `(tabs)` and `activity-detail` routes in root stack |
| 59 | Create bottom tab layout | ✅ | 4-tab mobile nav: Home, Explore, Activity, Profile |
| 60 | Build Home Feed screen | ✅ | Activity banner, search/filter, stories, masonry feed |
| 61 | Build Explore screen | ✅ | Location header, category chips, masonry explore cards |
| 62 | Build Activity tab screen | ✅ | Map hero, activity stats, tagged users, gallery |
| 63 | Build Profile tab screen | ✅ | Profile header, stats, actions, posts grid |
| 64 | Build activity detail screen | ✅ | Full detail screen with map + gallery, opened from feed cards |
| 65 | Create additional icon components | ✅ | Added 9 reusable SVG UI icons for tabs/feed/actions |
| 66 | Download feed/map/profile assets | ✅ | Added 16 local images under assets/images/feed |
| 67 | Fix TypeScript style error | ✅ | Removed unsupported `backdropFilter` from React Native style |
| 68 | Web run verification | ✅ | Expo web server started and bundled without errors |
| 69 | Update progress.md | ✅ | Phase 6 changes documented |

## Phase 7: Comprehensive Figma Color Audit (Mar 3, 2026)
| # | Task | Status | Notes |
|---|------|--------|-------|
| 70 | Fetch Figma context for all 4 auth screens | ✅ | Nodes 1:4331, 1:4370, 1:4393, 1:4415 |
| 71 | Full element-by-element audit vs Figma | ✅ | Compared every color, size, font, spacing across 4 auth screens + 5 tab screens + all components |
| 72 | Fix Landing Strava logo text color | ✅ | Changed `#282828` → `#FFFFFF` (white) to match Figma |
| 73 | Fix SearchIcon default color | ✅ | Changed `#1F1F1F` → `#282828` (match textDark) |
| 74 | Fix FilterIcon default color | ✅ | Changed `#1F1F1F` → `#282828` (match textDark) |
| 75 | Fix Activity tab back button color | ✅ | Changed rogue `#211906` → `#282828` |
| 76 | Add Strava brand orange to theme | ✅ | Added `stravaOrange: '#FC4C02'` to Colors constants |
| 77 | Update progress.md | ✅ | Phase 7 audit documented |

---

## Asset Inventory

### Photos (assets/images/)
| File | Source (Figma) | Used In |
|------|---------------|---------|
| runners_on_dunes.png | Rectangle310 | Landing collage — Row 1 left |
| person_on_cliff.png | Rectangle303 | Landing collage — Row 1 right |
| cyclist.png | Rectangle301 | Landing collage — Row 2 left |
| sand_walker.png | Rectangle311 | Landing collage — Row 2 right |
| motorcycle_road.png | Rectangle294 | Landing collage — Row 3 left |
| sand_dune_person.png | Rectangle295 | Landing collage — Row 3 right |

### Feed & App Images (assets/images/feed/)
| File | Source (Figma) | Used In |
|------|---------------|---------|
| route_map.png | Route map frame | Home activity banner |
| activity_map.png | Activity map frame | Activity tab + Activity detail |
| feed_snow_mountain.png | Feed card image | Home feed |
| feed_landscape.png | Feed card image | Home feed |
| feed_adventure.png | Feed card image | Home feed |
| feed_sunset.png | Feed card image | Home feed |
| feed_hiker_snow.png | Feed card image | Home feed |
| feed_skiing.png | Explore/gallery image | Explore + Activity/Profile galleries |
| feed_jeep.png | Explore/gallery image | Explore + Activity/Profile galleries |
| feed_tent.png | Explore/gallery image | Explore + Activity/Profile galleries |
| feed_iceland.png | Explore/gallery image | Explore + Activity/Profile galleries |
| feed_powder.png | Explore/gallery image | Explore + Activity/Profile galleries |
| feed_trail_sunset.png | Explore/gallery image | Explore + Activity/Profile galleries |
| profile_photo1.png | Profile image | Profile tab avatar + tab icon |
| profile_photo2.png | Profile image | Stories + tagged users |
| profile_photo3.png | Profile image | Stories + tagged users |

### Icons (assets/icons/) — Now SVG files
| File | Source (Figma) | Used In |
|------|---------------|---------|
| strava_logo.svg | STRAVA node | Reference (raw SVG file) |
| apple_logo.svg | apple logo node | Reference (raw SVG file) |
| atlas_logo_text.svg | Group35203 | Reference (raw SVG file) |
| atlas_logo_full.svg | Group35203 (signin) | Reference |
| avatar_placeholder.svg | Union node | Reference (raw SVG file) |
| google_g.svg | Vector node | Reference |

### SVG Icon Components (src/components/icons/)
| Component | Source SVG | Used In |
|-----------|-----------|---------|
| AtlasLogoTextSvg.tsx | atlas_logo_text.svg paths | AtlasLogo component (white text on gradient) |
| StravaLogoSvg.tsx | strava_logo.svg paths | Landing social button |
| AppleLogoSvg.tsx | apple_logo.svg paths | Landing social button |
| GoogleLogoSvg.tsx | Standard Google "G" | Landing social button |
| AvatarPlaceholderSvg.tsx | avatar_placeholder.svg paths | Profile Setup avatar |
| GridIcon.tsx | Custom SVG | Home tab icon |
| PlusIcon.tsx | Custom SVG | Explore tab icon + floating action button |
| CompassIcon.tsx | Custom SVG | Activity tab icon |
| SearchIcon.tsx | Custom SVG | Search action icon |
| HeartIcon.tsx | Custom SVG | Feed and gallery like badges |
| ArrowUpRightIcon.tsx | Custom SVG | Card action badges |
| MapPinIcon.tsx | Custom SVG | Location headers |
| BackArrowIcon.tsx | Custom SVG | In-screen back actions |
| FilterIcon.tsx | Custom SVG | Home filter action |

---

## Change Log
| Date | Change | Details |
|------|--------|---------|
| 2026-03-02 | Project initialized | Plan created, Figma MCP integrated, 4 designs fetched |
| 2026-03-02 | Phase 0 complete | Config files, theme, types created |
| 2026-03-02 | Phase 1 complete | 6 reusable components built |
| 2026-03-02 | Phase 2 complete | All 4 screens + root layout implemented |
| 2026-03-02 | Phase 3 complete | Transitions, keyboard, press states done |
| 2026-03-02 | Asset migration | Removed all 16 Figma URLs — replaced with local components |
| 2026-03-02 | Web support added | Installed react-native-web, react-dom; fixed SPA mode |
| 2026-03-02 | expo-font fix | Fixed version mismatch (55→11.10.3) crashing web |
| 2026-03-03 | Figma-accurate redesign | Downloaded all assets locally, rewrote all 4 screens to match Figma pixel-perfect |
| 2026-03-03 | Local assets | Created assets/images/ and assets/icons/ with all Figma images |
| 2026-03-03 | AtlasLogo updated | Now uses actual Figma ATLAS text image inside gradient |
| 2026-03-03 | Landing fixes | Real photos, exact positions, real Strava/Apple icons, correct text alignment |
| 2026-03-03 | Sign In/Verify/Profile fixes | Figma-accurate circle positions, card panel layouts, avatar icon |
| 2026-03-03 | SVG icon migration | All Figma icons were SVGs saved as .png — renamed to .svg, created react-native-svg components |
| 2026-03-03 | react-native-svg added | Installed react-native-svg for proper SVG rendering in React Native |
| 2026-03-03 | 5 SVG icon components | AtlasLogoTextSvg, StravaLogoSvg, AppleLogoSvg, GoogleLogoSvg, AvatarPlaceholderSvg |
| 2026-03-03 | Circle rendering fix | Sign In & Verify Email circles now use SVG Ellipse for pixel-perfect concentric positioning |
| 2026-03-03 | AtlasLogo fix | Now renders "ATLAS" text using SVG paths instead of broken PNG Image |
| 2026-03-03 | Strava icon corrected | Added orange Strava brand mark and aligned sizing on Landing social button |
| 2026-03-03 | Profile avatar plus added | Added + overlay to avatar placeholder in Profile Setup |
| 2026-03-03 | App navigation wired | Auth and social actions route into new tab experience |
| 2026-03-03 | Tab navigation added | Created 4-tab layout and registered app routes in root stack |
| 2026-03-03 | New screens implemented | Added Home, Explore, Activity, Profile tabs + Activity detail screen |
| 2026-03-03 | New assets and icons | Added 16 feed/map/profile images + 9 UI SVG icon components |
| 2026-03-03 | TypeScript style fix | Removed unsupported `backdropFilter` style key |
| 2026-03-03 | Web runtime check | Dev server bundled successfully on web |
| 2026-03-03 | **Figma color audit** | Full audit of all 9 screens + 14 icon components against Figma. Fixed: Strava text white, SearchIcon/FilterIcon defaults, Activity back button color, theme constant added |

---

## Current Status
- **Auth + post-auth flow implemented** — 4 auth screens plus 4 tab screens and 1 activity detail screen
- **Clickable prototype active** — Primary buttons and feed card interactions are wired end-to-end
- **Tab navigation complete** — Home, Explore, Activity, and Profile tabs are connected and functional
- **All assets local** — Landing assets + feed/map/profile images served from local files
- **SVG icon system expanded** — 5 core brand/avatar icons + 9 UI/action icons
- **Figma color-audited** — All icon components and screen elements verified against Figma designs
- **Web tested** — Expo web bundles and runs successfully

## Figma Reference
- **File Key:** `FAJlYtbyrtrEum7CScjrwK`
- **Landing:** Node `1:4331`
- **Sign In:** Node `1:4370`
- **Verify Email:** Node `1:4393`
- **Profile Setup:** Node `1:4415`

## Known Issues
| Issue | Status | Notes |
|-------|--------|-------|
| Google icon was text "G" | ✅ Fixed | Now uses proper colored Google "G" SVG with 4 brand colors |
| Strava text black on landing | ✅ Fixed | Changed to white (#FFFFFF) per Figma |
| SearchIcon/FilterIcon wrong default | ✅ Fixed | Was #1F1F1F, corrected to #282828 |
| Activity back button brownish | ✅ Fixed | Was #211906, corrected to #282828 |
| No actual backend / auth logic | ⬜ | Frontend-only for now (by design) |
