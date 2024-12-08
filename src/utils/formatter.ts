import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export function dateFormatter(dateISO: string): string {
  try {
    const parsedDate = parseISO(dateISO);

    const formattedDate = formatDistanceToNow(parsedDate, {
      addSuffix: true,
      locale: ptBR,
    });

    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  } catch {
    return "Erro ao formatar a data";
  }
}
