// app/index.tsx
// Ponto de entrada — redireciona para o destino correto
// No Épico 0: vai direto para (app)/home como placeholder
// No Épico 1: verificará sessão e redirecionará auth vs app

import { Redirect } from 'expo-router';

export default function Index() {
  // TODO (Épico 1): verificar sessão e decidir destino
  // Por agora, redireciona para home como placeholder
  return <Redirect href="/(app)/home" />;
}
