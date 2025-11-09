import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Headerをインポート

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "竹田 翔真 ポートフォリオサイト", // サイトのタイトル
  description: "Web Developer - Shoma Takeda's Portfolio Page", // サイトの説明
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header /> {/* ここにヘッダーを配置 */}
        {children}
      </body>
    </html>
  );
}