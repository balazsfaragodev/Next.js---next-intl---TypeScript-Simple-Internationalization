import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/localeSwitcher";
import { Link } from "@/navigation";

export default function About() {
  const t = useTranslations("About");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LocaleSwitcher />
      {t("aboutText")}
      <Link href="/">{t("home")}</Link>
    </main>
  );
}
