import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./lib/i18n/config";
import { headers } from "next/headers";
type LocaleType = (typeof locales)[number];
export default getRequestConfig(async () => {
  const localeHeader = await headers();
  const locale = localeHeader.get("X-NEXT-INTL-LOCALE") || "de";
  if (!locales.includes(locale as LocaleType)) notFound();
  const messages = (await import(`./lang/${locale}.json`)).default;

  return {
    messages,
    locale,
  };
});
