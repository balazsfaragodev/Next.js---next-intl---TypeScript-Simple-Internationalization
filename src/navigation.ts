import {
  Pathnames,
  createLocalizedPathnamesNavigation,
  //createSharedPathnamesNavigation,
} from "next-intl/navigation";

export const defaultLocale = "en";

export const locales = ["en", "hu"] as const;

export const pathnames = {
  "/": "/",
  "/about": {
    en: "/about",
    hu: "/rolunk",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  //createSharedPathnamesNavigation({ locales });
  createLocalizedPathnamesNavigation({ locales, pathnames });
