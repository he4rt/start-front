import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/Globals'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}
