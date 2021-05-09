import Head from 'next/head';
import { Dialog } from '@material-ui/core';
import ContentBox from 'ui/components/data-display/ContentBox';
import { picturesList } from 'data/database/pictures-data';
import { useState } from 'react';
import { PictureGrid } from '@styles/pages/fotos.styled';

export default function Fotos() {
    const [selectedPicture, setPicture] = useState('');
    return (
        <>
            <Head>
                <title>Instituto Educacional Emmanuel :: Fotos</title>
            </Head>

            <h1>Fotos</h1>

            <Dialog
                open={selectedPicture !== ''}
                onClose={() => setPicture('')}
                onClick={() => setPicture('')}
            >
                {selectedPicture && (
                    <img src={`/img/fotos${selectedPicture}`} />
                )}
            </Dialog>

            {picturesList.reverse().map((pictureCollection) => (
                <ContentBox
                    key={pictureCollection.name}
                    title={pictureCollection.name.replace('/', '')}
                >
                    <PictureGrid>
                        {pictureCollection.files.map((picture) => (
                            <img
                                key={picture}
                                src={`/img/fotos-thumb${picture}`}
                                onClick={() => setPicture(picture)}
                            />
                        ))}
                    </PictureGrid>
                </ContentBox>
            ))}
        </>
    );
}
