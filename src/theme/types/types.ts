// Define a type for colors
interface Colors {
  // FAB, buttons, active states
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;

  // Less prominent components like filter chips
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;

  // Use tertiary roles for contrasting accents that balance primary and secondary colors
  // or bring heightened attention to an element such as input field.
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;

  // Error
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;

  // Background, header, tab bar, card container
  surface: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
  onSurface: string;
  onSurfaceVariant: string;

  // For important boundaries like text input
  outline: string;
  // Decorative elements like icons, dividers, and text
  outlineVariant: string;

  // Others
  shadow: string;
  scrim: string;
}

interface Elevations {
  level0: number;
  level1: number;
  level2: number;
  level3: number;
  level4: number;
  level5: number;
}

// Typography
interface Typography {
  font: string;
  fontWeight: string;
  fontSize: string | number;
  lineHeight: string | number;
}

interface TypeScale {
  displayLarge: Typography;
  displayMedium: Typography;
  displaySmall: Typography;
  headLineLarge: Typography;
  headLineMedium: Typography;
  headLineSmall: Typography;
  titleLarge: Typography;
  titleMedium: Typography;
  titleSmall: Typography;
  bodyLarge: Typography;
  bodyMedium: Typography;
  bodySmall: Typography;
  labelLarge: Typography;
  labelMedium: Typography;
  labelSmall: Typography;
}

// Shape
interface ShapeScale {
  none: number;
  extraSmall: number;
  small: number;
  medium: number;
  large: number;
  extraLarge: number;
  full: number;
}

// Define a type for the theme
interface Theme {
  colors: Colors;
  typography: TypeScale;
  shape: ShapeScale;
  elevations: Elevations;
}

export type {Colors, Elevations, ShapeScale, TypeScale, Theme};