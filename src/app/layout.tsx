import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rowaddevelopment.sa"),
  title: { default: "رواد التعمير والتنمية | شركة مقاولات في مكة", template: "%s | رواد التعمير والتنمية" },
  description: "شركة رواد التعمير والتنمية للمقاولات في مكة المكرمة. تنفيذ الإنشاءات والبنية التحتية وتجهيز مخيمات ومرافق الحجاج في المشاعر المقدسة منذ 2007م.",
  keywords: ["شركة مقاولات في مكة", "مقاولات مكة المكرمة", "تجهيز مخيمات الحج", "المشاعر المقدسة", "البنية التحتية مكة", "إنشاءات", "رواد التعمير والتنمية"],
  authors: [{ name: "رواد التعمير والتنمية" }],
  creator: "رواد التعمير والتنمية",
  alternates: { canonical: "https://rowaddevelopment.sa" },
  openGraph: { type: "website", locale: "ar_SA", url: "https://rowaddevelopment.sa", siteName: "رواد التعمير والتنمية", title: "رواد التعمير والتنمية | مقاولات وإنشاءات في مكة", description: "خبرة سعودية في الإنشاءات والبنية التحتية وتجهيز مشاريع المشاعر المقدسة منذ 2007م.", images: [{ url: "/images/rowad-hero.png", width: 1536, height: 1024, alt: "مشروع إنشائي لشركة رواد التعمير والتنمية" }] },
  twitter: { card: "summary_large_image", title: "رواد التعمير والتنمية | مقاولات وإنشاءات في مكة", description: "خبرة سعودية في الإنشاءات والبنية التحتية وتجهيز مشاريع المشاعر المقدسة منذ 2007م.", images: ["/images/rowad-hero.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/rowad-icon.svg", shortcut: "/rowad-icon.svg", apple: "/rowad-icon.svg" },
};

const organizationSchema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: "رواد التعمير والتنمية", alternateName: "Rowad Contracting & Development", url: "https://rowaddevelopment.sa", logo: "https://rowaddevelopment.sa/rowad-icon.svg", image: "https://rowaddevelopment.sa/images/rowad-hero.png", description: "شركة مقاولات وإنشاءات في مكة المكرمة متخصصة في البنية التحتية وتجهيز مشاريع المشاعر المقدسة.", foundingDate: "2007", telephone: "+966701832288", address: { "@type": "PostalAddress", addressLocality: "مكة المكرمة", addressCountry: "SA" }, areaServed: { "@type": "Country", name: "المملكة العربية السعودية" }, serviceType: ["المقاولات العامة", "الإنشاءات", "البنية التحتية", "تجهيز مخيمات الحج"] };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${cairo.className} bg-slate-900 text-slate-100 antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {children}
      </body>
    </html>
  );
}
