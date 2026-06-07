# 16 - Ambiente E Comandos

## Objetivo

Definir o ambiente esperado e os comandos iniciais para os agentes criarem o app mobile NotaTop.

## Ambiente Recomendado

- Windows.
- Node.js LTS.
- npm.
- Expo via `npx`.
- Android Studio com Android Emulator, ou dispositivo Android com Expo Go.
- Conta Supabase.

## Criar O App Mobile

Comando recomendado:

```txt
npx create-expo-app@latest apps/mobile --template
```

Ao escolher template, usar TypeScript.

Se o comando oferecer template com Expo Router, escolher template com Expo Router. Caso contrario, instalar e configurar Expo Router depois.

## Dependencias Mobile Esperadas

Instalar dependencias de app:

```txt
npm install @supabase/supabase-js @tanstack/react-query react-hook-form zod @hookform/resolvers
```

Instalar dependencias Expo:

```txt
npx expo install expo-document-picker expo-image-picker expo-file-system expo-secure-store
```

Se Expo Router nao vier instalado:

```txt
npx expo install expo-router react-native-safe-area-context react-native-screens
```

## Variaveis De Ambiente

Criar em `apps/mobile/.env`:

```txt
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=
```

Nunca colocar:

```txt
SUPABASE_SERVICE_ROLE_KEY
```

no app mobile.

## Scripts Esperados No App

O `package.json` do app deve ter scripts equivalentes a:

```json
{
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "typecheck": "tsc --noEmit",
    "lint": "eslint ."
  }
}
```

## Comandos Para Desenvolvimento

Dentro de `apps/mobile`:

```txt
npm install
npm run start
```

Para Android:

```txt
npm run android
```

Para verificar TypeScript:

```txt
npm run typecheck
```

## Supabase

O agente backend deve criar migrations dentro de:

```txt
supabase/migrations
```

Se Supabase CLI estiver instalado:

```txt
supabase start
supabase db reset
```

Se nao estiver instalado, o SQL das migrations pode ser aplicado pelo Supabase Dashboard.

## Ordem De Setup Recomendada

1. Criar app Expo.
2. Instalar dependencias.
3. Configurar Expo Router.
4. Criar componentes base.
5. Criar projeto Supabase.
6. Aplicar migrations.
7. Configurar `.env`.
8. Testar login.

## Observacoes Para Antigravity

- Se um comando precisar de internet e falhar, informar claramente.
- Se o Expo criar uma estrutura diferente, adaptar mantendo o contrato de rotas.
- Nao instalar bibliotecas grandes de UI sem necessidade.
- Nao implementar pagamentos nem painel web durante o setup.
