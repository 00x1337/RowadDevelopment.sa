import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "شركة رواد التعمير والتنمية للمقاولات | Rowad Contracting",
  description: "شركة رواد التعمير والتنمية للمقاولات العامة - ريادة تمتد منذ 2007 في الإنشاءات، البنية التحتية، وتجهيز مشاعر ومخيمات الحج لضيوف الرحمن بمكة المكرمة والمشاعر المقدسة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${cairo.className} bg-slate-900 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
