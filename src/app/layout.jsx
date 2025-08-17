// app/layout.jsx
import './globals.css';

import { Inter } from 'next/font/google';
import ClientLayout from './client-layout'; // ✅ New client wrapper component
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ReduxProvider } from './provider';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sharma Furniture Works',
  description: 'Best Wooden Furniture Online',
  
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sharma Furniture Work’s",
              "url": "https://yourwebsite.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sameli, Katihar",
                "addressRegion": "Bihar",
                "addressCountry": "India"
              },
              "founder": {
                "@type": "Person",
                "name": "Mohan Sharma",
                "jobTitle": "Owner"
              },
              "employee": [
                {
                  "@type": "Person",
                  "name": "Ravikant Sharma",
                  "jobTitle": "Manager"
                },
                {
                  "@type": "Person",
                  "name": "Shaligram Sharma",
                  "jobTitle": "Product Manager"
                },
                {
                  "@type": "Person",
                  "name": "Ashok Sharma",
                  "jobTitle": "Team Member"
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.className} !min-h-full !flex !flex-col`}>
        <ReduxProvider>
          <Header />
          <main className="flex-1  ">
            <ClientLayout>
              {children}
               <Analytics />
            </ClientLayout>
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}







