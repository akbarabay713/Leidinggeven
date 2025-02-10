import { getRequestConfig, getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./config";
import { useLocale } from "next-intl";
export default getRequestConfig(async () => {
  const locale = useLocale();
  // const locale = await getLocale(); // Use getLocale() to get the current locale

  if (!locales.includes(locale as any)) notFound();

  const messages = (await import(`./lang/${locale}.json`)).default;

  return {
    locale, // Explicitly return locale
    messages,
  };
});
