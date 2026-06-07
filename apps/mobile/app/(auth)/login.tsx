// app/(auth)/login.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useRouter } from 'expo-router';

import { TextField } from '@/components/ui/TextField';
import { Button } from '@/components/ui/Button';
import { authService } from '@/services/auth.service';
import { theme } from '@/styles/theme';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      await authService.signIn(data.email, data.password);
      // O AuthProvider fará o redirecionamento automático
    } catch (error: any) {
      Alert.alert('Erro ao entrar', error.message || 'Verifique as suas credenciais.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.keyboardAvoiding} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <View style={styles.header}>
            <Text style={styles.title}>NotaTop</Text>
            <Text style={styles.subtitle}>Entra na tua conta para partilhar e consultar resumos.</Text>
          </View>

          <View style={styles.form}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  label="Email"
                  placeholder="exemplo@estudante.pt"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  label="Senha"
                  placeholder="A tua senha secreta"
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.password?.message}
                />
              )}
            />

            <Link href="/(auth)/forgot-password" asChild>
              <Text style={styles.forgotPassword}>Esqueceste-te da senha?</Text>
            </Link>

            <Button 
              title="Entrar" 
              onPress={handleSubmit(onSubmit)} 
              loading={isLoading} 
              style={styles.submitButton}
            />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Não tens uma conta? </Text>
            <Link href="/(auth)/register" asChild>
              <Text style={styles.footerLink}>Criar agora</Text>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: theme.spacing.lg,
    justifyContent: 'center',
  },
  header: {
    marginBottom: theme.spacing.xl,
    alignItems: 'center',
  },
  title: {
    fontSize: theme.fontSizes.titleLarge,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textMuted,
    textAlign: 'center',
  },
  form: {
    gap: theme.spacing.md,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: theme.colors.primary,
    fontSize: theme.fontSizes.secondary,
    marginTop: -8,
    marginBottom: 8,
  },
  submitButton: {
    marginTop: theme.spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: theme.spacing.xl,
  },
  footerText: {
    color: theme.colors.textMuted,
    fontSize: theme.fontSizes.body,
  },
  footerLink: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.body,
    fontWeight: 'bold',
  },
});
