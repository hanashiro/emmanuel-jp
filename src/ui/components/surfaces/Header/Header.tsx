import React from 'react';
import Link from 'next/link';
import { Toolbar, Container, IconButton } from '@material-ui/core';
import { HeaderAppBar, HeaderLogo } from './Header.style';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <HeaderAppBar position={'sticky'}>
            <Toolbar component={Container}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={props.onMenuClick}
                >
                    <i className={'fas fa-bars'} />
                </IconButton>

                <Link href="/">
                    <a>
                        <HeaderLogo
                            src={'/emmanuel-logo.png'}
                            alt={'Instituto Educacional Emmanuel'}
                        />
                    </a>
                </Link>

                <IconButton
                    edge="end"
                    color="inherit"
                    sx={{ ml: 2 }}
                    component={'a'}
                    rel="noopener noreferrer"
                    target={'_blank'}
                    href={'https://www.facebook.com/groups/434885159866193'}
                >
                    <i className={'fab fa-facebook-f'} />
                </IconButton>
            </Toolbar>
        </HeaderAppBar>
    );
};

export default Header;
