import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Auth/Login';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/App/Dashboard';
import Transactions from './pages/App/Transactions';
import Users from './pages/App/Users';
import Report from './pages/App/Report';
import Settings from './pages/App/Settings';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route path="" element={<Login />} />
                </Route>
                <Route
                    path="/app"
                    element={<Navigate replace to="/app/home" />}
                />
                <Route path="app" element={<AppLayout />}>
                    <Route path="home" element={<Dashboard />} />
                    <Route path="report" element={<Report />} />
                    <Route path="users" element={<Users />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
