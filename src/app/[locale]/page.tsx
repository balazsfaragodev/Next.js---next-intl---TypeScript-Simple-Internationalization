import LocaleSwitcher from "@/components/localeSwitcher";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LocaleSwitcher />
      {t("getStarted")}
      <Link href="/about">{t("about")}</Link>
    </main>
  );
}
