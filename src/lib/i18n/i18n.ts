import { getRequestConfig, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./config";

export default getRequestConfig(async () => {
  const locale = await setRequestLocale;
  if (!locales.includes(locale as any)) notFound();
  const messages = (await import(`./lang/${locale}.json`)).default;

  return {
    messages,
  };
});
