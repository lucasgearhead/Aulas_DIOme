import { styled } from 'styled-components';

export const ButtonContainer = styled.button`
    height: 70px;
    min-width: 80px;
    background: #606060;
    color: white;
    padding: 5px;
    font-size: 30px;
    border-radius: 10px;
    border: 0;
    font-weight: 500;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`