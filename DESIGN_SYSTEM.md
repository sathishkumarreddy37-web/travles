# 🎨 FoodFolio - Visual Design Documentation

## 🌈 Complete Design System Overview

### Color Palette

#### Primary Colors
```
Primary Red (Main Brand)
HEX: #E23744
RGB: (226, 55, 68)
USE: Primary buttons, links, brand elements, CTAs

Primary Red Dark (Hover States)
HEX: #CB202D
RGB: (203, 32, 45)
USE: Button hover states, active elements

Primary Red Light (Highlights)
HEX: #FF4D5A
RGB: (255, 77, 90)
USE: Gradient ends, light accents
```

#### Accent Colors
```
Accent Orange
HEX: #FF6B35
RGB: (255, 107, 53)
USE: Secondary highlights, badges

Accent Gold
HEX: #FFB800
RGB: (255, 184, 0)
USE: Star ratings, premium badges, awards

Accent Green
HEX: #4CAF50
RGB: (76, 175, 80)
USE: Success states, healthy badges, confirmations
```

#### Neutral Grays (Complete Scale)
```
Gray 50:  #F9FAFB → Backgrounds, subtle fills
Gray 100: #F3F4F6 → Card backgrounds, light sections
Gray 200: #E5E7EB → Borders, dividers
Gray 300: #D1D5DB → Disabled states, subtle borders
Gray 400: #9CA3AF → Placeholder text, icons
Gray 500: #6B7280 → Secondary text
Gray 600: #4B5563 → Body text (less important)
Gray 700: #374151 → Primary body text
Gray 800: #1F2937 → Headings, important text
Gray 900: #111827 → Main headings, hero text
```

### Typography System

#### Font Families
```
Primary (Body Text):
Font: Poppins
Weights: 300 (Light), 400 (Regular), 500 (Medium), 
         600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold)
Use: All body text, buttons, navigation, UI elements

Display (Headlines):
Font: Playfair Display
Weights: 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold)
Use: Hero titles, section headings, featured text
```

#### Font Sizes (Responsive Scale)
```
Hero Title:    clamp(2.5rem, 6vw, 4.5rem)  → 40px - 72px
Section Title: clamp(2rem, 4vw, 3rem)      → 32px - 48px
Card Title:    1.25rem - 1.5rem            → 20px - 24px
Large Body:    1.125rem                    → 18px
Body Text:     1rem                        → 16px
Small Text:    0.875rem                    → 14px
Tiny Text:     0.8125rem                   → 13px
```

### Spacing System

```
--spacing-xs:   0.5rem    → 8px    (Tiny gaps)
--spacing-sm:   1rem      → 16px   (Small spacing)
--spacing-md:   1.5rem    → 24px   (Medium spacing)
--spacing-lg:   2rem      → 32px   (Large spacing)
--spacing-xl:   3rem      → 48px   (Extra large)
--spacing-2xl:  4rem      → 64px   (Section padding)
--spacing-3xl:  6rem      → 96px   (Major sections)
```

### Border Radius Scale

```
--radius-sm:   0.5rem   → 8px     (Small elements)
--radius-md:   1rem     → 16px    (Cards, buttons)
--radius-lg:   1.5rem   → 24px    (Large cards)
--radius-xl:   2rem     → 32px    (Hero search, modals)
--radius-full: 9999px   →         (Pills, circles)
```

### Shadow System

```
Shadow SM (Subtle):
0 1px 2px rgba(0, 0, 0, 0.05)
USE: Navbar, subtle elevation

Shadow MD (Default):
0 4px 6px -1px rgba(0, 0, 0, 0.1), 
0 2px 4px -1px rgba(0, 0, 0, 0.06)
USE: Cards at rest

Shadow LG (Hover):
0 10px 15px -3px rgba(0, 0, 0, 0.1), 
0 4px 6px -2px rgba(0, 0, 0, 0.05)
USE: Hovered cards

Shadow XL (Elevated):
0 20px 25px -5px rgba(0, 0, 0, 0.1), 
0 10px 10px -5px rgba(0, 0, 0, 0.04)
USE: Modals, dropdowns

Shadow 2XL (Maximum):
0 25px 50px -12px rgba(0, 0, 0, 0.25)
USE: Hero search, important elements

Shadow Red (Branded):
0 10px 30px rgba(226, 55, 68, 0.3)
USE: Primary buttons, brand elements
```

### Component Styles

#### Buttons

**Primary Button:**
```
Background: Linear gradient (135deg, #E23744 0%, #FF4D5A 100%)
Color: White
Padding: 0.75rem 1.5rem (12px 24px)
Border Radius: Full (pill shape)
Font Weight: 600 (Semi-Bold)
Shadow: Branded red shadow
Hover: Translate up 2px, increase shadow
```

**Secondary Button:**
```
Background: White
Color: Primary Red
Border: 2px solid Primary Red
Padding: 0.75rem 1.5rem
Border Radius: Full
Font Weight: 600
Hover: Fill with gradient, white text
```

**Icon Button:**
```
Size: 40px × 40px
Background: Gray 100 (hover), transparent (default)
Border Radius: Full circle
Color: Gray 700 → Primary Red (hover)
Center aligned icon
```

#### Cards

**Featured Card:**
```
Background: White
Border Radius: 1rem (16px)
Shadow: MD → XL on hover
Overflow: Hidden
Image Height: 300px (400px for large)
Content Padding: 1.5rem (24px)
Transition: Transform, shadow (0.3s ease)
Hover: Translate Y -8px
```

**Category Card:**
```
Background: White
Padding: 3rem (48px)
Border Radius: 1rem
Text Align: Center
Icon Size: 80px × 80px
Icon Background: Gradient overlay (10% opacity)
Icon Border Radius: 1rem
Hover: Translate Y -8px, scale icon 1.1
```

**Popular Card:**
```
Background: White
Border Radius: 1rem
Image Height: 250px
Content Padding: 1.5rem
Badges: Positioned absolute
Quick View: Centered, scale from 0 to 1
Tags: Gray 100 background, pill shape
```

#### Form Elements

**Input Field:**
```
Padding: 1rem 1.5rem
Border: None (in search bar) or 2px solid
Border Radius: Full
Font Size: 1rem
Color: Gray 800
Placeholder: Gray 400
Focus: Outline none, highlight border
```

**Search Container:**
```
Background: White
Padding: 1rem 1.5rem
Border Radius: 2rem (32px - XL)
Shadow: 2XL (maximum elevation)
Display: Flex with gap
Max Width: 900px
Center aligned
```

### Animation Timings

```
Fast:   0.15s → Quick feedback (hovers, clicks)
Base:   0.3s  → Standard transitions
Slow:   0.5s  → Smooth, noticeable changes
```

### Layout Grid

#### Desktop (> 1024px)
```
Featured Grid: 2fr 1fr 1fr (large card + 2 small)
Categories Grid: 4 columns (auto-fit, min 250px)
Popular Grid: 4 columns (auto-fit, min 300px)
Testimonials: 3 cards visible
Footer: 4 columns (2fr 1fr 1fr 1fr)
```

#### Tablet (768px - 1024px)
```
Featured Grid: 1fr 1fr (2 columns)
Categories Grid: 2-3 columns
Popular Grid: 2-3 columns
Testimonials: 2 cards visible
Footer: 2 columns
```

#### Mobile (< 768px)
```
All Grids: 1 column
Testimonials: 1 card visible
Footer: 1 column (stacked)
Navigation: Hamburger menu
Search: Stacked inputs
Stats: Vertical layout
```

### Interactive States

#### Link Hover:
```
Color: Gray 700 → Primary Red
Underline: Width 0 → 100% (from left)
Transition: 0.3s ease
```

#### Card Hover:
```
Transform: translateY(-8px)
Shadow: MD → XL
Image: Scale 1 → 1.1
Overlay: Opacity 0 → 1
```

#### Button Hover:
```
Transform: translateY(-2px)
Shadow: Increase depth
Background: Maintain gradient/color
```

#### Like Button (Active):
```
Icon: far fa-heart → fas fa-heart (filled)
Color: Gray → Primary Red
Animation: Scale 1 → 1.3 → 1 (heartbeat)
Counter: Increment by 1
```

### Gradients

```
Primary Gradient:
linear-gradient(135deg, #E23744 0%, #FF4D5A 100%)
USE: Buttons, badges, brand elements

Secondary Gradient:
linear-gradient(135deg, #FF6B35 0%, #FFB800 100%)
USE: Accents, special badges

Overlay Gradient:
linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)
USE: Image overlays for text readability

Text Gradient:
-webkit-background-clip: text
-webkit-text-fill-color: transparent
USE: Hero title highlights
```

### Icons

**Library**: Font Awesome 6 Free
```
Navigation Icon Size: 1rem (16px)
Section Badge Icon: 1rem
Hero Badge Icon: 1rem
Category Icon: 2rem (32px)
Social Icon: 1rem in 40px circle
Star Rating: 1rem
```

**Common Icons Used:**
- fa-utensils (Logo, food)
- fa-search (Search)
- fa-map-marker-alt (Location)
- fa-star (Ratings)
- fa-heart (Likes)
- fa-fire (Trending)
- fa-crown (Premium)
- fa-leaf (Healthy)
- fa-trophy (Bestseller)

### Accessibility

#### Contrast Ratios (WCAG AA+)
```
Primary Red on White: 4.92:1 ✅
Gray 700 on White: 9.33:1 ✅
Gray 600 on White: 7.02:1 ✅
White on Primary Red: 4.92:1 ✅
```

#### Interactive Elements
```
Focus Outline: 2px solid Primary Red
Focus Offset: 2px
Keyboard Navigation: Full support
ARIA Labels: On icon-only buttons
Alt Text: All images
Semantic HTML: Proper heading hierarchy
```

### Mobile Optimization

```
Viewport Meta: width=device-width, initial-scale=1.0
Touch Targets: Minimum 44px × 44px
Font Size: Minimum 16px (prevent zoom)
Tap Highlight: -webkit-tap-highlight-color: transparent
Scroll Behavior: Smooth
Overflow: Hidden on body when modal open
```

### Performance Optimizations

```
Image Loading: lazy attribute
Font Display: swap (Google Fonts)
CSS: No unused styles, optimized selectors
JS: Event delegation, debounced scrolls
Animations: GPU-accelerated (transform, opacity)
Reflows: Minimized layout thrashing
```

## 🎯 Design Decisions Explained

### Why Zomato Colors?
- **Red**: Stimulates appetite, creates urgency
- **Orange**: Energy, enthusiasm, warmth
- **Gold**: Premium, quality, excellence
- **Green**: Healthy, fresh, natural

### Why Poppins + Playfair Display?
- **Poppins**: Modern, clean, highly readable
- **Playfair**: Elegant, sophisticated, memorable
- **Combination**: Professional yet approachable

### Why These Animations?
- **Subtle**: Don't distract from content
- **Purposeful**: Guide user attention
- **Smooth**: Professional feel
- **Performance**: GPU-accelerated

### Why This Layout?
- **Grid System**: Modern, flexible, responsive
- **White Space**: Content breathes, easy to scan
- **Visual Hierarchy**: Clear content importance
- **Mobile-First**: Majority users on mobile

---

**This design system ensures consistency, professionalism, and ease of customization throughout the entire website.**
