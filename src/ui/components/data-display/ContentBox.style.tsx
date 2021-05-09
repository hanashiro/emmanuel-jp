import { experimentalStyled as styled } from '@material-ui/core/styles';

export const Container = styled('div')`
    font-size: 14px;
    background-color: #abc5e2;
    border-radius: 2px;
    border: 1px solid black;
    color: black;
    a {
        color: inherit;
        text-decoration: underline;
    }
`;

export const Title = styled('h2')`
    font-size: 14px;
    background-color: var(--header-color);
    margin: 0;
    padding: ${({ theme }) => theme.spacing(0.5) + ' ' + theme.spacing()};
    border-bottom: 1px solid black;
    font-family: Verdana, Tahoma, Arial, sans-serif;
`;

export const Subtitle = styled('h3')`
    font-size: 12px;
    font-weight: normal;
    background-color: var(--background-dark);
    margin: 0;
    padding: ${({ theme }) => theme.spacing(0.5) + ' ' + theme.spacing()};
    border-bottom: 1px solid black;
`;

export const Content = styled('div')`
    padding: ${({ theme }) =>
        theme.spacing(0.5) + ' ' + theme.spacing() + ' ' + theme.spacing()};
`;
