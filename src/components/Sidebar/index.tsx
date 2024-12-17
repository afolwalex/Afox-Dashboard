import {SidebarDiv, SidebarMenu} from '../../styles/dashboard.styles';
import Logo from '../../assets/logo192.png';
import {MdDarkMode, MdOutlineWbSunny} from 'react-icons/md';
import {LuHome, LuSettings, LuWallet} from 'react-icons/lu';
import {TbReportAnalytics} from 'react-icons/tb';
import {HiOutlineUsers} from 'react-icons/hi2';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {PiSignOutBold} from 'react-icons/pi';
import {setTheme} from '../../redux/features/settings/settingsSlice';
import {NavLink, useNavigate} from 'react-router-dom';
import Confirm from '../Confirm';
import {useState} from 'react';

interface Props {
    open: boolean;
    minimizeHandler: (val: boolean) => void;
    minimized: boolean;
    onClose: () => void;
    pinned: boolean;
}

const Sidebar = ({
    minimized,
    open,
    minimizeHandler,
    pinned,
    onClose,
}: Props) => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const [openConfirm, setOpenConfirm] = useState(false);

    const {theme} = useAppSelector(state => state.settings);

    return (
        <SidebarDiv
            minimize={`${minimized}`}
            className={open ? `open-m shadow-sm` : 'shadow-sm'}
            onMouseEnter={() =>
                pinned ? console.log('') : minimizeHandler(false)
            }
            onMouseLeave={() =>
                pinned ? console.log('') : minimizeHandler(true)
            }>
            <div className="logo">
                <img src={Logo} />
            </div>
            <SidebarMenu minimize={`${minimized}`}>
                <ul className="first" onClick={() => onClose()}>
                    <li>
                        <NavLink to={'/app/home'}>
                            <LuHome size={25} />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/app/report'}>
                            <TbReportAnalytics size={25} />
                            <span>Report</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/app/users'}>
                            <HiOutlineUsers size={25} />
                            <span>Users</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/app/transactions'}>
                            <LuWallet size={25} />
                            <span>Transactions</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/app/settings'}>
                            <LuSettings size={25} />
                            <span>Settings</span>
                        </NavLink>
                    </li>
                </ul>
                <ul className="second">
                    <li>
                        <button
                            onClick={() =>
                                dispatch(
                                    setTheme(
                                        theme === 'dark' ? 'light' : 'dark',
                                    ),
                                )
                            }>
                            {theme !== 'dark' ? (
                                <MdDarkMode size={25} />
                            ) : (
                                <MdOutlineWbSunny size={25} />
                            )}
                            <span>
                                {theme !== 'dark' ? 'Dark' : 'Light'} Mode
                            </span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setOpenConfirm(true)}>
                            <PiSignOutBold size={25} />
                            <span>Sign Out</span>
                        </button>
                    </li>
                </ul>
            </SidebarMenu>
            <Confirm
                message="Are you sure you want to log out?"
                onProceed={() => navigate('/')}
                open={openConfirm}
                close={() => setOpenConfirm(false)}
            />
        </SidebarDiv>
    );
};

export default Sidebar;
