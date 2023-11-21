import Document, { Html, Head, Main, NextScript } from 'next/document';
import { siteConfig } from '@/config/site';
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import { ThemeProvider } from "@/components/theme-provider"

import { SiteHeader } from "@/components/site-header"

class MyDocument extends Document {
  render() {
    return (
      <>
        {/* <html lang="en" suppressHydrationWarning>
          <Head>
            <title>{siteConfig.name}</title>
            <meta name="description" content={siteConfig.description} />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html> */}

        <Html lang="en" suppressHydrationWarning>
          {/* <head /> */}
          <Head>
            <title>{"NumAnalytic Solver"}</title>
            <meta name="description" content={siteConfig.description} />
          </Head>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex min-h-screen flex-col">
                <div className="flex-1">
                  <Main />
                  <NextScript />
                </div>
              </div>
            </ThemeProvider>
          </body>
        </Html>
      </>
    );
  }
}

export default MyDocument;
