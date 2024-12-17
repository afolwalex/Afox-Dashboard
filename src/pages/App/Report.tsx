import React, {useEffect, useState} from 'react';
import Tab from '../../components/Tab';
import {Card} from '../../styles/dashboard.styles';
import Filter from '../../components/Filter';
import {Table} from '../../styles/table.styles';
import {transactions} from '../../utils/data';

const Report = () => {
    const [active, setActive] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contain">
            <div className="mb-3">
                <Tab
                    tabs={[
                        {id: 1, name: 'First Report'},
                        {id: 2, name: 'Second Report'},
                    ]}
                    active={active}
                    setActive={setActive}
                />
            </div>
            <Card>
                <div className="c-head">
                    <h5>
                        Reports <span className="count">10</span>
                    </h5>
                </div>
                <div>
                    <Filter />
                    <div className="table-responsive">
                        <Table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Transaction Ref</th>
                                    <th className="amount">Amount</th>
                                    <th>Channel</th>
                                    <th>User</th>
                                    <th>Approved By</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map(t => (
                                    <tr key={t.id}>
                                        <td>{t.id}</td>
                                        <td>{t.ref}</td>
                                        <td className="amount">{t.amount}</td>
                                        <td>Card</td>
                                        <td>{t.user}</td>
                                        <td>Super Admin</td>
                                        <td className={`status ${t.status}`}>
                                            <span>{t.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Report;
