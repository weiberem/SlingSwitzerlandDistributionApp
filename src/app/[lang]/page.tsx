import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import HomeClient from "./HomeClient";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) notFound();
  const dict = await getDictionary(lang as Locale);
  return <HomeClient lang={lang as Locale} dict={dict} />;
}
