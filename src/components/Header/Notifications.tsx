import {NotifyStyle} from '../../styles/header.styles';
import EachNotification from '../Lists/EachNotification';
import OutsideClick from '../OutsideClick';
import {MdClose} from 'react-icons/md';

const Notifications = ({open, close}: {open: boolean; close: () => void}) => {
    const list = [
        {id: 1, date: '30 Minutes ago', title: 'John updated the report sheet'},
        {id: 2, date: '1 day ago', title: 'Bulk Transaction Approved'},
        {id: 1, date: '2 days ago', title: 'Marcus updated the report sheet'},
        {id: 2, date: '3 days ago', title: 'Bulk Transaction Approved'},
        {id: 1, date: '3 days ago', title: 'Demba updated the report sheet'},
        {id: 2, date: '4 days ago', title: 'Invoice has been raised'},
        {
            id: 1,
            date: '5 days ago',
            title: 'Marcus logged in to the Admin dashboard',
        },
        {id: 2, date: '25th March 2024', title: 'A new version is available'},
    ];

    return open ? (
        <NotifyStyle className="shaodow-sm">
            <OutsideClick handleToggle={() => close()}>
                <div className="noti-body">
                    <div className="close-btn">
                        <button className="pin" onClick={close}>
                            <MdClose />
                        </button>
                    </div>
                    <div className="mt-3">
                        <h5 className="mb-4">Notifications</h5>
                        <div className="list">
                            {list.map(li => (
                                <EachNotification item={li} key={li.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </OutsideClick>
        </NotifyStyle>
    ) : (
        <></>
    );
};

export default Notifications;
