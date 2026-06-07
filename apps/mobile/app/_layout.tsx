// app/_layout.tsx
// Layout raiz — providers globais (QueryClient) e navegação Stack

import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/query-client';
import { AuthProvider } from '@/features/auth/AuthProvider';

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#F7F8FA' },
            animation: 'slide_from_right',
          }}
        />
      </AuthProvider>
    </QueryClientProvider>
  );
}
