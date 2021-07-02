import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body className="no-scrollbar">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument