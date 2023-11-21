import Document, { Html, Head, Main, NextScript } from 'next/document';
import { siteConfig } from '@/config/site';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>{siteConfig.name}</title>
          <meta name="description" content={siteConfig.description} />
          {/* Add any other head elements here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
