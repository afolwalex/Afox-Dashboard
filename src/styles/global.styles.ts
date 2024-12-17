import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    body{
        background: ${props => props.theme.bg};
        font-size: 0.9rem;
        font-family: 'Roboto', 'Lucida Sans', 'Lucida Sans Regular', sans-serif;
        color: ${props => props.theme.text};
    }

    p{
        color: ${props => props.theme.text};
        margin: 0;
        padding: 0;
    }

    h1,h2,h3,h4,h5,h6{
        color: ${props => props.theme.text};
        margin: 0;
        padding: 0;
    }
    .modal-content{
        background-color: ${props => props.theme.background}
    }
`;
