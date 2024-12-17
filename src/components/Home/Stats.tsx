import {StatBox} from '../../styles/dashboard.styles';
import {FiUsers} from 'react-icons/fi';
import {LuWallet} from 'react-icons/lu';
import {MdOutlineApproval} from 'react-icons/md';
import {TbReportAnalytics} from 'react-icons/tb';

const Stats = () => {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-6 mb-3">
                <StatBox style={{borderRightColor: '#DFBBB1'}}>
                    <div>
                        <p>Total Users</p>
                        <h4>70</h4>
                    </div>
                    <div className="icon" style={{background: '#DFBBB1'}}>
                        <FiUsers size={25} />
                    </div>
                </StatBox>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
                <StatBox style={{borderRightColor: '#F56476'}}>
                    <div>
                        <p>Transaction Sum</p>
                        <h4>₦405,050</h4>
                    </div>
                    <div className="icon" style={{background: '#F56476'}}>
                        <LuWallet size={25} />
                    </div>
                </StatBox>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
                <StatBox style={{borderRightColor: '#BE3E82'}}>
                    <div>
                        <p>Pending Approvals</p>
                        <h4>100</h4>
                    </div>
                    <div className="icon" style={{background: '#BE3E82'}}>
                        <MdOutlineApproval size={25} />
                    </div>
                </StatBox>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
                <StatBox style={{borderRightColor: '#E43F6F'}}>
                    <div>
                        <p>All Reports</p>
                        <h4>85</h4>
                    </div>
                    <div className="icon" style={{background: '#E43F6F'}}>
                        <TbReportAnalytics size={25} />
                    </div>
                </StatBox>
            </div>
        </div>
    );
};

export default Stats;
