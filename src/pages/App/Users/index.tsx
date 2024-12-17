import {Link} from 'react-router-dom';
import Filter from '../../../components/Filter';
import {Card} from '../../../styles/dashboard.styles';
import {Table} from '../../../styles/table.styles';
import {users} from '../../../utils/data';
import {Button} from '../../../styles/form.styles';
import {FiPlus} from 'react-icons/fi';
import {useEffect, useState} from 'react';
import ModalComponent from '../../../components/ModalComponent';
import NewUser from './NewUser';

const Users = () => {
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contain">
            <Card>
                <div className="c-head">
                    <h5>
                        All Users <span className="count">5</span>
                    </h5>
                    <Button onClick={() => setOpenModal(true)}>
                        <FiPlus size={20} />
                        <span>New</span>
                    </Button>
                </div>
                <div>
                    <Filter />
                    <div className="table-responsive">
                        <Table className="table">
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Gender</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(t => (
                                    <tr key={t.id}>
                                        <td>{t.name}</td>
                                        <td>{t.email}</td>
                                        <td>{t.phone}</td>
                                        <td>{t.gender}</td>
                                        <td
                                            className={`status ${
                                                t.status === 'Active'
                                                    ? 'completed'
                                                    : 'failed'
                                            }`}>
                                            <span>{t.status}</span>
                                        </td>
                                        <td className="link">
                                            <Link to={`${t.id}`}>
                                                View Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Card>
            <ModalComponent
                open={openModal}
                close={() => setOpenModal(false)}
                title="Create New User">
                <NewUser />
            </ModalComponent>
        </div>
    );
};

export default Users;
