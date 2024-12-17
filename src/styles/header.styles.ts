import styled from 'styled-components';

export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    overflow: hidden;
    background: ${props => props.theme.background};

    @media (max-width: 991px) {
        padding: 10px;
        .web,
        .search {
            display: none;
        }
    }

    @media (min-width: 991px) {
        .mobile {
            display: none;
        }
    }

    button.pin {
        background-color: ${props => props.theme.main};
        color: ${props =>
            props.theme.name === 'Dark' ? props.theme.text2 : '#fff'};
        outline: 0;
        border: 0;
        border-radius: 5px;
        padding: 6px 10px;
        /* height: 40px;
        width: 40px; */
    }

    .second {
        display: flex;
        align-items: center;

        div.search {
            position: relative;
            margin-right: 20px;

            input {
                background: ${props => props.theme.card};
                border: 1px solid ${props => props.theme.divider};
                outline: 0;
                padding-left: 10px;
                color: ${props => props.theme.secondary};
                height: 35px;
                border-radius: 4px;
                width: 200px;
                font-size: 0.8rem;
            }

            svg {
                position: absolute;
                right: 10px;
                top: 10px;
                color: ${props => props.theme.secondary};
            }
        }
    }
`;

export const NotifyStyle = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 300px;
    z-index: 9991;
    background-color: ${props => props.theme.background};
    border-left: 1px solid ${props => props.theme.divider};
    -webkit-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;

    .noti-body {
        height: 100vh;
        width: 100%;
        padding: 5px 15px;
        -webkit-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;

        .close-btn {
            text-align: right;

            button {
                margin-right: 0 !important;
            }
        }

        .each-noti {
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 5px;
            border-radius: 4px;

            &:hover {
                background-color: ${props =>
                    props.theme.name === 'Dark' ? props.theme.main : '#f0f0f0'};
            }

            svg {
                margin-right: 15px;
            }

            p {
                font-size: 0.9rem;

                &:last-child {
                    font-size: 0.8rem;
                    font-style: italic;
                }
            }
        }
    }
`;

export const ProfileDropStyle = styled.div`
    position: absolute;
    right: 20px;
    top: 70px;
    z-index: 991;
    -webkit-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;

    .drop {
        background-color: ${props => props.theme.background};
        min-width: 200px;
        max-height: 80vh;
        border: 1px solid ${props => props.theme.divider};
        border-radius: 4px;
        padding: 15px;
        -webkit-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;

        .image {
            text-align: center;
            margin-bottom: 20px;
            img {
                height: 60px;
                width: 60px;
                border-radius: 50%;
            }
        }

        a,
        button {
            display: block;
            width: 100%;
            background: ${props =>
                props.theme.name === 'Dark' ? props.theme.main : 'f0f0f0'};
            margin-bottom: 15px;
            color: ${props =>
                props.theme.name === 'Dark' ? props.theme.text2 : '#000'};
            border: 1px solid ${props => props.theme.main};
            text-decoration: none;
            padding: 8px 10px;
            border-radius: 3px;
            border: 0;
            outline: 0;

            svg {
                margin-right: 10px;
            }
        }
    }
`;
