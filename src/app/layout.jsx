// app/layout.jsx
import './globals.css';
import { Inter } from 'next/font/google';
import ClientLayout from './client-layout';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReduxProvider } from './provider';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://sharmafurnitureworks.com'),
  title: {
    default: 'Sharma Furniture Works | Luxury Sheesham & Rosewood Furniture',
    template: '%s | Sharma Furniture Works',
  },
  icons: {
  icon:'/favicon.ico',
      
},
  description:
    'Buy premium handcrafted Sheesham & Rosewood furniture online in India. Luxury wooden furniture with custom designs, durable craftsmanship, and timeless elegance for your home and office.',
  keywords: [
    'Sheesham furniture',
    'Rosewood furniture',
    'handcrafted wooden furniture',
    'luxury furniture India',
    'custom furniture designs',
    'buy wooden furniture online',
    'wooden furniture Katihar',
    'wooden furniture Purnea',
    'wooden furniture Bhagalpur',
    "wooden bed",
    "wooden sofa"

  ],
  openGraph: {
    type: 'website',
    url: 'https://sharmafurnitureworks.com',
    siteName: 'Sharma Furniture Works',
    title: 'Sharma Furniture Works | Handcrafted Luxury Furniture',
    description:
      'Premium handcrafted Sheesham & Rosewood furniture in India. Explore luxury designs for home & office.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Sharma Furniture Works - Luxury Wooden Furniture',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharma Furniture Works | Luxury Sheesham & Rosewood',
    description:
      'Buy handcrafted Sheesham & Rosewood furniture online in India. Custom luxury designs for your dream home.',
    images: ['https://sharmafurnitureworks.com/twitter-image.jpg'],
    creator: '@sharmafurniture',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://sharmafurnitureworks.com',
    languages: {
      'en-IN': 'https://sharmafurnitureworks.com',
      'hi-IN': 'https://sharmafurnitureworks.com/hi',
    },
  },
  authors: [{ name: 'Shashi Kant Sharma', url: 'https://sharmafurnitureworks.com/about' }],
  creator: 'Sharma Furniture Works',
  publisher: 'Sharma Furniture Works',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* ✅ Organization Structured Data */}
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
                "https://www.instagram.com/sharma.furnitureworks/?igsh=aDRrbzN5bTR5eDF4#",
                "https://youtube.com/@sharmafurnitureworks?si=4GtzyP5k6Pg4M1M4 ",
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
              "founder": {
                "@type": "Person",
                "name": "Mohan Sharma",
                "jobTitle": "Owner",
                
              },
              "employee": [
                { "@type": "Person", "name": "Ravikant Sharma", "jobTitle": "Manager" },
                { "@type": "Person", "name": "Shaligram Sharma", "jobTitle": "Product Manager" },
                { "@type": "Person", "name": "Ashok Sharma", "jobTitle": "Team Member" }
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-8051429677",
                  "telephone2": "+91-9006056800",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.className} !min-h-full !flex !flex-col`}>
        <ReduxProvider>
          <Header />
          <main className="flex-1">
            <ClientLayout>{children}</ClientLayout>
            <Analytics />
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
