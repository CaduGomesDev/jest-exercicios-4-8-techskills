export interface Usuario {
  id: number;
  nome: string;
  email: string;
}

export interface Repositorio {
  buscarPorId(id: number): Usuario | null;
  buscarPorIdAsync(id: number): Promise<Usuario | null>;
}

export function criarUsuarioService(repositorio: Repositorio) {
  return {
    buscarUsuario(id: number): Usuario | null {
      return repositorio.buscarPorId(id) ?? null;
    },

    async buscarUsuarioAsync(id: number): Promise<Usuario | null> {
      const usuario = await repositorio.buscarPorIdAsync(id);
      return usuario ?? null;
    },
  };
}
