import React from 'react';
import {MdKeyboardArrowRight, MdOutlineKeyboardBackspace} from 'react-icons/md';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {BreadCrumbStyle} from '../styles/basic.styles';

const BreadCrumb = () => {
    const navigate = useNavigate();

    const location = useLocation().pathname;

    const lists = location.split('/').slice(2);

    let currentLink = '/app';

    const crumbs = lists.map(crumb => {
        currentLink += `/${crumb}`;

        return (
            <Link to={currentLink} key={crumb}>
                <span>{crumb}</span>
                <MdKeyboardArrowRight />
            </Link>
        );
    });

    return (
        <BreadCrumbStyle>
            {crumbs.length > 1 && (
                <button onClick={() => navigate(-1)}>
                    <MdOutlineKeyboardBackspace />
                    <span>Back</span>
                </button>
            )}
            {crumbs}
        </BreadCrumbStyle>
    );
};

export default BreadCrumb;
