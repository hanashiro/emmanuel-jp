import * as React from 'react';
import { Box } from '@material-ui/core';
import useIsMobile from 'data/hooks/useIsMobile';
import ContentBox from 'ui/components/data-display/ContentBox';
import { DrawerStyled } from './Drawer.style';
import Link from 'next/link';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
    const isMobile = useIsMobile();
    return (
        <>
            <DrawerStyled
                anchor={'left'}
                open={isOpen}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                onClose={onClose}
            >
                <Link href="/">
                    <a style={{ textAlign: 'center' }}>
                        <img
                            src={'/emmanuel-logo.png'}
                            alt={'Instituto Educacional Emmanuel'}
                            style={{ maxWidth: '50%' }}
                            width="200"
                        />
                    </a>
                </Link>
                <ContentBox title={'Seções'}>
                    <div onClick={onClose}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <br />
                        <br />
                        <Link href="/fotos">
                            <a>Fotos</a>
                        </Link>
                        <br />
                        <Link href="/videos">
                            <a>Vídeos</a>
                        </Link>
                        <br />
                        <Link href="/localizacao">
                            <a>Localização (Veja o prédio)</a>
                        </Link>
                        <br />
                        <a
                            rel="noopener noreferrer"
                            target={'_blank'}
                            href={
                                'https://www.facebook.com/groups/434885159866193'
                            }
                        >
                            Grupo do Facebook
                        </a>
                    </div>
                </ContentBox>

                <ContentBox title={'Estatísticas'}>
                    Nós temos <strong>2325</strong> usuários registrados <br />
                    O mais novo integrante é o(a) Plokiikmol <br />
                    <br />
                    Nossos usuários enviaram um total de <strong>
                        5696
                    </strong>{' '}
                    mensagens within <strong>1318</strong> topics
                </ContentBox>
                <ContentBox title={'Links'}>
                    <Box sx={{ textAlign: 'center' }}>
                        <a
                            href={'https://www.meupositivo.com.br/'}
                            rel="noopener noreferrer"
                            target={'_blank'}
                        >
                            <img
                                src={'/top_logo_3.gif'}
                                width="180"
                                height="37"
                                alt="Portal Positivo"
                            />
                        </a>
                    </Box>
                </ContentBox>
            </DrawerStyled>
        </>
    );
};

export default Drawer;
