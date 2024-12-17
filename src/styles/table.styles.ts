import styled from 'styled-components';

export const Table = styled.table`
    font-size: 0.9rem;
    white-space: nowrap;
    color: ${props => props.theme.text3};

    thead {
        background-color: ${props =>
            props.theme.name === 'Light' ? '#fafbfc' : props.theme.main};
        th {
            text-transform: uppercase;
            font-size: 0.85rem;
            color: ${props => props.theme.text};
        }
    }
    td {
        height: 50px;
        vertical-align: middle;
        &.amount {
            text-align: right;
        }
        &.link {
            a {
                color: ${props => props.theme.text};
                font-size: 0.85rem;
            }
        }
    }

    td.status {
        span {
            color: #fff;
            padding: 5px 10px;
            font-size: 0.8rem;
            border-radius: 3px;
            text-transform: capitalize;
        }

        &.completed {
            span {
                background-color: green;
            }
        }
        &.pending {
            span {
                background-color: orange;
            }
        }
        &.failed {
            span {
                background-color: red;
            }
        }
    }
`;

export const PaginationFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    flex-wrap: wrap;

    @media (max-width: 991px) {
        flex-direction: column;
        justify-content: center;

        .select {
            margin-bottom: 15px;
        }

        .infos {
            margin-top: 15px;
        }
    }

    .select {
        display: flex;
        align-items: center;

        select {
            border: 1px solid #c4c7db;
            outline: 0;
            height: 38px;
            border-radius: 4px;
            padding-left: 5px;
            margin-right: 5px;
            color: #333;
        }
        span {
            font-size: 0.9rem;
        }
    }

    .main-pagination {
        display: flex;
        align-items: center;

        @media (max-width: 991px) {
            .keys {
                display: none;
            }
        }

        button {
            outline: 0;
            margin: 0 8px;
            background: #fff;
            border: 1px solid #c4c7db;
            padding: 5px 14px;
            border-radius: 3px;

            &.active {
                background: ${props => props.theme.main};
                color: #fff;
            }
        }
    }

    .infos {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #edeef0;
        padding: 10px 30px;
        border-radius: 4px;

        p {
            margin: 0;
            padding: 0;
            color: #666666;
            font-size: 0.8rem;
            font-weight: 600;
        }
    }
`;
