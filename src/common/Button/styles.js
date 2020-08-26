import styled from 'styled-components';

export const Button = styled.button`
    background: ${(props) => props.color || '#d90429'};
    color: ${(props) => (props.color ? '#2b2d42' : '#edf2f4')};
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    border: 2px solid #d90429;
    height: 42px;
    outline: none;
    cursor: pointer;
    margin-top: 0.625rem;
    max-width: 180px;

    @media only screen and (max-width: 1024px) {
        width: ${(props) => (props.width ? '160px' : '100%')};
    }

    @media only screen and (max-width: 768px) {
        width: ${(props) => (props.width ? '140px' : '100%')};
    }

    @media only screen and (max-width: 480px) {
        width: ${(props) => (props.width ? '130px' : '100%')};
    }
`;
