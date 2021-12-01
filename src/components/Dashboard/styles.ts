import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background: #F0E68C;
    font-size: 25px;
    display: column;
    margin-top: -4rem;

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;

    width: 80%;
    margin: 0 auto;
    margin-top: 60px;

    label {
        padding: 4px;
        font-size: 30px;
        align-items: center;
        margin-bottom: 10px;
        background: #FFE4B5;
        font-family: courier;
    }

    input {
        margin: 3px 0;
        padding: 4px;
        font-size: 18px;
    }

    button {
        padding: 4px;
        background: #FFD700;
        color: #000000;
        border: 1;
        font-size: 20px;
        margin-top: 20px;
        font-family: 'Roboto';

      &:hover {
            filter: brightness(0.9);
        }
    }


`