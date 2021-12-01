import styled from "styled-components";

export const Container = styled.table`
    width: 100%;
    margin-top: 40px;
    background: #FFEFD5;
    display: column;
    margin-bottom: 20px;
    font-family: 'Roboto';
    padding: 10px;
    height: 200px;
;

    thead {
        font-size: 26px;
        
    }

    tbody tr {
        font-size: 20px;

        button {
            padding: 4px;
            background: #FFD700;
            color: #000000;
            border: 1;
            border-radius: 8px;
            font-size: 18px;
            margin-top: 20px;
            font-family: 'Roboto';

      &:hover {
            filter: brightness(0.9);
        }
        }
    }
`
