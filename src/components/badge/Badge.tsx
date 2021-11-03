import React from 'react'

import './badge.css'

import { OrderStatus } from '../../interfaces/TableData.interface'

interface BadgeProps {
    type: string;
    content: OrderStatus;
}

const Badge = (props: BadgeProps) => {
    return (
        <span className={`badge badge-${props.type}`}>
            {props.content}
        </span>
    )
}

export default Badge
