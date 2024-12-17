import {useState} from 'react';
import OutsideClick from '../components/OutsideClick';
import {AppContent, MainPage} from '../styles/dashboard.styles';
import Sidebar from '../components/Sidebar';
import {Outlet} from 'react-router-dom';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {sidebarSetting} from '../redux/features/settings/settingsSlice';

const AppLayout = () => {
    const dispatch = useAppDispatch();

    const [open, setOpen] = useState(false);
    const {sidebar} = useAppSelector(state => state.settings);

    const changeSidebarOption = (min: boolean, pin: boolean) => {
        dispatch(sidebarSetting({minimized: min, pinned: pin}));
    };

    return (
        <div>
            <OutsideClick handleToggle={() => setOpen(false)}>
                <Sidebar
                    open={open}
                    minimizeHandler={(val: boolean) =>
                        changeSidebarOption(val, sidebar.pinned)
                    }
                    onClose={() => setOpen(false)}
                    minimized={sidebar.minimized}
                    pinned={sidebar.pinned}
                />
            </OutsideClick>
            <MainPage minimize={`${sidebar.minimized}`}>
                <AppContent>
                    <Header
                        openMenu={() => setOpen(!open)}
                        onPin={val =>
                            changeSidebarOption(sidebar.minimized, val)
                        }
                        pinned={sidebar.pinned}
                        minimized={sidebar.minimized}
                        minimizeHandler={(val: boolean) =>
                            changeSidebarOption(val, sidebar.pinned)
                        }
                    />
                    <div className="main-content">
                        <div className="container">
                            <BreadCrumb />
                            <Outlet />
                        </div>
                    </div>
                </AppContent>
            </MainPage>
        </div>
    );
};

export default AppLayout;
