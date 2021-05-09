import React from 'react';
import { Container, Title, Subtitle, Content } from './ContentBox.style';

interface ContentBoxProps {
    title: string;
    subtitle?: string | JSX.Element;
}

const ContentBox: React.FC<ContentBoxProps> = ({
    title,
    subtitle,
    children,
}) => {
    return (
        <Container>
            <Title>{title}</Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            <Content>{children}</Content>
        </Container>
    );
};

export default ContentBox;
