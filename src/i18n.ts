import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./lib/i18n/config";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  const localeHeader = await headers(); // ✅ Await headers() agar tidak error
  const locale = localeHeader.get("X-NEXT-INTL-LOCALE") || "de";
  if (!locales.includes(locale as any)) notFound();
  const messages = (await import(`./lang/${locale}.json`)).default;

  return {
    messages,
    locale,
  };
});
