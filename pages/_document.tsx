import Document, { Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return  (
            <Html lang="PL">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}