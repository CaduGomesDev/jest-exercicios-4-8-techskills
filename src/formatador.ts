export function formatarNome(nome: string): string {
  const limpo = nome.trim();
  if (limpo === '') {
    return '';
  }
  return limpo.charAt(0).toUpperCase() + limpo.slice(1).toLowerCase();
}
