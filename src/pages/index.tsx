import Head from 'next/head';
import ContentBox from 'ui/components/data-display/ContentBox';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>Instituto Educacional Emmanuel :: Home</title>
            </Head>

            <ContentBox title={'Vários Vídeos! Venha relembrar!'}>
                Relembre vários momentos!
                <br />
                <br />
                <Link href="/videos">
                    <a>
                        <img
                            src={
                                'https://i.ytimg.com/vi/29O3WPYAlTw/mqdefault.jpg'
                            }
                            style={{ maxWidth: '100%', width: '300px' }}
                        />
                    </a>
                </Link>
            </ContentBox>

            <ContentBox title={'Veja o prédio do Emmanuel!'}>
                Veja no Streetview, em 360º, como está o prédio do Emmanuel{' '}
                <br />
                <br />
                <Link href="/localizacao">
                    <a>
                        <img
                            src={'/img/streetview-emmanuel-2012.png'}
                            style={{ maxWidth: '100%', width: '300px' }}
                        />
                    </a>
                </Link>
            </ContentBox>
        </>
    );
}
