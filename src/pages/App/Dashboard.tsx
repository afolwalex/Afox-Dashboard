import {useEffect} from 'react';
import DashboardBar from '../../components/Charts/DashboardBar';
import DashboardLine from '../../components/Charts/DashboardLine';
import DashboardPie from '../../components/Charts/DashboardPie';
import Recent from '../../components/Home/Recent';
import Stats from '../../components/Home/Stats';
import {Card} from '../../styles/dashboard.styles';

const Dashboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contain">
            <Stats />
            <div className="row mt-3">
                <div className="col-lg-6 mb-3">
                    <Card>
                        <DashboardLine />
                    </Card>
                </div>
                <div className="col-lg-6 mb-3">
                    <Card>
                        <DashboardBar />
                    </Card>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-8 mb-3">
                    <Recent />
                </div>
                <div className="col-lg-4 mb-3">
                    <Card>
                        <DashboardPie />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
