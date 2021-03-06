import styled from 'styled-components';

export const Container = styled.div`
    display: inline-block;
    width: 100%;
    padding: 10px 5px;
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid #2b2d42;
    outline: none;
    font-size: 0.875rem;
    padding: 1rem 1.25rem;
    transition: border-color 0.3s ease-in;
    color: #2b2d42;

    &:focus,
    &:hover {
        border-color: #51547b;
    }
`;

export const Span = styled.span`
    display: block;
    color: red;
    margin-top: -4px;
`;
