import { experimentalStyled as styled } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
// import { HeaderProps } from './Header';

export const HeaderAppBar = styled(AppBar)`
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    &.MuiAppBar-root {
        background-color: var(--background-light);
        color: ${({ theme }) => theme.palette.text.primary};
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
    }

    .MuiContainer-root {
        justify-content: space-between;
    }
`;

export const HeaderLogo = styled('img')`
    height: 70px;
    margin: ${({ theme }) => theme.spacing()};
`;
