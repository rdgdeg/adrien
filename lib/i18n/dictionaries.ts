import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries-fr";
import { fr } from "./dictionaries-fr";
import { nl } from "./dictionaries-nl";
import { en } from "./dictionaries-en";

export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = { fr, nl, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.fr;
}
