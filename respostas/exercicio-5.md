# Exercício 5 - Estrutura de arquivos

Duas funções em arquivos separados (`divide.ts` e `formatador.ts`), cada uma com seu arquivo de teste dentro de `src/__tests__`.

```
src/
  divide.ts
  formatador.ts
  __tests__/
    divide.spec.ts
    formatador.spec.ts
```

**Convenção escolhida:** pasta `__tests__` com arquivos `.spec.ts`. Mantém o código de produção separado dos testes e já deixa o projeto pronto para crescer, já que a pasta `src` não fica misturada com arquivos de teste conforme novas funções aparecem. O `testMatch` do `jest.config.js` aponta para `**/__tests__/**/*.spec.ts`.

Dentro de `__tests__` o import sobe um nível: `import { divide } from '../divide'`.

## Saída do npm test

```
PASS src/__tests__/divide.spec.ts
PASS src/__tests__/formatador.spec.ts

Test Suites: 2 passed, 2 total
```
