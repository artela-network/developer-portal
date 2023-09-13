import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artela Devnet',
  description: 'Artela Devnet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>Artela Devnet</title>
        <meta
          name="description"
          content="Artela Devnet"
        />
        {/* Add the link to your logo in the public directory */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
