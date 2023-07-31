import Head from 'next/head';
import { Dialog, DialogTitle, IconButton, Tooltip } from '@material-ui/core';
import ContentBox from 'ui/components/data-display/ContentBox';
import { picturesList } from 'data/database/pictures-data';
import { useCallback, useMemo, useState } from 'react';
import { PictureGrid } from '@styles/pages/fotos.styled';
import { useHotkeys } from 'react-hotkeys-hook';
import useIsMobile from 'data/hooks/useIsMobile';

export default function Fotos() {
    const isMobile = useIsMobile();
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

    const downloadPicture = useCallback(() => {
        if (selectedPicture === '') return;
        const link = document.createElement('a');
        link.href = `/img/fotos${selectedPicture}`;
        link.download = selectedPicture;
        link.click();
    }, [selectedPicture]);

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

            <Dialog
                open={selectedPicture !== ''}
                onClose={closeDialog}
                fullScreen={isMobile}
                maxWidth="lg"
            >
                <DialogTitle
                    sx={{
                        bgcolor: 'var(--background-light)',
                    }}
                >
                    <Tooltip title="Anterior">
                        <IconButton
                            disabled={previousPicture === ''}
                            onClick={goToPreviousPicture}
                        >
                            <i className="fas fa-chevron-left" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Próxima">
                        <IconButton
                            disabled={nextPicture === ''}
                            onClick={goToNextPicture}
                        >
                            <i className="fas fa-chevron-right" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Download">
                        <IconButton
                            disabled={selectedPicture === ''}
                            onClick={downloadPicture}
                            sx={{ ml: 4 }}
                        >
                            <i className="fas fa-download" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Fechar">
                        <IconButton
                            sx={{
                                position: 'absolute',
                                right: 16,
                            }}
                            onClick={closeDialog}
                        >
                            <i className="fas fa-times" />
                        </IconButton>
                    </Tooltip>
                </DialogTitle>

                {selectedPicture && (
                    <img src={`/img/fotos${selectedPicture}`} />
                )}
            </Dialog>

            {picturesListElements}
        </>
    );
}
