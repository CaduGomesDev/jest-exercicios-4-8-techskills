# Exercício 6 - Teste de integração com API REST

`app.ts` monta o Express e exporta o app. `server.ts` é o único que chama `listen`. A rota `/ping` devolve `{ status: 'ok' }` e os testes usam o `supertest` direto sobre o app, sem abrir porta.

Casos cobertos: status 200, corpo igual a `{ status: 'ok' }`, content-type JSON, `GET /rota-inexistente` com 404 e `POST /ping` com 404.

## Perguntas

**Por que é integração e não unitário?** Porque o teste passa por várias peças juntas: roteamento do Express, middleware de JSON, a rota e a serialização da resposta HTTP. Um unitário olharia uma função isolada.

**E se o app.listen estivesse no app.js?** Cada `require` do app, inclusive o do teste, tentaria subir o servidor na porta 3000. A porta fica ocupada, o Jest pode não encerrar (handle aberto) e uma segunda suíte que importe o app daria erro de porta em uso. Separando, o teste usa o app sozinho.

**Por que toEqual e não toBe no corpo?** `toBe` compara por referência (`Object.is`). O corpo da resposta é um objeto novo, nunca a mesma referência do literal do teste, então `toBe` falharia mesmo com conteúdo idêntico. `toEqual` compara o conteúdo.
