"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const alternativeLocale = locale === "en" ? "hu" : "en";

  const switchLocale = () => {
    router.push(pathName, { locale: alternativeLocale });
  };

  return (
    <div className="rounded-lg border bg-white px-4 py-2 text-sm text-black  dark:border-neutral-800 dark:bg-transparent dark:text-white ">
      <button onClick={switchLocale} className="">
        {locale}
      </button>
    </div>
  );
}
