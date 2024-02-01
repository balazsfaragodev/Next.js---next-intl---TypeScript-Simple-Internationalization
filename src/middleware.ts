import createMiddleware from "next-intl/middleware";
import { locales, pathnames, defaultLocale } from "./navigation";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  pathnames,
  defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(hu|en)/:path*"],
};
