import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import MainLayout from "../../components/templates/MainLayout/MainLayout.component";
import "../globals.css";
import { headers } from "next/headers";
import { getLocale } from "@/src/lib/i18n/config";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <MainLayout>{children}</MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
