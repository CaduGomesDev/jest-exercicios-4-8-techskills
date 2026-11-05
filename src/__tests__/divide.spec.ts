import { divide } from '../divide';

describe('divide', () => {
  it('deve retornar 5 quando dividir 10 por 2', () => {
    const resultado = divide(10, 2);

    expect(resultado).toBe(5);
  });

  it('deve lançar erro quando o divisor for zero', () => {
    expect(() => divide(10, 0)).toThrow();
  });

  describe('variações do toThrow', () => {
    it('aceita qualquer erro sem argumento', () => {
      expect(() => divide(10, 0)).toThrow();
    });

    it('confere se a mensagem contém o texto', () => {
      expect(() => divide(10, 0)).toThrow('divisão por zero');
    });

    it('confere se a mensagem casa com a expressão', () => {
      expect(() => divide(10, 0)).toThrow(/zero/);
    });

    it('confere se o erro é do tipo Error', () => {
      expect(() => divide(10, 0)).toThrow(Error);
    });
  });

  it('deve retornar -5 quando dividir -10 por 2', () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  it('deve retornar 0 quando dividir 0 por 5', () => {
    expect(divide(0, 5)).toBe(0);
  });

  it('deve retornar 3.5 quando dividir 7 por 2', () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  it('não deve lançar erro quando dividir 10 por 5', () => {
    expect(() => divide(10, 5)).not.toThrow();
  });
});
