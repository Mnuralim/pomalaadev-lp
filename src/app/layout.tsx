import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { BackToTop } from "@/components/layout/back-to-top";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const siteUrl = "https://pomalaa.dev";
const title = "Pomalaa Dev | Aplikasi, CV Lamaran, dan Urusan Pajak di Pomalaa";
const description =
  "Jasa digital dari Pomalaa untuk perusahaan, UMKM, mahasiswa, dan pencari kerja: aplikasi web dan Android, CV dan surat lamaran, aktivasi Coretax, sampai lapor SPT.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Pomalaa Dev",
  },
  description,
  keywords: [
    "jasa pembuatan website",
    "jasa pembuatan aplikasi",
    "sistem informasi perusahaan",
    "aplikasi bisnis custom",
    "jasa website Kolaka",
    "jasa website Sulawesi Tenggara",
    "jasa aplikasi Android Kolaka",
    "jasa pembuatan CV ATS",
    "jasa lapor SPT Coretax",
    "pendampingan proyek kuliah IT",
    "Pomalaa Dev",
  ],
  authors: [{ name: "Pomalaa Dev" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Pomalaa Dev",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pomalaa Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${bricolage.variable} ${geist.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-background text-on-background">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
