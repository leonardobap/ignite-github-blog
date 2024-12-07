import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export function dateFormatter(dateISO: string): string {
  const formattedDate = formatDistanceToNow(parseISO(dateISO), {
    addSuffix: true,
    locale: ptBR,
  });

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}
