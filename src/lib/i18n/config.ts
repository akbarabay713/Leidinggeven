import { LocalePrefix, Pathnames } from "next-intl/routing";
import { headers } from "next/headers";
export const locales = ["en", "de"] as const;
export type Locales = typeof locales;
export const pathnames: Pathnames<Locales> = {
  "/": "/",
  "/pathnames": "/pathnames",
};
export const localesPrefix: LocalePrefix<Locales> = "always";

export async function getLocale() {
  const localeHeader = await headers(); // ✅ Menunggu headers() sebelum digunakan
  return localeHeader.get("X-NEXT-INTL-LOCALE") || "en";
}
