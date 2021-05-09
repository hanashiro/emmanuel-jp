import Head from 'next/head';
import ContentBox from 'ui/components/data-display/ContentBox';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Instituto Educacional Emmanuel :: Home</title>
            </Head>

            <ContentBox
                title={'Instituto Educacional Emmanuel:'}
                subtitle={'Postado: Lucas @ Mon Jul 09, 2007 1:11 pm'}
            >
                Olá, Web Developers!
            </ContentBox>
        </div>
    );
}
