import styled from 'styled-components';

export const TeamBlock = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1``;

export const Content = styled.p`
    padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled.div`
    text-align: center;
    max-width: 570px;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
    }
`;
