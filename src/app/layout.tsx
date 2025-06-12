import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../styles/global.scss";
import styles from "../styles/Layout.module.scss";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bin Hub - Ứng dụng âm nhạc",
  description: "Khám phá, nghe và quản lý âm nhạc yêu thích của bạn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var isDark = theme ? theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <div className={styles.layout}>
          <Header />
          <Sidebar />
          <main className={styles.main}>
            <div className={styles.content}>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
