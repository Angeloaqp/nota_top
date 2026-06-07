# 12 - Guia Visual E UX

## Objetivo

Definir a direcao visual e de experiencia do app NotaTop para que o MVP pareca profissional e adequado a uma faculdade.

## Tom Visual

O NotaTop deve parecer:

- academico;
- confiavel;
- moderno;
- organizado;
- utilitario;
- facil de usar.

Nao deve parecer:

- app de apostas;
- rede social informal;
- marketplace agressivo;
- app infantil;
- pagina de marketing.

## Paleta Inicial

Usar uma paleta limpa, sem depender de uma unica cor.

```ts
export const colors = {
  background: '#F7F8FA',
  surface: '#FFFFFF',
  surfaceAlt: '#EEF2F6',
  text: '#18202A',
  textMuted: '#64748B',
  primary: '#2563EB',
  primaryDark: '#1E40AF',
  accent: '#0F766E',
  warning: '#B45309',
  danger: '#B91C1C',
  success: '#15803D',
  border: '#D8DEE8',
};
```

## Tipografia

Usar fonte padrao do sistema no MVP.

Escala:

- titulo grande: 28;
- titulo de tela: 22;
- subtitulo: 18;
- corpo: 16;
- texto secundario: 14;
- legenda: 12.

Nao escalar fonte por largura do ecran.

## Componentes Base

### Button

Variantes:

- primary;
- secondary;
- ghost;
- danger.

Estados:

- normal;
- loading;
- disabled.

### Badge

Usos:

- Aluno Verificado;
- Nota Validada;
- Pendente;
- Rejeitado;
- Aprovado.

### Card

Usar para itens repetidos, como post, disciplina e submissao.

Raio:

- 8px no maximo.

### TextField

Estados:

- normal;
- focado;
- erro;
- desativado.

### EmptyState

Usar quando listas estiverem vazias.

Exemplos:

- "Ainda nao existem conteudos nesta disciplina."
- "Voce ainda nao enviou pedidos de verificacao."

## Regras De UX

### Verificacao

Se o aluno nao estiver verificado, explicar de forma direta:

> Para publicar conteudos, a faculdade precisa confirmar que voce e aluno.

### Publicacao

O fluxo deve parecer guiado, com passos:

1. ficheiro;
2. dados;
3. comprovativo;
4. revisao.

### Marketplace

Cada card de conteudo deve mostrar:

- titulo;
- disciplina;
- nota;
- tipo;
- autor verificado;
- indicador de preview.

### Detalhe Do Conteudo

O botao principal no MVP:

> Desbloquear demo

Nao usar "Comprar" enquanto pagamentos nao forem implementados.

### Visualizador

A marca d'agua deve aparecer de forma clara mas nao impedir leitura.

Exemplo:

```txt
NotaTop - acesso de maria@email.com
```

## Copy Padrao

### Verificacao Pendente

Titulo:

> Verificacao em analise

Texto:

> A faculdade ainda esta a confirmar os seus dados escolares. Quando for aprovado, voce podera publicar conteudos.

### Verificacao Aprovada

Titulo:

> Aluno verificado

Texto:

> A faculdade confirmou os seus dados. Agora voce pode publicar conteudos com notas validadas.

### Publicacao Bloqueada

Titulo:

> Verificacao necessaria

Texto:

> Apenas alunos verificados podem publicar conteudos no NotaTop.

### Submissao Enviada

Titulo:

> Conteudo enviado para analise

Texto:

> A faculdade precisa validar a nota e o material antes da publicacao.

## Acessibilidade

- botoes devem ter area de toque confortavel;
- texto deve ter contraste suficiente;
- inputs devem ter labels visiveis;
- erros devem explicar o que corrigir;
- nao depender apenas de cor para status.

## Layout

- usar SafeAreaView;
- evitar elementos sobrepostos;
- usar FlatList para listas grandes;
- nao usar ScrollView para listas de marketplace;
- manter espacamento consistente.
