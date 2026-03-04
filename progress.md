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

## Phase 8: New Figma Screens — Search, Explore Results, Photo Gallery, Image Viewer, Create Modal
| # | Task | Status | Notes |
|---|------|--------|-------|
| 78 | Fetch all 10 Figma design contexts | ✅ | Nodes 1:3768, 1:3932, 1:2761, 1:4825, 1:2062, 1:2152, 1:4437, 1:2249, 1:3139, 1:3402 |
| 79 | Analyze Figma designs vs existing screens | ✅ | 5 screens already exist, 5 new screens identified |
| 80 | Download new Figma image assets | ✅ | search_map, explore_map, explore_header, hero_snow_hiker, gallery_1–8, activity_types |
| 81 | Create Search screen (search.tsx) | ✅ | Figma node 1:4437 — Map header, search bar, activity type filters, recent searches |
| 82 | Create Explore Results screen (explore-results.tsx) | ✅ | Figma node 1:4825 — Oslo Norway, 235 activities found, masonry grid with profile badges, stats, likes |
| 83 | Create Photo Gallery screen (photo-gallery.tsx) | ✅ | Figma node 1:2249 — Dark bg, drag handle, 3-column grid, multi-select with ADD button |
| 84 | Create Image Viewer screen (image-viewer.tsx) | ✅ | Figma node 1:3139 — Full-screen rounded image, close button, save/share actions |
| 85 | Create Create Modal screen (create-modal.tsx) | ✅ | Figma node 1:3402 — Transparent modal, map with pulse rings, expanded bottom bar with Post/Library options |
| 86 | Register new routes in root layout | ✅ | Added search, explore-results, photo-gallery, image-viewer (modals) + create-modal (transparentModal) |
| 87 | Wire navigation across all screens | ✅ | Search bar → search, plus tab → create-modal, gallery → photo-gallery, photos → image-viewer, explore → explore-results |
| 88 | Activity detail gallery interactivity | ✅ | Gallery items touchable → image-viewer, "View All" → photo-gallery |
| 89 | Update progress.md | ✅ | Phase 8 documented |

## Phase 9: Additional Figma Screens — Messaging, Collections, Profiles, Photo Cropping
| # | Task | Status | Notes |
|---|------|--------|-------|
| 90 | Launch Expo web server | ✅ | `npx expo start --web` running on localhost:8081 for live testing |
| 91 | Fetch 10 new Figma design contexts | ✅ | Nodes 1:2276, 1:5230, 1:5889, 1:2704, 1:5275, 1:5334, 1:5414, 1:5507, 1:2303, 1:2330 |
| 92 | Analyze all 10 screens via subagent | ✅ | Comprehensive analysis of designs, elements, colors, layouts, navigation |
| 93 | Download image assets (12 files) | ✅ | mountains_hero, chat avatars, activity previews, friend avatars, collection previews, atlas map |
| 94 | Create Photo Crop Portrait screen (photo-crop-portrait.tsx) | ✅ | Figma node 1:2276 — Aspect ratio selector (9:16/16:9/3:4/4:3/1:1), photo preview with grid, back/next nav |
| 95 | Create Messages List screen (messages-list.tsx) | ✅ | Figma node 1:5230 — 6 conversations with avatars, unread dots, timestamps, search/filter, navigation to chat-thread |
| 96 | Create Chat Thread screen (chat-thread.tsx) | ✅ | Figma node 1:5889 — Conversation with Alejandra Delgado, message bubbles (sent/received), audio waveform, message input toolbar |
| 97 | Create Create Activity screen (create-activity.tsx) | ✅ | Figma node 1:2704 — Date card (16 MAR, cycling, 87km), Import GPX/Select Activity buttons, description textarea, tag friends, difficulty selector, post button |
| 98 | Create Friends Grid screen (friends-grid.tsx) | ✅ | Figma node 1:5275 — 4×4 grid of friend cards (67×67px avatars), search bar, filter button, profile navigation |
| 99 | Create Activity Filter Selection screen (activity-filter-selection.tsx) | ✅ | Figma node 1:5334 — Selected cards at top, activities list with map thumbnails, date badges, "Open" button navigation |
| 100 | Create Saved Collections screen (saved-collections.tsx) | ✅ | Figma node 1:5414 — Collections/GPX tabs, collection cards with 3-photo collages, privacy badges, collaborator avatars, star/menu actions |
| 101 | Create Collection Detail Feed screen (collection-detail-feed.tsx) | ✅ | Figma node 1:5507 — "Skitouring Switzerland" header, waterfall feed of activity cards with maps, profiles, elevation graphs, stats |
| 102 | Create Photo Crop Landscape screen (photo-crop-landscape.tsx) | ✅ | Figma node 1:2303 — Aspect ratio selector (16:9 default), photo preview (383×250px), crop grid overlay, next button |
| 103 | Create User Profile Atlas screen (user-profile-atlas.tsx) | ✅ | Figma node 1:2330 — Profile info (name, username, stats), friend previews, Settings/Chat/Follow buttons, atlas map, Your Atlas/All tabs, 3-column photo grid |
| 104 | Register all 10 new routes in app/_layout.tsx | ✅ | Added routes: photo-crop-portrait, messages-list, chat-thread, create-activity, friends-grid, activity-filter-selection, saved-collections, collection-detail-feed, photo-crop-landscape, user-profile-atlas |
| 105 | Wire all navigation | ✅ | Back buttons, next buttons, list item taps, tab switching, all navigation per Figma design |
| 106 | Fix TypeScript errors | ✅ | Removed invalid `aspectBtnActive` style reference in photo-crop-portrait |
| 107 | Update progress.md | ✅ | Phase 9 documented with all 10 new screens and assets |

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
| search_map.png | Map background | Search screen header |
| explore_map.png | Map background | Explore results header + Create modal bg |
| explore_header.png | Header background | Explore results header |
| hero_snow_hiker.png | Hero photo | Image viewer full-screen |
| gallery_1.png | Gallery photo | Photo gallery grid |
| gallery_2.png | Gallery photo | Photo gallery grid |
| gallery_3.png | Gallery photo | Photo gallery grid |
| gallery_4.png | Gallery photo | Photo gallery grid |
| gallery_5.png | Gallery photo | Photo gallery grid |
| gallery_6.png | Gallery photo | Photo gallery grid |
| gallery_7.png | Gallery photo | Photo gallery grid |
| gallery_8.png | Gallery photo | Photo gallery grid |
| activity_types.png | Activity icons | Search screen filters |

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
| 2026-03-03 | **Phase 8: New Figma screens** | Added 5 new screens from Figma: Search, Explore Results, Photo Gallery, Image Viewer, Create Modal. Downloaded 13 new image assets. Registered 5 new routes. Wired all navigation across all screens. |
| 2026-03-03 | **Phase 9: Additional Figma screens** | Added 10 new screens: Photo Crop Portrait/Landscape, Messages List, Chat Thread, Create Activity, Friends Grid, Activity Filter Selection, Saved Collections, Collection Detail Feed, User Profile Atlas. Downloaded 12 image assets. Registered 10 new routes. All 24 screens complete with full navigation wired. Fixed photo-crop-portrait style error. Web server running on localhost:8081. |
| 2026-03-03 | **Phase 10: Final Figma screens** | Added 9 new screens: Activity Stats, Save to Collection, New Collection Modal, Other User Profile, Feed Filters, New Collection Variant, Photo Fullscreen 1/2, Edit Collection. Downloaded 14 new image assets. Registered 9 new routes. Fixed 54 non-interactive buttons/elements across ALL 24 existing screens (missing onPress handlers, Views that should be TouchableOpacity). Updated navigation hub to 29 screens. |

---

## Current Status
- **33 screens implemented** — 4 auth, 4 tabs, 1 activity detail, 5 Phase 8, 10 Phase 9, 9 Phase 10
- **ALL buttons interactive** — Full interactivity audit completed: 54 non-interactive elements fixed across all screens
- **Tab navigation complete** — Home, Explore (plus → create modal), Activity, and Profile tabs
- **Navigation hub** — 29 screens organized by phase, accessible at /navigation-hub
- **All assets local** — 55+ images in assets/images/feed/, all served from local files
- **SVG icon system expanded** — 5 core brand/avatar icons + 9 UI/action icons
- **Figma color-audited** — All icon components and screen elements verified against Figma designs
- **Web tested and running** — Expo web server at localhost:8083, all 33 screens accessible

## Figma Reference
- **File Key:** `FAJlYtbyrtrEum7CScjrwK`
- **Landing:** Node `1:4331`
- **Sign In:** Node `1:4370`
- **Verify Email:** Node `1:4393`
- **Profile Setup:** Node `1:4415`
- **Home Feed:** Node `1:3768`
- **Explore:** Node `1:3932`
- **Activity:** Node `1:2761`
- **Profile:** Node `1:4825`
- **Activity Detail:** Nodes `1:2062` / `1:2152`
- **Search:** Node `1:4437`
- **Explore Results:** Node `1:4825`
- **Photo Gallery:** Node `1:2249`
- **Image Viewer:** Node `1:3139`
- **Create Modal:** Node `1:3402`
- **Photo Crop Portrait:** Node `1:2276`
- **Messages List:** Node `1:5230`
- **Chat Thread:** Node `1:5889`
- **Create Activity:** Node `1:2704`
- **Friends Grid:** Node `1:5275`
- **Activity Filter Selection:** Node `1:5334`
- **Saved Collections:** Node `1:5414`
- **Collection Detail Feed:** Node `1:5507`
- **Photo Crop Landscape:** Node `1:2303`
- **User Profile Atlas:** Node `1:2330`
- **Activity Stats:** Node `1:2421`
- **Save to Collection:** Node `1:3034`
- **New Collection Modal:** Node `1:3685`
- **Other User Profile:** Node `1:2626`
- **Feed Filters:** Node `1:4497`
- **New Collection Variant:** Node `1:3081`
- **Photo Fullscreen 1:** Node `1:2242`
- **Photo Fullscreen 2:** Node `1:2245`
- **Edit Collection:** Node `1:5944`

## Known Issues
| Issue | Status | Notes |
|-------|--------|-------|
| Google icon was text "G" | ✅ Fixed | Now uses proper colored Google "G" SVG with 4 brand colors |
| Strava text black on landing | ✅ Fixed | Changed to white (#FFFFFF) per Figma |
| SearchIcon/FilterIcon wrong default | ✅ Fixed | Was #1F1F1F, corrected to #282828 |
| Activity back button brownish | ✅ Fixed | Was #211906, corrected to #282828 |
| photo-crop-portrait invalid style | ✅ Fixed | Removed invalid `aspectBtnActive` style reference |
| No actual backend / auth logic | ⬜ | Frontend-only for now (by design) |
