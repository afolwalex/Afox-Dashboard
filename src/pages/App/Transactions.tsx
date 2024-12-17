import React, {useEffect} from 'react';
import {Card} from '../../styles/dashboard.styles';
import Filter from '../../components/Filter';
import {Table} from '../../styles/table.styles';
import {transactions} from '../../utils/data';
import Paginate from '../../components/Paginate';

const Transactions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contain">
            <Card>
                <div className="c-head">
                    <h5>
                        All Transactions <span className="count">10</span>
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
                    <Paginate
                        currentPage={1}
                        totalCount={20}
                        pageSize={10}
                        onSelect={(p: number) => console.log('')}
                        onNext={(p: number) => console.log('')}
                        onPrev={(p: number) => console.log('')}
                        changeLimit={(p: string) => console.log('')}
                    />
                </div>
            </Card>
        </div>
    );
};

export default Transactions;
