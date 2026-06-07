// app/(app)/explore.tsx
// Tela de explorar — placeholder para Épico 5

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/styles/theme';
import { EmptyState } from '@/components/ui';

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.container}>
        <EmptyState
          icon="🔍"
          title="Explorar conteúdos"
          description="O marketplace será implementado no Épico 5. Aqui você poderá pesquisar e filtrar trabalhos publicados."
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
});
