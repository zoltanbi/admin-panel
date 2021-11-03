import React from 'react'

import Table from '../components/table/Table';

import customerList from '../assets/JsonData/customers-list.json';

import { CustomerData } from '../interfaces/JsonData.interface'

const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
]

const renderHead = (item: string, index: number) => <th key={index}>{item}</th>

const renderBody = (item: CustomerData, index: number) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)

const Customers = () => {
    return (
        <div>
            <h2 className="page-header">
                customers
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                headData={customerTableHead}
                                renderHead={(item: string, index: number) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item: CustomerData, index: number) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
