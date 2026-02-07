import './globals.css';
import { Inter } from 'next/font/google';
import ClientLayout from './client-layout';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReduxProvider } from './provider';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] });

// Professional Metadata: Prioritizing clarity and Truth over keyword stuffing
export const metadata = {
  metadataBase: new URL('https://sharmafurnitureworks.com'),
  title: {
    default: 'Sharma Furniture Works | Luxury Sheesham & Rosewood Furniture',
    template: '%s | Sharma Furniture Works',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  description:
    'Luxury handcrafted Sheesham & Rosewood furniture in Sameli, Katihar. Specializing in custom wedding sets, wooden beds, and sofas. Government-certified craftsmanship serving Katihar, Purnea & Bhagalpur.',
  keywords: [
    'Sheesham furniture', 'Rosewood furniture', 'Katihar furniture shop', 
    'Sameli wooden furniture', 'handcrafted luxury beds', 'custom wedding furniture'
  ],
  openGraph: {
    type: 'website',
    url: 'https://sharmafurnitureworks.com',
    siteName: 'Sharma Furniture Works',
    title: 'Sharma Furniture Works | Handcrafted Luxury Furniture',
    description: 'Explore premium Sheesham & Rosewood furniture designs.',
    images: [{
      url: '/og-image.jpg', // Default image for homepage/brand
      width: 1200,
      height: 630,
      alt: 'Sharma Furniture Works - Luxury Wooden Furniture',
    }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharma Furniture Works | Luxury Wooden Furniture',
    images: ['https://sharmafurnitureworks.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

// Designer Polish: Muted Viewport Theme (Ash Slate instead of loud purple)
export const viewport = {
  themeColor: "#8200DA", // Matte Ash Tone for a premium feel
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sharma Furniture Works",
              "url": "https://sharmafurnitureworks.com",
              "logo": "https://sharmafurnitureworks.com/logo.png",
              "sameAs": [
                "https://www.instagram.com/sharma.furnitureworks/",
                "https://youtube.com/@sharmafurnitureworks",
                "https://www.facebook.com/sharmafurniture"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sameli",
                "addressLocality": "Katihar",
                "addressRegion": "Bihar",
                "postalCode": "854105",
                "addressCountry": "IN"
              },
              "founder": { "@type": "Person", "name": "Mohan Sharma" },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8051429677",
                "contactType": "customer service"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col bg-[#F8FAFC] text-slate-900 antialiased`}>
        <ReduxProvider>
          <Header />
          <main className="flex-1">
            {/* Sparring Partner Note: The 'ClientLayout' is likely where your 
                framer-motion or transition logic lives. Ensure it doesn't 
                conflict with SEO by keeping it light. 
            */}
            <ClientLayout>{children}</ClientLayout>
            <Analytics />
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}