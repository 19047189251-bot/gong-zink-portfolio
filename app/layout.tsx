import type { Metadata } from "next";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zink 作品档案",
    template: "%s · Zink",
  },
  description: "动画作者、AIGC 创作者与分镜师的个人作品档案。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="theme-paper">
      <body className="theme-paper">
        <SiteHeader />
        {children}
        <footer className="site-footer page-shell" id="info">
          <p>Zink 作品档案</p>
          <p>© {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}
