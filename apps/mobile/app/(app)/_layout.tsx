// app/(app)/_layout.tsx
// Layout do grupo principal — Tabs para navegação entre seções

import React from 'react';
import { Text } from 'react-native';
import { Tabs } from 'expo-router';
import { colors, fontSizes } from '@/styles/theme';

function TabIcon({ name }: { name: string; color: string }) {
  return <Text style={{ fontSize: 20 }}>{name}</Text>;
}

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        },
        headerTitleStyle: {
          fontSize: fontSizes.subtitle,
          fontWeight: '600',
          color: colors.text,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          paddingBottom: 4,
          height: 56,
        },
        tabBarLabelStyle: {
          fontSize: fontSizes.caption,
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }: { color: any }) => <TabIcon name="🏠" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color }: { color: any }) => <TabIcon name="🔍" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }: { color: any }) => <TabIcon name="⭐" color={color} />,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Biblioteca',
          tabBarIcon: ({ color }: { color: any }) => <TabIcon name="📚" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }: { color: any }) => <TabIcon name="👤" color={color} />,
        }}
      />
    </Tabs>
  );
}
