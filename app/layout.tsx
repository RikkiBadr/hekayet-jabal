import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3100";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "حكاية جبل | القعدة إلها حكاية";
  const description = "مطعم وتراس حكاية جبل في مساكن برزة، دمشق. مشاوي عالفحم، قعدة تحت القمر، ومنطقة ألعاب للعيلة.";

  return {
    metadataBase: base,
    title,
    description,
    keywords: ["حكاية جبل", "مطعم دمشق", "مساكن برزة", "مشاوي", "تراس", "مطعم عائلي"],
    openGraph: {
      title,
      description,
      locale: "ar_SY",
      type: "website",
      images: [{ url: new URL("/og.png", base).toString(), width: 1200, height: 630, alt: "حكاية جبل — القعدة إلها حكاية" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og.png", base).toString()],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
