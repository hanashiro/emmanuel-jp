import Head from 'next/head';
import ContentBox from 'ui/components/data-display/ContentBox';

export default function Localizacao() {
    return (
        <>
            <Head>
                <title>Instituto Educacional Emmanuel :: Localização</title>
            </Head>

            <h1>Localização</h1>

            <ContentBox
                title={'Veja o Emmanuel em 360º!'}
                subtitle={
                    'Clique nas imagens para ver o prédio do Emmanuel no Streetview'
                }
            >
                <a
                    rel="noopener noreferrer"
                    target={'_blank'}
                    href={
                        'https://www.google.com/maps/@35.4192709,137.0069327,3a,63.6y,93.34h,98.38t/data=!3m6!1e1!3m4!1sI1qNRx_NFbcXePn__1Y6Lg!2e0!7i13312!8i6656'
                    }
                >
                    <img
                        src={'/img/streetview-emmanuel-2012.png'}
                        style={{ maxWidth: '100%', width: '300px' }}
                    />
                    <br />
                    Janeiro de 2012
                </a>
                <br />
                <br />
                <br />
                <a
                    rel="noopener noreferrer"
                    target={'_blank'}
                    href={
                        'https://www.google.com/maps/@35.4191235,137.0079198,3a,50.1y,287.92h,109.08t/data=!3m6!1e1!3m4!1s3f0cpBMOHetgpDz1NaelWA!2e0!7i13312!8i6656'
                    }
                >
                    <img
                        src={'/img/streetview-emmanuel-tras.png'}
                        style={{ maxWidth: '100%', width: '300px' }}
                    />
                    <br />
                    Vista de trás
                </a>
                <br />
                <br />
                <br />
                <a
                    rel="noopener noreferrer"
                    target={'_blank'}
                    href={
                        'https://www.google.com/maps/@35.4192897,137.0069439,3a,75y,98.84h,96.26t/data=!3m6!1e1!3m4!1st6Uyrdf0uYYbDVEe4zgrfw!2e0!7i13312!8i6656'
                    }
                >
                    <img
                        src={'/img/streetview-emmanuel-2018.png'}
                        style={{ maxWidth: '100%', width: '300px' }}
                    />
                    <br />
                    Julho de 2018
                </a>
            </ContentBox>

            <br />
            <a
                rel="noopener noreferrer"
                target={'_blank'}
                href={'https://www.google.com/maps/@35.4190953,137.0069739,19z'}
            >
                <img src={'img/map.jpg'} style={{ maxWidth: '100%' }} />
            </a>
        </>
    );
}
