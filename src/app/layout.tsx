import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "마도거래소 | 뉴스를 읽고, 시장을 예측하라",
  description:
    "실제 역사적 경제 사건을 판타지 세계관으로 재해석한 스토리 기반 모의투자 서비스",
  openGraph: {
    title: "마도거래소",
    description: "뉴스를 읽고, 시장을 예측하라",
    url: "https://madotrade.com",
    siteName: "마도거래소",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-bg-primary text-text-primary font-['Pretendard_Variable',sans-serif]">
        {children}
      </body>
    </html>
  );
}
