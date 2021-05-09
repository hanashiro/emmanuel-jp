import { experimentalStyled as styled } from '@material-ui/core/styles';

export const PictureGrid = styled('div')`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    img {
        margin: ${({ theme }) => theme.spacing()};
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
`;
