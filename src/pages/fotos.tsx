import Head from 'next/head';
import { Dialog, DialogTitle, IconButton } from '@material-ui/core';
import ContentBox from 'ui/components/data-display/ContentBox';
import { picturesList } from 'data/database/pictures-data';
import { useCallback, useMemo, useState } from 'react';
import { PictureGrid } from '@styles/pages/fotos.styled';
import { useHotkeys } from 'react-hotkeys-hook';

export default function Fotos() {
    const [folderName, setFolderName] = useState(''),
        [selectedPicture, setPicture] = useState(''),
        picturesListElements = useMemo(
            () =>
                picturesList.reverse().map((pictureCollection) => (
                    <ContentBox
                        key={pictureCollection.name}
                        title={pictureCollection.name.replace('/', '')}
                    >
                        <PictureGrid>
                            {pictureCollection.files.map((picture) => (
                                <img
                                    key={picture}
                                    src={`/img/fotos-thumb${picture}`}
                                    onClick={() => {
                                        setFolderName(pictureCollection.name);
                                        setPicture(picture);
                                    }}
                                    loading="lazy"
                                />
                            ))}
                        </PictureGrid>
                    </ContentBox>
                )),
            [picturesList]
        ),
        currentPictureIndex = useMemo(() => {
            if (folderName === '') return -1;
            const list = picturesList.find((item) => item.name === folderName);
            if (!list) return -1;
            return list.files.indexOf(selectedPicture);
        }, [folderName, selectedPicture]),
        previousPicture = useMemo(() => {
            if (currentPictureIndex <= 0) return '';
            return (
                picturesList.find((item) => item.name === folderName)?.files[
                    currentPictureIndex - 1
                ] || ''
            );
        }, [currentPictureIndex, folderName]),
        nextPicture = useMemo(() => {
            if (currentPictureIndex === -1) return '';
            return (
                picturesList.find((item) => item.name === folderName)?.files[
                    currentPictureIndex + 1
                ] || ''
            );
        }, [currentPictureIndex, folderName]);

    const goToPreviousPicture = useCallback(() => {
        if (previousPicture === '') return;
        setPicture(previousPicture);
    }, [previousPicture]);

    const goToNextPicture = useCallback(() => {
        if (nextPicture === '') return;
        setPicture(nextPicture);
    }, [nextPicture]);

    function closeDialog() {
        setFolderName('');
        setPicture('');
    }

    useHotkeys('left', goToPreviousPicture, [goToPreviousPicture]);
    useHotkeys('right', goToNextPicture, [goToNextPicture]);

    return (
        <>
            <Head>
                <title>Instituto Educacional Emmanuel :: Fotos</title>
            </Head>

            <h1>Fotos</h1>

            <Dialog open={selectedPicture !== ''} onClose={closeDialog}>
                <DialogTitle>
                    <IconButton
                        disabled={previousPicture === ''}
                        onClick={goToPreviousPicture}
                    >
                        <i className="fas fa-chevron-left" />
                    </IconButton>
                    <IconButton
                        disabled={nextPicture === ''}
                        onClick={goToNextPicture}
                    >
                        <i className="fas fa-chevron-right" />
                    </IconButton>
                    <IconButton
                        sx={{
                            position: 'absolute',
                            right: 16,
                        }}
                        onClick={closeDialog}
                    >
                        <i className="fas fa-times" />
                    </IconButton>
                </DialogTitle>

                {selectedPicture && (
                    <img src={`/img/fotos${selectedPicture}`} />
                )}
            </Dialog>

            {picturesListElements}
        </>
    );
}
