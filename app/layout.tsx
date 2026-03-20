import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saurabh Pandey | AI & Data Engineer",
  description: "Building scalable data platforms, CDC pipelines, and AI-powered data systems. Experienced in designing high-performance data solutions across multi-cloud environments.",
  keywords: ["Data Engineer", "AI Engineer", "GCP", "AWS", "BigQuery", "CDC Pipelines", "RAG", "Machine Learning"],
  authors: [{ name: "Saurabh Pandey" }],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Saurabh Pandey | AI & Data Engineer",
    description: "Building scalable data platforms, CDC pipelines, and AI-powered data systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        {children}
      </body>
    </html>
  );
}
