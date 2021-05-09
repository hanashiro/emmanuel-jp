import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

export const ContentContainer = styled(Container)`
    padding: ${({ theme }) => theme.spacing(2)};
    background-color: var(--background-light);
    border-radius: 10px;
    box-shadow: 0px 2px 7px 0px #000000bf;
    min-height: calc(90vh - 100px);

    ${({ theme }) => theme.breakpoints.down(1320)} {
        max-width: calc(100vw - 24px);
    }
`;
