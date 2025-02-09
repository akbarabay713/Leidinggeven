import createMiddleware from "next-intl/middleware";
import { locales } from "./lib/i18n/config";

export default createMiddleware({
  locales,
  defaultLocale: "de",
});

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
