import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) console.log("ds");
  const messages = (await import(`./lang/${locale}.json`)).default;

  return {
    messages,
  };
});
