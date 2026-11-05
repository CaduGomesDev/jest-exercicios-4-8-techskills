# Exercício 8 - Cobertura de código

Relatórios completos em [cobertura/antes.txt](cobertura/antes.txt) e [cobertura/depois.txt](cobertura/depois.txt).

## Antes e depois

| Arquivo | Stmts | Branch | Funcs | Lines |
|---|---|---|---|---|
| Todos (antes) | 90% | 62.5% | 83.33% | 90% |
| Todos (depois) | 100% | 100% | 100% | 100% |
| usuarioService.ts (antes) | 60% | 25% | 66.66% | 60% |
| usuarioService.ts (depois) | 100% | 100% | 100% | 100% |

O "antes" foi medido com o `usuarioService` só com o teste do caminho feliz. `app.ts`, `divide.ts` e `formatador.ts` já estavam em 100%.

## Lacunas

- `buscarUsuarioAsync` não tinha nenhum teste (linhas 19-20).
- Menor cobertura de ramos: `usuarioService.ts`, com 25%. Ficou de fora o lado do `?? null` em que o repositório devolve nada (`null` ou `undefined`), nos dois métodos.
- Testes acrescentados: usuário inexistente, repositório devolvendo `undefined`, versão assíncrona, `null` assíncrono e falha de conexão.

## Piso de cobertura

Configurado no `jest.config.js`: 90% de instruções, linhas e funções e 80% de ramos. O `server.ts` fica de fora porque só sobe a aplicação.

## Perguntas

**Instruções x ramos:** instruções contam linhas executadas; ramos contam cada caminho de um `if`, `else`, ternário ou `??`. Testar só `divide(10, 2)` cobre todas as instruções do caminho feliz, mas só 50% dos ramos.

**100% significa código sem defeito?** Não. Mede o que foi executado, não o que foi verificado. Um teste sem `expect` cobre a linha e não prova nada. Também não prova que a regra de negócio está certa.

**O que a cobertura nunca aponta?** Casos que ninguém pensou em testar, requisitos esquecidos, bugs de integração, concorrência, desempenho e testes com asserções fracas.

**Por que excluir arquivos?** Arquivos sem lógica, como o `server.ts` que só chama `listen`, puxam o número para baixo sem dizer nada útil. Contar só código que merece teste deixa a métrica mais honesta.

**Qual piso?** 90% de instruções e 80% de ramos. Alto o bastante para o projeto pequeno acusar esquecimentos, sem empurrar ninguém a escrever teste só para bater número. Em projeto maior eu começaria mais baixo e subiria aos poucos.
