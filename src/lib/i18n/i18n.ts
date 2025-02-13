import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./config";
import { useLocale } from "next-intl";
type LocaleType = (typeof locales)[number];
export default getRequestConfig(async () => {
  const locale = useLocale();

  if (!locales.includes(locale as LocaleType)) notFound();

  const messages = (await import(`./lang/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
