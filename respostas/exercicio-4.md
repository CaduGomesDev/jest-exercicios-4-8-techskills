# Exercício 4 - Testando erros

`divide` tem dez testes: caminho de sucesso, caminho de erro, as quatro variações do `toThrow` e os casos da tabela (-10/2, 0/5, 7/2 e 10/5 sem erro).

## Perguntas

**Por que o expect recebe uma função?** Porque o erro é lançado na hora em que `divide(10, 0)` é chamada. Se a chamada ficar dentro do `expect`, a exceção estoura antes do Jest receber qualquer coisa e a suíte quebra. Passando `() => divide(10, 0)`, o Jest executa a função dentro de um bloco protegido e captura o erro.

**E se a função não lançar erro e o teste usar toThrow?** O teste falha, avisando que esperava uma exceção e nada foi lançado. É exatamente isso que queremos: se alguém remover a validação, o teste acusa.

**Por que verificar a mensagem?** Um `toThrow()` sem argumento aceita qualquer erro, então o teste passa mesmo se a função quebrar por outro motivo (um `TypeError`, por exemplo). Com a mensagem ou a regex, o teste só passa pelo motivo certo.

**Quando usar not.toThrow?** Quando o ponto do teste é garantir que um caso válido não explode, como `divide(10, 5)` ou uma entrada de fronteira que poderia ser confundida com inválida.

## As quatro variações

| Forma | O que exige |
|---|---|
| `toThrow()` | qualquer erro |
| `toThrow('divisão por zero')` | mensagem que contenha o texto |
| `toThrow(/zero/)` | mensagem que case com a expressão |
| `toThrow(Error)` | erro do tipo `Error` |
