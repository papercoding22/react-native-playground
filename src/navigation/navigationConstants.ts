export interface BottomNavItem {
  name: string;
}

export const BottomNavItems: Record<
  'Home' | 'Search' | 'Community' | 'Activity',
  BottomNavItem
> = {
  Home: {
    name: 'Home',
  },
  Search: {
    name: 'Search',
  },
  Community: {
    name: 'Community',
  },
  Activity: {
    name: 'Activity',
  },
} as const;
