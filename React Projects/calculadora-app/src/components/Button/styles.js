import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 10px;
    border: 1px solid #cdcdcd;
    background-color: #363636;
    color: #ffffff;
    font-size: 24px;
    font-weight: 100;
    flex: 1;

    .operation{
        color: blue;
    }

    &:hover{
        opacity: 0.6;
    }
`