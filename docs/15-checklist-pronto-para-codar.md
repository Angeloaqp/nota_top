# 15 - Checklist Pronto Para Codar

## Objetivo

Usar este checklist antes de iniciar a implementacao com agentes no Antigravity.

## Documentacao

- [x] Visao do produto definida.
- [x] Publicos definidos.
- [x] Separacao app mobile/web definida.
- [x] MVP sem pagamentos definido.
- [x] Regras de verificacao definidas.
- [x] Rotas mobile definidas.
- [x] Modelo de dados definido.
- [x] Backlog por epico definido.
- [x] Guia visual definido.
- [x] Guia de agentes definido.
- [x] Prompt mestre criado.

## Decisoes Fechadas Para Codar

- [x] Nome publico do app: NotaTop.
- [x] Slug Expo: `notatop`.
- [x] Package Android inicial: `com.notatop.app`.
- [x] Bundle identifier iOS inicial: `com.notatop.app`.
- [x] Gestor de pacotes do MVP: `npm`.
- [x] Faculdade piloto placeholder: `Faculdade Piloto NotaTop`.
- [x] Teste inicial prioritario: Android via emulator ou Expo Go.
- [x] iOS sera validado depois por Expo Go em iPhone fisico ou EAS Build.

## Ainda Necessario Antes De Codar Com Backend Real

- [ ] Criar projeto Supabase ou confirmar projeto existente.
- [ ] Obter `SUPABASE_URL`.
- [ ] Obter `SUPABASE_ANON_KEY`.
- [ ] Confirmar se o computador tem Node.js instalado.
- [ ] Confirmar se Android Emulator ou Expo Go esta disponivel.

## Ordem Para Antigravity

1. Entregar `AGENTS.md` ao agente.
2. Pedir para implementar Epico 0.
3. Validar que app abre.
4. Pedir Supabase schema.
5. Validar migrations.
6. Pedir Epico 1.
7. Avancar um epico por vez.

## Primeiro Pedido Recomendado Para O Antigravity

```txt
Leia AGENTS.md e docs/14-prompt-mestre-ia.md. Depois implemente apenas o Epico 0 do docs/11-backlog-implementacao.md: bootstrap do projeto mobile. Nao implemente pagamento, painel web ou funcionalidades fora do Epico 0.
```

## Criterio Para Comecar O Epico 1

- App Expo criado.
- Expo Router funcionando.
- Supabase client configurado.
- Query Client configurado.
- Componentes base criados.
- Tema visual criado.
- TypeScript sem erros.
