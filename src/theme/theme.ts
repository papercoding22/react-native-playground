import {Theme} from './types/types';

import {
  primaryPalette,
  secondaryPalette,
  tertiaryPalette,
  errorPalette,
  neutralPalette,
} from './color-palattes';

import {typeface} from './type-face';

// System Theme -> Reference Values
// For example: system primary color -> primaryPalette.primary
const light: Theme = {
  colors: {
    primary: primaryPalette.primary,
    onPrimary: primaryPalette['primary-high-100'],
    primaryContainer: primaryPalette['primary-high-60'],
    onPrimaryContainer: primaryPalette['primary-low-70'],
    secondary: secondaryPalette.secondary,
    onSecondary: secondaryPalette['secondary-high-100'],
    secondaryContainer: secondaryPalette['secondary-high-60'],
    onSecondaryContainer: secondaryPalette['secondary-low-70'],
    tertiary: tertiaryPalette.tertiary,
    onTertiary: tertiaryPalette['tertiary-high-100'],
    tertiaryContainer: tertiaryPalette['tertiary-high-60'],
    onTertiaryContainer: tertiaryPalette['tertiary-low-70'],
    error: errorPalette.error,
    onError: errorPalette['error-high-100'],
    errorContainer: errorPalette['error-high-60'],
    onErrorContainer: errorPalette['error-low-70'],
    surface: neutralPalette['neutral-high-10'],
    onSurface: neutralPalette['neutral-low-100'],
    onSurfaceVariant: neutralPalette['neutral-low-80'],
    surfaceContainerLowest: neutralPalette['neutral-low-20'],
    surfaceContainerLow: neutralPalette['neutral-low-10'],
    surfaceContainer: neutralPalette.neutral,
    surfaceContainerHigh: neutralPalette['neutral-high-10'],
    surfaceContainerHighest: neutralPalette['neutral-high-20'],
    outline: neutralPalette['neutral-low-50'],
    outlineVariant: neutralPalette['neutral-low-40'],
    shadow: neutralPalette['neutral-low-90'],
    scrim: neutralPalette['neutral-low-90'],
  },
  typeScale: {
    displaySmall: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightRegular,
      fontSize: 36,
      lineHeight: 44,
      letterSpacing: -0.25,
    },
    displayMedium: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightRegular,
      fontSize: 45,
      lineHeight: 52,
      letterSpacing: 0,
    },
    displayLarge: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightRegular,
      fontSize: 57,
      lineHeight: 64,
      letterSpacing: 0,
    },
    headLineSmall: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightRegular,
      fontSize: 24,
      lineHeight: 32,
      letterSpacing: 0,
    },
    headLineMedium: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightRegular,
      fontSize: 28,
      lineHeight: 36,
      letterSpacing: 0,
    },
    headLineLarge: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightRegular,
      fontSize: 32,
      lineHeight: 40,
      letterSpacing: 0,
    },
    titleSmall: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightMedium,
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.1,
    },
    titleMedium: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightMedium,
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.15,
    },
    titleLarge: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightRegular,
      fontSize: 22,
      lineHeight: 28,
      letterSpacing: 0,
    },
    bodySmall: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightRegular,
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0.4,
    },
    bodyMedium: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightRegular,
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.25,
    },
    bodyLarge: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightRegular,
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.5,
    },
    labelSmall: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightMedium,
      fontSize: 11,
      lineHeight: 16,
      letterSpacing: 0.5,
    },
    labelMedium: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightMedium,
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0.5,
    },
    labelLarge: {
      fontFamily: typeface.brand,
      fontWeight: typeface.weightMedium,
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.1,
    },
  },
  shape: {
    none: 0,
    extraSmall: 4,
    small: 8,
    medium: 12,
    large: 16,
    extraLarge: 28,
    full: 9999,
  },
  elevations: {
    level0: 0,
    level1: 1,
    level2: 3,
    level3: 6,
    level4: 8,
    level5: 12,
  },
};

// TODO: Implement later
// const dark: Theme = {
//   colors: {},
//   typography: {},
//   shape: {},
//   elevations: {},
// };

export default {
  light,
};
