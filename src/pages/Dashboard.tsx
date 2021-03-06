import React, { useEffect } from 'react'

import { Link } from 'react-router-dom';

import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';

import ThemeAction from '../redux/actions/ThemeAction';

import StatusCard from '../components/status-card/StatusCard'

import statusCards from '../assets/JsonData/status-card-data.json'

import Table from '../components/table/Table';
import { TableCustomer, TopCustomers, OrderStatus, LatestOrder, OrderUser } from '../interfaces/TableData.interface'

import Badge from '../components/badge/Badge';
import ThemeReducer from '../redux/reducers/ThemeReducer';

interface ApexChartOptions {
    options?: ApexOptions;
    series?: ApexAxisChartSeries;
}

const chartOptions: ApexChartOptions = {
    options: {
        colors: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        },
    },
    series: [{
        name: 'Online Customers',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    }, {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }]
}

const topCustomers: TopCustomers = {
    head: [
        "user",
        "total orders",
        "total spending"
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const renderCustomerHead = (item: string, index: number) => (
    <th key={index}>{item}</th>
)

const renderCustomerBody = (item: TableCustomer, index: number) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders: LatestOrder = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "jeffery curtis",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "lucas white",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1714",
            user: "walter black",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "quinn hughs",
            date: "1 Jun 2021",
            price: "$200",
            status: "refund"
        },
    ]
}

const orderStatus: OrderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item: string, index: number) => (
    <th key={index}>item</th>
)

const renderOrderBody = (item: OrderUser, index: number) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
        {/*@ts-ignore */}
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

// const badgeStyle = {
//     'danger': 'badge-danger',
//     'primary': 'badge-primary',
//     'danger': 'badge-danger',
//     'danger': 'badge-danger',
// }

const Dashboard = () => {

    const themeReducer = useSelector((state: RootStateOrAny) => state.ThemeReducer.mode)

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(ThemeAction.getTheme())
    // })

    return (
        <div>
            <h2 className='page-header'>Dashboard</h2>
            <div className="row">
                <div className="col-6 col-md-12">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6 col-md-6 col-sm-12" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6 col-md-12">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark' }
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light' }
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4 col-md-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>top customers</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item: string, index: number) => renderCustomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item: TableCustomer, index: number) => renderCustomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-md-12">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest orders</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item: string, index: number) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item: OrderUser, index: number) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
