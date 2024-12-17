import styled from 'styled-components';
import BgImg from '../assets/bg.jpg';

export const AuthStyle = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;

    .img-bg {
        background-image: url(${BgImg});
        background-size: cover;
        width: 50%;

        @media (max-width: 991px) {
            display: none;
        }
    }

    .form-bg {
        background: ${props => props.theme.background};
        width: 50%;
        padding-top: 6%;

        @media (max-width: 991px) {
            width: 100%;
        }
    }

    .logo {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        height: 100px;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        img {
            height: 50px;
        }

        @media (max-width: 991px) {
            display: none;
        }
    }

    .logo-sm {
        text-align: center;
        margin-bottom: 40px;

        img {
            height: 50px;
        }

        @media (min-width: 991px) {
            display: none;
        }
    }
`;
