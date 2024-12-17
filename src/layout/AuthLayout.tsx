import {Outlet} from 'react-router-dom';
import Logo from '../assets/logo192.png';
import {AuthStyle} from '../styles/auth.styles';

const AuthLayout = () => {
    return (
        <AuthStyle>
            <div className="img-bg"></div>
            <div className="form-bg">
                <div className="content">
                    <div className="container">
                        <div className="logo-sm">
                            <img src={Logo} alt="logo" />
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
            <div className="logo shadow">
                <img src={Logo} alt="logo" />
            </div>
        </AuthStyle>
    );
};

export default AuthLayout;
