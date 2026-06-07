// app/(auth)/register.tsx
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

const registerSchema = z.object({
  fullName: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { fullName: '', email: '', password: '' },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      await authService.signUp(data.email, data.password, data.fullName);
      
      // O Supabase, por padrão, retorna a sessão se email confirmation estiver desligado.
      // Caso esteja ligado, precisamos avisar o utilizador.
      Alert.alert(
        'Conta criada', 
        'Verifica o teu email para confirmares a conta, ou faz login se não for necessário confirmação.'
      );
      
      // Se tiver sessão ele redirecionará automaticamente, caso contrário volta para o login.
      router.replace('/(auth)/login');
    } catch (error: any) {
      Alert.alert('Erro ao registar', error.message || 'Ocorreu um erro ao criar a conta.');
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
            <Text style={styles.title}>Criar Conta</Text>
            <Text style={styles.subtitle}>Junta-te à comunidade NotaTop e partilha os teus conhecimentos.</Text>
          </View>

          <View style={styles.form}>
            <Controller
              control={control}
              name="fullName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  label="Nome Completo"
                  placeholder="João Silva"
                  autoCapitalize="words"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.fullName?.message}
                />
              )}
            />

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
                  placeholder="Mínimo 8 caracteres"
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.password?.message}
                />
              )}
            />

            <Button 
              title="Criar Conta" 
              onPress={handleSubmit(onSubmit)} 
              loading={isLoading} 
              style={styles.submitButton}
            />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Já tens uma conta? </Text>
            <Link href="/(auth)/login" asChild>
              <Text style={styles.footerLink}>Entrar</Text>
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
