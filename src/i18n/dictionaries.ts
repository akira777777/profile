import type { Locale } from "./config";
import { ru, type Messages } from "./messages/ru";
import { en } from "./messages/en";

const dictionaries: Record<Locale, Messages> = {
  ru,
  en,
};

export function getDictionary(locale: Locale): Messages {
  return dictionaries[locale];
}

export type { Messages };
