import React from 'react';
import {Select} from '../styles/form.styles';

const Filter = () => {
    return (
        <div className="row">
            <div className="col-lg-2 mb-3">
                <Select>
                    <option value={''}>Filter By</option>
                </Select>
            </div>
            <div className="col-lg-2 mb-3">
                <Select>
                    <option value={''}>Filter By</option>
                </Select>
            </div>
            <div className="col-lg-2 mb-3">
                <Select>
                    <option value={''}>Filter By</option>
                </Select>
            </div>
            <div className="col-lg-2 mb-3">
                <Select>
                    <option value={''}>Filter By</option>
                </Select>
            </div>
        </div>
    );
};

export default Filter;
