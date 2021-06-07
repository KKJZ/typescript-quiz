import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/bg.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Warpper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, sans-serif;
        background-image: linear-gradient(180deg, #999, #f5c206);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -mox-text-fill-color: tranparent;
        filter: drop-shadow(2px 2px #b92e71);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }
    .start,
    .next {
        cursor: pointer;
        background: linear-gradient(180deg #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        &:hover {
            background: #f5c206;
            color: white;
        }
    }

    .start {
        max-width: 200px;
    }
`;
