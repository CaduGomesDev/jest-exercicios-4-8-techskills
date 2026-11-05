import request from 'supertest';
import app from '../app';

describe('GET /ping', () => {
  it('deve retornar status 200', async () => {
    const response = await request(app).get('/ping');

    expect(response.status).toBe(200);
  });

  it('deve retornar ok no corpo da resposta', async () => {
    const response = await request(app).get('/ping');

    expect(response.body).toEqual({ status: 'ok' });
  });

  it('deve responder com content-type JSON', async () => {
    const response = await request(app).get('/ping');

    expect(response.headers['content-type']).toMatch(/json/);
  });
});

describe('rotas não registradas', () => {
  it('deve retornar 404 em uma rota inexistente', async () => {
    const response = await request(app).get('/rota-inexistente');

    expect(response.status).toBe(404);
  });

  it('deve retornar 404 em POST /ping', async () => {
    const response = await request(app).post('/ping');

    expect(response.status).toBe(404);
  });
});
