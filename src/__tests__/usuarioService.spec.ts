import { criarUsuarioService, Repositorio, Usuario } from '../usuarioService';

describe('usuarioService', () => {
  const usuarioMock: Usuario = { id: 1, nome: 'Maria', email: 'maria@exemplo.com' };
  let repositorio: { buscarPorId: jest.Mock; buscarPorIdAsync: jest.Mock };

  beforeEach(() => {
    jest.clearAllMocks();
    repositorio = {
      buscarPorId: jest.fn(),
      buscarPorIdAsync: jest.fn(),
    };
  });

  const criarService = () => criarUsuarioService(repositorio as unknown as Repositorio);

  describe('buscarUsuario', () => {
    it('deve retornar o usuário devolvido pelo repositório', () => {
      repositorio.buscarPorId.mockReturnValue(usuarioMock);
      const service = criarService();

      const resultado = service.buscarUsuario(1);

      expect(resultado).toEqual(usuarioMock);
    });

    it('deve chamar o repositório com o id correto', () => {
      repositorio.buscarPorId.mockReturnValue(usuarioMock);
      const service = criarService();

      service.buscarUsuario(42);

      expect(repositorio.buscarPorId).toHaveBeenCalledWith(42);
    });

    it('deve retornar null quando o usuário não existir', () => {
      repositorio.buscarPorId.mockReturnValue(null);
      const service = criarService();

      const resultado = service.buscarUsuario(99);

      expect(resultado).toBeNull();
    });

    it('deve chamar o repositório exatamente uma vez', () => {
      repositorio.buscarPorId.mockReturnValue(usuarioMock);
      const service = criarService();

      service.buscarUsuario(1);

      expect(repositorio.buscarPorId).toHaveBeenCalledTimes(1);
    });

    it('deve retornar null quando o repositório devolver undefined', () => {
      repositorio.buscarPorId.mockReturnValue(undefined);
      const service = criarService();

      expect(service.buscarUsuario(5)).toBeNull();
    });
  });

  describe('buscarUsuarioAsync', () => {
    it('deve resolver com o usuário do repositório', async () => {
      repositorio.buscarPorIdAsync.mockResolvedValue(usuarioMock);
      const service = criarService();

      const resultado = await service.buscarUsuarioAsync(1);

      expect(resultado).toEqual(usuarioMock);
      expect(repositorio.buscarPorIdAsync).toHaveBeenCalledWith(1);
      expect(repositorio.buscarPorIdAsync).toHaveBeenCalledTimes(1);
    });

    it('deve resolver com null quando o usuário não existir', async () => {
      repositorio.buscarPorIdAsync.mockResolvedValue(null);
      const service = criarService();

      await expect(service.buscarUsuarioAsync(99)).resolves.toBeNull();
    });

    it('deve propagar o erro quando o repositório falhar', async () => {
      repositorio.buscarPorIdAsync.mockRejectedValue(new Error('falha de conexão'));
      const service = criarService();

      await expect(service.buscarUsuarioAsync(1)).rejects.toThrow('falha de conexão');
    });
  });
});
