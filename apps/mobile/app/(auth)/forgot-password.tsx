// app/(auth)/forgot-password.tsx
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

const forgotPasswordSchema = z.object({
  email: z.string().email('Email inválido'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const { control, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      setIsLoading(true);
      await authService.resetPassword(data.email);
      setIsSuccess(true);
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Não foi possível processar o teu pedido.');
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
            <Text style={styles.title}>Repor Senha</Text>
            <Text style={styles.subtitle}>Insere o teu email e enviar-te-emos um link para definires uma nova senha.</Text>
          </View>

          {isSuccess ? (
            <View style={styles.successContainer}>
              <Text style={styles.successTitle}>Email enviado!</Text>
              <Text style={styles.successMessage}>
                Verifica a tua caixa de entrada e segue as instruções para repor a tua senha.
              </Text>
              <Button 
                title="Voltar ao Login" 
                onPress={() => router.replace('/(auth)/login')} 
                style={styles.submitButton}
              />
            </View>
          ) : (
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

              <Button 
                title="Enviar Link" 
                onPress={handleSubmit(onSubmit)} 
                loading={isLoading} 
                style={styles.submitButton}
              />
            </View>
          )}

          {!isSuccess && (
            <View style={styles.footer}>
              <Text style={styles.footerText}>Lembraste-te da senha? </Text>
              <Link href="/(auth)/login" asChild>
                <Text style={styles.footerLink}>Entrar</Text>
              </Link>
            </View>
          )}
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
  successContainer: {
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  successTitle: {
    fontSize: theme.fontSizes.subtitle,
    fontWeight: 'bold',
    color: theme.colors.success,
    marginBottom: theme.spacing.sm,
  },
  successMessage: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
  },
});
