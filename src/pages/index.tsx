import Head from 'next/head';
import ContentBox from 'ui/components/data-display/ContentBox';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>Instituto Educacional Emmanuel :: Home</title>
            </Head>

            <ContentBox title={'Fotos e mais fotos!'}>
                Veja inúmeras fotos que a galera compartilhou no grupo do
                Facebook!
                <br />
                <br />
                <Link href="/fotos">
                    <a>
                        <img
                            src={
                                '/img/fotos-thumb/2006/10/315374_382178438518777_1190085447_n.jpg'
                            }
                        />
                        <img
                            src={
                                '/img/fotos-thumb/2007/04/600770_370894892980465_1191418620_n.jpg'
                            }
                        />
                        <img src={'/img/fotos-thumb/2006/12/03/PC030060.jpg'} />
                        <img
                            src={
                                '/img/fotos-thumb/2006/04/553614_382178095185478_412941939_n.jpg'
                            }
                        />
                        <img
                            src={
                                '/img/fotos-thumb/2006/603037_4209879525751_1580737475_n.jpg'
                            }
                        />
                        <img
                            src={
                                '/img/fotos-thumb/2005/12/3564_525213517535117_778561795_n.jpg'
                            }
                        />
                        <img
                            src={
                                '/img/fotos-thumb/2005/07/229784_525213170868485_599381453_n.jpg'
                            }
                        />
                        <img
                            src={
                                '/img/fotos-thumb/2005/06/556561_4209885405898_378706837_n.jpg'
                            }
                        />
                        <img
                            src={
                                '/img/fotos-thumb/2004/12/456728_4209670360522_1294194568_o.jpg'
                            }
                        />
                        <img
                            src={
                                '/img/fotos-thumb/2004/05/177915_4209644159867_1466051806_o.jpg'
                            }
                        />
                        <img
                            src={
                                '/img/fotos-thumb/sem-data/469316_133107963496112_1751066857_o.jpg'
                            }
                        />
                        <img
                            src={
                                '/img/fotos-thumb/sem-data/470174_4218272015558_894829132_o.jpg'
                            }
                        />
                        <img
                            src={
                                '/img/fotos-thumb/2001/392206_387585474644740_297523939_n.jpg'
                            }
                        />
                        <img
                            src={
                                '/img/fotos-thumb/sem-data/562266_312555092170934_858537020_n.jpg'
                            }
                        />
                        <img
                            src={
                                '/img/fotos-thumb/sem-data/554194_412476862136212_1134300788_n.jpg'
                            }
                        />
                        <img
                            src={
                                '/img/fotos-thumb/sem-data/197637_312556948837415_94343496_n.jpg'
                            }
                        />
                    </a>
                </Link>
            </ContentBox>

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
