import { formatarNome } from '../formatador';

describe('formatarNome', () => {
  it.each([
    ['maria', 'Maria'],
    [' joão ', 'João'],
    ['ANA', 'Ana'],
  ])('deve formatar %j como %j', (entrada, esperado) => {
    expect(formatarNome(entrada)).toBe(esperado);
  });

  it('deve retornar texto vazio quando receber texto vazio', () => {
    expect(formatarNome('')).toBe('');
  });

  it('deve retornar texto vazio quando receber só espaços', () => {
    expect(formatarNome('   ')).toBe('');
  });
});
