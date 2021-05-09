import { Dialog } from '@material-ui/core';
import { videosList } from 'data/database/videos-data';
import Head from 'next/head';
import { useState } from 'react';
import ContentBox from 'ui/components/data-display/ContentBox';

export default function Videos() {
    const [selectedVideo, setVideo] = useState('');
    return (
        <>
            <Head>
                <title>Instituto Educacional Emmanuel :: Vídeos</title>
            </Head>

            <h1>Vídeos</h1>

            <Dialog open={selectedVideo !== ''} onClose={() => setVideo('')}>
                {selectedVideo && (
                    <iframe
                        width="560"
                        height="315"
                        src={selectedVideo}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </Dialog>

            {videosList.map((videoCollection) => (
                <ContentBox
                    key={videoCollection.year}
                    title={`Vídeos de ${videoCollection.year}`}
                >
                    {videoCollection.videos.map((video) => (
                        <div key={video.id}>
                            <img
                                src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                                style={{ cursor: 'pointer' }}
                                onClick={() => setVideo(video.src)}
                            />
                            <br />
                            {video.title}
                            <br />
                            <br />
                            <br />
                        </div>
                    ))}
                </ContentBox>
            ))}
        </>
    );
}
