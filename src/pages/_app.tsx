import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import 'ui/styles/globals.css';
import theme from 'ui/themes/theme';
import { ThemeProvider } from '@material-ui/core';
import Header from 'ui/components/surfaces/Header/Header';
import Drawer from 'ui/components/navigation/Drawer/Drawer';
import { useState } from 'react';
import { ContentContainer } from '@styles/pages/_app.styled';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <Head>
                <title>Instituto Educacional Emmanuel</title>
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                    crossOrigin="anonymous"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <Header onMenuClick={() => setMenuOpen(true)} />
                <Drawer
                    onClose={() => setMenuOpen(false)}
                    isOpen={isMenuOpen}
                />
                <ContentContainer>
                    <Component {...pageProps} />
                </ContentContainer>
            </ThemeProvider>
        </>
    );
};

export default App;
