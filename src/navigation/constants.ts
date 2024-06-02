export interface BottomNavItem {
  name: string;
}

export const BottomNavItems: Record<
  'Home' | 'Search' | 'Community' | 'Activity',
  BottomNavItem
> = {
  Home: {
    name: 'HomeStack',
  },
  Search: {
    name: 'SearchStack',
  },
  Community: {
    name: 'CommunityStack',
  },
  Activity: {
    name: 'ActivityStack',
  },
} as const;
