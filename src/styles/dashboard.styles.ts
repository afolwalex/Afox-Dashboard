import styled from 'styled-components';

export const MainPage = styled.div<{minimize: string}>`
    position: relative;
    display: block;
    clear: both;
    float: unset;
    right: 0;
    margin: 0 auto 0 ${props => (props.minimize == 'true' ? '70px' : '220px')};
    min-height: 100vh;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-bottom: 70px;

    @media (max-width: 991px) {
        margin: 0px;
    }
`;

export const AppContent = styled.div`
    .main-content {
        padding: 20px 0;

        @media (min-width: 991px) {
            padding-left: 1%;
            padding-right: 1%;
        }
    }
`;

export const SidebarDiv = styled.div<{minimize: string}>`
    width: ${props => (props.minimize === 'true' ? '70px' : '220px')};
    background-color: ${props => props.theme.background};
    height: 100vh;
    position: fixed;
    z-index: 1029;
    transition: all 0.3s ease-in-out;
    border-right: 1px solid ${props => props.theme.divider};
    font-size: 0.8rem;

    @media (max-width: 991px) {
        margin-left: -220px;
        height: 100% !important;
        padding-bottom: 50px !important;

        &.open-m {
            margin-left: 0;
        }
    }

    .logo {
        text-align: center;
        padding: 10px 0;
        img {
            height: 50px;
        }
    }
`;

export const SidebarMenu = styled.div<{minimize: string}>`
    padding-top: 20px;
    padding-bottom: 20px;
    height: 100%;
    position: relative;

    ${props =>
        props.minimize === 'true'
            ? `	display: flex;
                flex-direction: column;
                align-items: center;
		`
            : `padding-left: 20px;
                padding-right: 20px;
					`}

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 72%;

        &.second {
            height: 28%;
        }

        li {
            margin-top: 15px;

            a,
            button {
                background: none;
                outline: 0;
                border: 0;
                color: ${props => props.theme.secondary};
                display: inline-flex;
                align-items: center;
                text-decoration: none;
                width: 100%;
                padding: 10px;
                border-radius: 4px;

                span {
                    display: ${props =>
                        props.minimize === 'true' ? 'none' : 'inline'};
                    margin-left: 15px;
                    transition: all 0.3s ease-in-out;
                }

                &.active {
                    background-color: ${props => props.theme.main};
                    color: ${props =>
                        props.theme.name === 'Dark'
                            ? props.theme.text2
                            : '#fff'};
                }
            }
        }
    }
`;

export const StatBox = styled.div`
    background-color: ${props => props.theme.card};
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
    border-radius: 5px;
    border-right: 2px solid;

    .icon {
        padding: 5px 10px;
        border-radius: 6px;
        svg {
            color: #fff;
        }
    }
    p {
        font-size: 0.8rem;
        margin-bottom: 5px;
    }
    h4 {
        font-weight: normal;
    }
`;

export const Card = styled.div`
    background-color: ${props => props.theme.card};
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    padding: 20px;

    .c-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid ${props => props.theme.divider};
        padding-bottom: 10px;
        margin-bottom: 15px;

        h5,
        h6,
        h4 {
            font-weight: normal;
            font-size: 1rem;
        }

        span.count {
            background: ${props => props.theme.main};
            color: ${props =>
                props.theme.name === 'Dark' ? props.theme.text2 : '#fff'};
            margin-left: 5px;
            padding: 5px;
            border-radius: 5px;
            font-size: 0.8rem;
        }
    }
`;
