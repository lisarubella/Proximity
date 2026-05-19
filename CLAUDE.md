# Proximity - Luxurious Game Website

A beautiful, interactive game website with rose/pink theme and sakura effects.

## Project Structure

```
C:\tests\
├── index.html              # Main HTML structure
├── styles.css              # All styling and animations
├── script.js               # Interactive functionality
├── background-music.mp3    # Background audio loop
└── docs/
    └── proximity.md        # Design specifications
```

## Key Features

- **Loading Screen**: White CASTELLAR logo, pink loading bar with sakura particles
- **Main Menu**: 4 buttons (New Game, Continue, Settings, Credits) with animated background
- **New Game Page**: Card interface for player name and game mode selection
- **Settings Page**: Music volume and brightness controls
- **Credits Page**: Creator information with floating image
- **Effects**: Continuous falling sakura petals, glowing buttons, smooth transitions

## Technical Details

- **Fonts**: Castellar (logo), Times New Roman (menu), Cinzel (UI)
- **Theme**: Rose, pink, white color palette
- **Audio**: Auto-plays on load or first user interaction (browser policy)
- **Animations**: CSS keyframes for glow, float, fade, sakura fall effects
- **Responsive**: Fixed positioning with backdrop blur effects

## Design Reference

See `docs/proximity.md` for complete design specifications including:
- Background image URLs for each page
- Color schemes and effects
- Font specifications
- Card dimensions (2.63"×3.88")
- Button styles and interactions

## Development Notes

- All pages use fixed positioning for full-screen layouts
- Back buttons use z-index 1000 to stay visible
- Music volume defaults to 70%
- Sakura particles spawn every 300ms and auto-remove after 8s
- Loading screen displays for 3 seconds before transitioning to main menu

## Browser Compatibility

Modern browsers required for:
- CSS backdrop-filter
- Audio autoplay (may require user interaction)
- CSS animations and transitions
