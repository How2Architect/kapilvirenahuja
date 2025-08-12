# Visual Design Guidelines

This file contains the visual design system and guidelines for Kapil Viren Ahuja's personal website inspired by Libby Peterson's design language.

## Design Philosophy
- **Minimalist & Professional**: Clean, journalistic aesthetic with emphasis on clarity
- **Content-First**: Prioritize readability and structured information hierarchy  
- **Accessible**: Clear typography and intuitive navigation patterns

## Color Palette

### Primary Colors
- **Background**: #ffffff (pure white)
- **Text Primary**: #1a1a1a (near black)
- **Text Secondary**: #666666 (medium gray)
- **Text Muted**: #999999 (light gray)
- **Accent**: #000000 (true black for emphasis)

### Neutral Scale
- **Gray 50**: #f9f9f9
- **Gray 100**: #f5f5f5
- **Gray 200**: #e5e5e5
- **Gray 300**: #d4d4d4
- **Gray 400**: #a3a3a3
- **Gray 500**: #737373
- **Gray 600**: #525252
- **Gray 700**: #404040
- **Gray 800**: #262626
- **Gray 900**: #171717

## Typography System

### Font Stack
- **Primary**: "Open Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif
- **Weights**: 400 (normal), 600 (semi-bold), 700 (bold)
- **Styles**: normal, italic

### Type Scale
- **Hero**: 3.5rem (56px) / 4rem (64px) on desktop
- **H1**: 2.5rem (40px) / 3rem (48px) on desktop  
- **H2**: 2rem (32px) / 2.25rem (36px) on desktop
- **H3**: 1.5rem (24px) / 1.75rem (28px) on desktop
- **Body Large**: 1.125rem (18px) / 1.5rem (24px) line-height
- **Body**: 1rem (16px) / 1.5rem (24px) line-height
- **Small**: 0.875rem (14px) / 1.25rem (20px) line-height

## Layout & Spacing

### Grid System
- **Max Width**: 1200px centered container
- **Gutters**: 24px on mobile, 48px on desktop
- **Columns**: Flexible grid with 12-column foundation

### Spacing Scale
- **xs**: 0.5rem (8px)
- **sm**: 0.75rem (12px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)
- **4xl**: 6rem (96px)

## Visual Elements

### Shadows
- **Subtle**: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- **Small**: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
- **Medium**: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
- **Large**: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)

### Borders
- **Radius**: 0px (sharp corners for minimalist look)
- **Width**: 1px 
- **Color**: #e5e5e5 (Gray 200)

## Animations & Interactions

### Transitions
- **Duration**: 150ms for micro-interactions, 300ms for page transitions
- **Easing**: ease-out for entrances, ease-in for exits
- **Properties**: opacity, transform, color

### Hover States
- **Links**: Subtle opacity change (0.7)
- **Buttons**: Background color shift
- **Images**: Slight scale or opacity effect

### View Transitions
- **Page Changes**: Smooth fade transitions
- **Content Loading**: Progressive reveal with blur-to-sharp

## Component Patterns

### Navigation
- **Style**: Minimal horizontal navigation
- **Typography**: Medium weight, slightly spaced
- **Behavior**: Sticky header with subtle shadow on scroll

### Cards
- **Style**: Clean containers with subtle shadows
- **Spacing**: Generous internal padding
- **Hover**: Slight shadow increase

### Buttons
- **Primary**: Black background, white text
- **Secondary**: White background, black border and text
- **Ghost**: Transparent background, black text

## Layout Patterns

### Homepage Structure
1. **Header**: Clean navigation with logo/name
2. **Hero**: Large typography with minimal copy
3. **Sections**: Alternating layouts with generous whitespace
4. **Grid Layouts**: Clean article/project grids
5. **Footer**: Simple links and copyright

## Responsive Design

### Breakpoints
- **Mobile**: 0px - 640px
- **Tablet**: 641px - 1024px  
- **Desktop**: 1025px+

### Mobile Considerations
- **Typography**: Smaller scales but maintain hierarchy
- **Spacing**: Reduced but proportional
- **Navigation**: Simple mobile menu
- **Touch Targets**: Minimum 44px for interactive elements