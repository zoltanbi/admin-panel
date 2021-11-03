import React from 'react'

import './table.css'

import { TableCustomer, OrderUser } from '../../interfaces/TableData.interface';
import { CustomerData } from '../../interfaces/JsonData.interface';

interface TableProps {
    headData: string[];
    renderHead: any;
    bodyData: TableCustomer[] | OrderUser[] | CustomerData[];
    renderBody: any;
}

const Table = (props: TableProps) => {
    return (
        <div>
            <div className="table-wrapper">
                <table>
                    {
                        props.headData && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        props.headData.map((item, index) => props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        props.bodyData && props.renderBody ? (
                            <tbody>
                                {
                                    props.bodyData.map((item, index) => props.renderBody(item, index))
                                }
                            </tbody>
                        ) : null
                    }
                </table>
            </div>
        </div>
    )
}

export default Table
