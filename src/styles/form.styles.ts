import styled from 'styled-components';

export const Label = styled.label`
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 500;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    background: ${props => props.theme.card};
    border: 1.5px solid ${props => props.theme.border};
    outline: 0;
    padding-left: 10px;
    color: ${props => props.theme.text};
    height: 45px;
    border-radius: 4px;
    width: 100%;
    font-size: 0.8rem;
`;

export const Select = styled.select`
    background: ${props => props.theme.card};
    border: 1.5px solid ${props => props.theme.border};
    outline: 0;
    padding-left: 10px;
    color: ${props => props.theme.text};
    height: 45px;
    border-radius: 4px;
    width: 100%;
    font-size: 0.8rem;
`;

export const Button = styled.button<{wide?: string}>`
    background-color: ${props => props.theme.main};
    color: #fff !important;
    outline: 0;
    border: 0;
    display: flex;
    align-items: center;
    padding: 12px 25px;
    border-radius: 5px;
    ${props =>
        props.wide === 'true' &&
        `	width: 100%;
            justify-content: center;
		`}

    span {
        color: #fff !important;
    }

    svg {
        margin-right: 10px;
    }
`;
