import React from 'react';
import {Card} from '../../styles/dashboard.styles';
import {Table} from '../../styles/table.styles';

const Recent = () => {
    const list = [
        {
            id: 1,
            ref: 'TRF67382990TYH67',
            amount: `₦20,000`,
            user: 'Olawale Afolabi',
            status: 'completed',
        },
        {
            id: 2,
            ref: 'TRF67382990TYH67',
            amount: `₦20,000`,
            user: 'Olawale Afolabi',
            status: 'pending',
        },
        {
            id: 3,
            ref: 'TRF67382990TYH67',
            amount: `₦20,000`,
            user: 'Olawale Afolabi',
            status: 'pending',
        },
        {
            id: 4,
            ref: 'TRF67382990TYH67',
            amount: `₦20,000`,
            user: 'Olawale Afolabi',
            status: 'completed',
        },
        {
            id: 5,
            ref: 'TRF67382990TYH67',
            amount: `₦20,000`,
            user: 'Olawale Afolabi',
            status: 'failed',
        },
    ];
    return (
        <Card>
            <div className="c-head">
                <h5>Recent Transactions</h5>
            </div>
            <div>
                <div className="table-responsive">
                    <Table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Transaction Ref</th>
                                <th className="amount">Amount</th>
                                <th>User</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map(t => (
                                <tr key={t.id}>
                                    <td>{t.id}</td>
                                    <td>{t.ref}</td>
                                    <td className="amount">{t.amount}</td>
                                    <td>{t.user}</td>
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
    );
};

export default Recent;
