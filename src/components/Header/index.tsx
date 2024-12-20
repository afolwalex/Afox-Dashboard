import {HeaderStyle} from '../../styles/header.styles';
import {RiPushpinFill, RiUnpinFill} from 'react-icons/ri';
import {
    FiChevronRight,
    FiChevronLeft,
    FiSearch,
    FiUser,
    FiBell,
} from 'react-icons/fi';
import {useState} from 'react';
import Notifications from './Notifications';
import ProfileDropDown from './ProfileDropDown';
import {MdDarkMode, MdMenu, MdOutlineWbSunny} from 'react-icons/md';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {setTheme} from '../../redux/features/settings/settingsSlice';

const Header = ({
    openMenu,
    onPin,
    pinned,
    minimizeHandler,
    minimized,
}: {
    openMenu: () => void;
    onPin: (arg: boolean) => void;
    pinned: boolean;
    minimizeHandler: (val: boolean) => void;
    minimized: boolean;
}) => {
    const dispatch = useAppDispatch();

    const [openProfile, setOpenProfile] = useState(false);
    const [openNoti, setOpenNoti] = useState(false);

    const {theme} = useAppSelector(state => state.settings);

    return (
        <HeaderStyle>
            <div className="web">
                <button
                    className="pin me-3"
                    onClick={() => minimizeHandler(!minimized)}>
                    {!minimized ? (
                        <FiChevronLeft size={20} />
                    ) : (
                        <FiChevronRight size={20} />
                    )}
                </button>
                <button className="pin" onClick={() => onPin(!pinned)}>
                    {!pinned ? (
                        <RiUnpinFill size={20} />
                    ) : (
                        <RiPushpinFill size={20} />
                    )}
                </button>
            </div>
            <div className="mobile">
                <button
                    className="pin"
                    onClick={() => {
                        onPin(true);
                        minimizeHandler(false);
                        openMenu();
                    }}>
                    <MdMenu size={20} />
                </button>
            </div>
            <div className="second">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <FiSearch size={18} />
                </div>
                <button
                    className="me-3 no-b"
                    onClick={() =>
                        dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))
                    }>
                    {theme !== 'dark' ? (
                        <MdDarkMode size={25} />
                    ) : (
                        <MdOutlineWbSunny size={25} />
                    )}
                </button>
                <button className="pin me-3" onClick={() => setOpenNoti(true)}>
                    <FiBell />
                </button>
                <button className="pin" onClick={() => setOpenProfile(true)}>
                    <FiUser size={20} />
                </button>
            </div>
            <ProfileDropDown
                open={openProfile}
                close={() => setOpenProfile(false)}
            />
            <Notifications open={openNoti} close={() => setOpenNoti(false)} />
        </HeaderStyle>
    );
};

export default Header;
