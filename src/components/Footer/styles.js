import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
    background: #feebff;
    padding: 2.5rem 0;
`;

export const Title = styled.h1`
    font-size: 1.25rem;
    letter-spacing: 0.69px;
    margin-bottom: 1.5rem !important;

    @media only screen and (max-width: 768px) {
        margin-top: 0.875rem;
    }
`;

export const NavLink = styled(Link)`
    display: block;
    font-size: 1rem;
    margin-bottom: 0.625rem;
    transition: color 0.2s ease-in;

    &:hover,
    &:active,
    &:focus {
        color: #51547b;
    }
`;

export const CSite = styled.p`
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    font-size: 11px;
    letter-spacing: 0.88px;
    color: #2b2d42;
    text-align: inherit;

    @media only screen and (max-width: 414px) {
      text-align: center;
  }
}
`;

export const Target = styled.a`
    display: block;
    font-size: 1rem;
    margin-bottom: 0.625rem;
    transition: color 0.2s ease-in;

    &:hover,
    &:active,
    &:focus {
        color: #51547b;
    }
`;

export const Extra = styled.section`
    background: #feebff;
    position: relative;
    width: 100%;
    padding-right: 25px;
    padding-left: 25px;
    margin-right: auto;
    margin-left: auto;
`;

export const CSitee = styled.div`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.88px;
    color: #2b2d42;
    display: flex;
    justify-content: flex-end;
    text-align: center;

    @media only screen and (max-width: 375px) {
      letter-spacing: none;
      justify-content: center;
  }
}
`;

export const LogoContainer = styled.div`
    display: flex;
    width: 240px;
    height: 68px;
    background-image: url('img/logo1.png');
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: contain;
    padding-top: 24px;
    margin-vertical: 10px;
`;

export const Select = styled.div`
    @media only screen and (min-width: 1024px) {
        text-align: center;
    }
`;
