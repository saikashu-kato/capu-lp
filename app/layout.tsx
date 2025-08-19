import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "株式会社Capu",
  description:
    "私たちは「世の中に本当に必要だ」と信じた体験だけをつくる。革新的なアイデアと確かな技術力で、女子向けエンタメマッチングサービス「Capu」を展開しています。",
  keywords: [
    "Capu",
    "エンタメ",
    "マッチング",
    "女子向け",
    "アプリ",
    "スタートアップ",
    "テクノロジー",
    "株式会社Capu",
  ],
  authors: [{ name: "株式会社Capu" }],
  creator: "株式会社Capu",
  publisher: "株式会社Capu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://capu-company.com"),
  openGraph: {
    title: "株式会社Capu | 世の中に本当に必要な体験をつくる",
    description:
      "私たちは「世の中に本当に必要だ」と信じた体験だけをつくる。革新的なアイデアと確かな技術力で、女子向けエンタメマッチングサービス「Capu」を展開しています。",
    url: "https://capu-company.com",
    siteName: "株式会社Capu",
    images: [
      {
        url: "/capu-logo.png",
        width: 1200,
        height: 630,
        alt: "株式会社Capu ロゴ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社Capu | 世の中に本当に必要な体験をつくる",
    description:
      "私たちは「世の中に本当に必要だ」と信じた体験だけをつくる。革新的なアイデアと確かな技術力で、女子向けエンタメマッチングサービス「Capu」を展開しています。",
    images: ["/capu-logo.png"],
    creator: "@capu_official",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://capu-company.com/#organization",
                  name: "株式会社Capu",
                  url: "https://capu-company.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://capu-company.com/capu-logo.png",
                    width: 1200,
                    height: 630,
                  },
                  description:
                    "私たちは「世の中に本当に必要だ」と信じた体験だけをつくる。革新的なアイデアと確かな技術力で、女子向けエンタメマッチングサービス「Capu」を展開しています。",
                  foundingDate: "2025-09-01",
                  industry: "Technology",
                  sameAs: ["https://www.capu-app.com/"],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://capu-company.com/#website",
                  url: "https://capu-company.com",
                  name: "株式会社Capu",
                  description:
                    "私たちは「世の中に本当に必要だ」と信じた体験だけをつくる。革新的なアイデアと確かな技術力で、女子向けエンタメマッチングサービス「Capu」を展開しています。",
                  publisher: {
                    "@id": "https://capu-company.com/#organization",
                  },
                  inLanguage: "ja-JP",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://capu-company.com/#webpage",
                  url: "https://capu-company.com",
                  name: "株式会社Capu | 世の中に本当に必要な体験をつくる",
                  isPartOf: {
                    "@id": "https://capu-company.com/#website",
                  },
                  about: {
                    "@id": "https://capu-company.com/#organization",
                  },
                  description:
                    "私たちは「世の中に本当に必要だ」と信じた体験だけをつくる。革新的なアイデアと確かな技術力で、女子向けエンタメマッチングサービス「Capu」を展開しています。",
                  inLanguage: "ja-JP",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Capu",
                  description: "業界初の女子向けエンタメマッチングサービス",
                  applicationCategory: "EntertainmentApplication",
                  operatingSystem: "iOS, Android",
                  url: "https://www.capu-app.com/",
                  author: {
                    "@id": "https://capu-company.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
