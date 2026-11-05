# Exercício 7 - Simulando banco de dados

`criarUsuarioService` recebe o repositório de fora e os testes o substituem por `jest.fn()`. Nenhum banco real é usado.

Cenários: usuário encontrado (retorno e id correto), usuário inexistente (`null`), chamada única, repositório devolvendo `undefined`, versão assíncrona com `mockResolvedValue` e falha de conexão com `mockRejectedValue`. O `beforeEach` roda `jest.clearAllMocks()` e recria os mocks, então cada teste começa limpo.

## Perguntas

**Retorno x chamada:** verificar o retorno prova que o serviço devolveu o resultado certo. Verificar a chamada prova que ele falou com o repositório do jeito esperado (id certo, quantidade certa de vezes). Um não substitui o outro: o serviço poderia devolver o valor certo sem nem consultar o repositório.

**Por que receber o repositório?** Porque quem cria a dependência controla ela. Recebendo de fora, o teste entrega um mock e o serviço nem percebe. Se criasse internamente, o teste dependeria de um banco de verdade.

**O que o mock não garante?** Que o banco real funciona: conexão, query correta, schema, tipos retornados, índices e falhas reais. O mock só devolve o que mandamos devolver. Um teste de integração com o banco é que pega esse tipo de problema.
