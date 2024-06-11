import {BaseTheme} from './types/types';

import {
  primaryPalette,
  secondaryPalette,
  tertiaryPalette,
  errorPalette,
  neutralPalette,
} from './color-palatte';

import {typeface} from './type-face';

const base = {
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

const light: BaseTheme = {
  ...base,
  colors: {
    primary: primaryPalette.primary, // #196eee
    onPrimary: primaryPalette['primary-high-100'], // #ffffff
    primaryContainer: primaryPalette['primary-high-60'], // #a3c5f8
    onPrimaryContainer: primaryPalette['primary-low-70'], // #072147
    secondary: secondaryPalette.secondary, // #5e9af3
    onSecondary: secondaryPalette['secondary-high-100'], // #000000
    secondaryContainer: secondaryPalette['secondary-high-60'], // #263e61
    onSecondaryContainer: secondaryPalette['secondary-low-70'], // #cfe1fb
    tertiary: tertiaryPalette.tertiary, // #6eb99f
    onTertiary: tertiaryPalette['tertiary-high-100'], // #ffffff
    tertiaryContainer: tertiaryPalette['tertiary-high-60'], // #c5e3d9
    onTertiaryContainer: tertiaryPalette['tertiary-low-70'], // #213730
    error: errorPalette.error, // #B3261E
    onError: errorPalette['error-high-100'], // #ffffff
    errorContainer: errorPalette['error-high-60'], // #e1a8a5
    onErrorContainer: errorPalette['error-low-70'], // #360b09
    // Surface - default background color
    surface: neutralPalette.neutral,
    onSurface: neutralPalette['neutral-low-100'],
    onSurfaceVariant: neutralPalette['neutral-low-80'],
    // Surface Container - for navigation area, like header, tab bar, card container
    surfaceContainerLowest: neutralPalette['neutral-high-10'],
    surfaceContainerLow: neutralPalette['neutral-high-20'],
    surfaceContainer: neutralPalette['neutral-high-50'],
    surfaceContainerHigh: neutralPalette['neutral-high-80'],
    surfaceContainerHighest: neutralPalette['neutral-high-90'],

    outline: neutralPalette['neutral-low-50'],
    outlineVariant: neutralPalette['neutral-low-40'],
    shadow: neutralPalette['neutral-low-90'],
    scrim: neutralPalette['neutral-low-90'],
  },
};

const dark: BaseTheme = {
  ...base,
  colors: {
    primary: `${primaryPalette['primary-high-20']}`,
    onPrimary: `${primaryPalette['primary-low-100']}`,
    primaryContainer: `${primaryPalette['primary-low-50']}`,
    onPrimaryContainer: `${primaryPalette['primary-high-90']}`,
    secondary: `${secondaryPalette['secondary-high-20']}`,
    onSecondary: `${secondaryPalette['secondary-low-100']}`,
    secondaryContainer: `${secondaryPalette['secondary-low-50']}`,
    onSecondaryContainer: `${secondaryPalette['secondary-high-90']}`,
    tertiary: `${tertiaryPalette['tertiary-high-20']}`,
    onTertiary: `${tertiaryPalette['tertiary-low-100']}`,
    tertiaryContainer: `${tertiaryPalette['tertiary-low-50']}`,
    onTertiaryContainer: `${tertiaryPalette['tertiary-high-90']}`,
    error: `${errorPalette['error-high-20']}`,
    onError: `${errorPalette['error-low-100']}`,
    errorContainer: `${errorPalette['error-low-50']}`,
    onErrorContainer: `${errorPalette['error-high-90']}`,
    surface: `${neutralPalette['neutral-low-90']}`,
    onSurface: `${neutralPalette['neutral-high-90']}`,
    onSurfaceVariant: `${neutralPalette['neutral-high-70']}`,
    surfaceContainerLowest: `${neutralPalette['neutral-low-100']}`,
    surfaceContainerLow: `${neutralPalette['neutral-low-90']}`,
    surfaceContainer: `${neutralPalette['neutral-low-80']}`,
    surfaceContainerHigh: `${neutralPalette['neutral-low-70']}`,
    surfaceContainerHighest: `${neutralPalette['neutral-low-50']}`,
    outline: `${neutralPalette['neutral-high-50']}`,
    outlineVariant: `${neutralPalette['neutral-high-60']}`,
    shadow: `${neutralPalette['neutral-low-100']}`,
    scrim: `${neutralPalette['neutral-low-100']}`,
  },
};

export default {
  light,
  dark,
};
