// app/index.tsx
// Ponto de entrada — redireciona para o destino correto

import { View, ActivityIndicator } from 'react-native';

export default function Index() {
  // O AuthProvider encarrega-se do redirecionamento com base na sessão
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F7F8FA' }}>
      <ActivityIndicator size="large" color="#2563EB" />
    </View>
  );
}
