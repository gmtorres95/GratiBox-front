export default function convertToDate(string) {
  const date = new Date(string);
  return date.toLocaleDateString('pt-BR').split(' ')[0];
}