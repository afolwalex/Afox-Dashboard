import {ProfileDropStyle} from '../../styles/header.styles';
import OutsideClick from '../OutsideClick';
import Avatar from '../../assets/avatar-4.jpg';
import {useNavigate} from 'react-router-dom';
import {FaSignOutAlt, FaUserEdit} from 'react-icons/fa';

const ProfileDropDown = ({open, close}: {open: boolean; close: () => void}) => {
    const navigate = useNavigate();

    return open ? (
        <ProfileDropStyle>
            <OutsideClick handleToggle={() => close()}>
                <div className="drop shadow">
                    <div className="image">
                        <img src={Avatar} alt="Avatar" />
                    </div>
                    <div>
                        <button>
                            <FaUserEdit />
                            <span>Edit Profile</span>
                        </button>
                        <button onClick={() => navigate('/')}>
                            <FaSignOutAlt />
                            <span>Log Out</span>
                        </button>
                    </div>
                </div>
            </OutsideClick>
        </ProfileDropStyle>
    ) : (
        <></>
    );
};

export default ProfileDropDown;
