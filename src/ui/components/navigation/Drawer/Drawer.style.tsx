import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';

export const DrawerStyled = styled(Drawer)`
    .MuiDrawer-paper {
        background-color: var(--background-light);
        min-width: 250px;
        max-width: calc(100vw - 80px);
        display: grid;
        grid-auto-flow: row;
        align-content: start;
        gap: ${({ theme }) => theme.spacing(2)};
        padding: ${({ theme }) => theme.spacing()};
    }
`;
