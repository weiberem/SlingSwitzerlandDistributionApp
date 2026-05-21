import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://slingaircraftswitzerland.ch";

  const localePages = locales.flatMap((lang) => [
    {
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/${lang}/konfigurator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]);

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...localePages,
  ];
}
