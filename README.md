# 📱 Botchemy Mobile

AI-Powered Crypto Trading Platform - Mobile App (iOS + Android)

## 🚀 Tech Stack

- **Framework**: React Native 0.76 + Expo SDK 52
- **Language**: TypeScript 5.7
- **Navigation**: React Navigation 6
- **State Management**: Zustand 5.0
- **Data Fetching**: TanStack Query 5.59
- **Charts**: React Native Chart Kit
- **Auth**: Expo Local Authentication

## 📁 Project Structure

```
botchemy-mobile/
├── src/
│   ├── screens/        # Screen components
│   │   ├── auth/       # Login, Register
│   │   ├── dashboard/  # Main dashboard
│   │   ├── bots/       # Bot management
│   │   ├── portfolio/  # Portfolio view
│   │   └── settings/   # App settings
│   ├── navigation/     # Navigation setup
│   ├── components/     # Reusable components
│   ├── services/       # API clients
│   ├── store/          # Zustand stores
│   ├── hooks/          # Custom hooks
│   ├── types/          # TypeScript types
│   ├── utils/          # Helper functions
│   ├── constants/      # App constants
│   └── theme/          # Theme configuration
├── assets/             # Images, fonts, icons
└── App.tsx             # Root component
```

## 🛠️ Setup

### Prerequisites

- Node.js 22.11 LTS
- PNPM 9.x
- iOS Simulator (macOS) or Android Studio

### Installation

```bash
# Install dependencies (using PNPM)
pnpm install

# Start development server
pnpm start

# Run on iOS simulator
pnpm ios

# Run on Android emulator
pnpm android

# Run on web
pnpm web
```

## 📦 Available Scripts

- `pnpm start` - Start Expo development server
- `pnpm ios` - Run on iOS simulator
- `pnpm android` - Run on Android emulator
- `pnpm web` - Run on web browser
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking

## 🌟 Features

### ✅ Implemented

- Authentication (Email + Biometric)
- Dashboard with key metrics
- Bottom tab navigation
- Dark theme UI
- Type-safe API client
- Zustand state management
- React Query integration

### 🚧 Coming Soon

- Bot management (create, edit, delete)
- Real-time P&L tracking
- Portfolio analytics
- Push notifications
- Trade history
- Market data charts
- Strategy marketplace
- Social trading features

## 🔐 Environment Variables

Create `app.config.js` with:

```javascript
export default {
  expo: {
    name: "Botchemy",
    slug: "botchemy",
    extra: {
      apiUrl: process.env.API_URL || "http://localhost:3000/api",
    },
  },
};
```

## 📱 Building for Production

### iOS

```bash
# Build for App Store
pnpm expo build:ios --release-channel production

# Or use EAS Build
eas build --platform ios
```

### Android

```bash
# Build APK
pnpm expo build:android --release-channel production

# Or use EAS Build
eas build --platform android
```

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage
```

## 📄 License

Proprietary - Botchemy © 2025

## 🤝 Contributing

This is a private repository. Contact the team for contribution guidelines.
