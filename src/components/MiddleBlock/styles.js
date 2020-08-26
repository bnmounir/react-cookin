import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MiddleBlock = styled.section`
    position: relative;
    padding: 4rem 0 3rem;
    text-align: center;
    display: flex;
    justify-content: center;
`;

export const Title = styled.h1``;

export const Content = styled.p`
    padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled.div`
    max-width: 570px;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
    }
`;

export const link = styled.a`
    text-decoration: none;
    color: ${(props) => props.color || 'palevioletred'};
`;

export const NavLink = styled(Link)``;
// display: block;
// font-size: 1rem;
// margin-bottom: 0.625rem;
// transition: color 0.2s ease-in;
// background-color: #fff;

// &:hover,
// &:active,
// &:focus {
//     color: #15418e;
// }
