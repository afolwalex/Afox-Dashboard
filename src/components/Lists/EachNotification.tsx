import React from 'react';
import {HiOutlineBellAlert} from 'react-icons/hi2';

const EachNotification = ({item}: {item: any}) => {
    return (
        <div className="each-noti">
            <HiOutlineBellAlert />
            <div>
                <p>{item.title}</p>
                <p>{item.date}</p>
            </div>
        </div>
    );
};

export default EachNotification;
