import styled from 'styled-components';

export const BreadCrumbStyle = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    button {
        border: 0;
        outline: 0;
        background: none;
        font-weight: 600;
        margin-right: 20px;
        color: ${props => props.theme.text};

        span {
            margin-left: 7px;
        }
    }

    a {
        text-transform: capitalize;
        text-decoration: none;
        color: ${props => props.theme.text};
        margin-right: 8px;
        font-size: 1.1rem;

        span {
            margin-right: 5px;
        }
    }
`;

export const TabStyle = styled.div<{width?: string}>`
    display: flex;
    align-items: center;
    width: ${props => (props.width ? `${props.width}%` : '50%')};
    border: 2px solid ${props => props.theme.divider};
    padding: 10px;
    border-radius: 5px;

    @media (max-width: 991px) {
        width: 100%;
    }

    button {
        width: 50%;
        outline: 0;
        border: 0;
        padding: 10px 0;
        background: none;
        color: ${props => props.theme.text};
        border-radius: 5px;

        &.active {
            font-weight: 500;
            border: 1px solid ${props => props.theme.border};
        }
    }
`;
