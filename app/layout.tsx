import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://rikkibadr.github.io/hekayet-jabal";
const title = "حكاية جبل | القعدة إلها حكاية";
const description = "مطعم وتراس حكاية جبل في مساكن برزة، دمشق. مشاوي عالفحم، قعدة تحت القمر، ومنطقة ألعاب للعيلة.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ["حكاية جبل", "مطعم دمشق", "مساكن برزة", "مشاوي", "تراس", "مطعم عائلي"],
  openGraph: {
    title,
    description,
    locale: "ar_SY",
    type: "website",
    url: siteUrl,
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "حكاية جبل — القعدة إلها حكاية" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
